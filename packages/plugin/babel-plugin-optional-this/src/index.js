import * as t from '@babel/types'

/**
 * check if the identifier is from a function param, e.g:
 * class MyClass {
 *  ok = 1
 *  myFunc1 = () => ok // change to myFunc1 = () => this.ok
 *  myFunc2 = ok => ok // don't change !!!!
 * }
 */
function isAttrFromFunction(path, idName, stopNode) {
  let reversePath = path.parentPath

  const checkParam = (param) => {
    // ---- 3 general types:
    //      * represent allow nesting
    // ---0 Identifier: (a)
    // ---1 RestElement: (...a)   *
    // ---1 Pattern: 3 sub Pattern
    // -----0   AssignmentPattern: (a=1)   *
    // -----1   ArrayPattern: ([a, b])   *
    // -----2   ObjectPattern: ({a, b})
    if (t.isIdentifier(param)) return param.name === idName
    if (t.isAssignmentPattern(param)) return checkParam(param.left)
    if (t.isArrayPattern(param)) {
      return param.elements.map((el) => checkParam(el)).includes(true)
    }
    if (t.isObjectPattern(param)) {
      return param.properties
        .map((prop) => prop.key.name)
        .includes(idName)
    }
    if (t.isRestElement(param)) return checkParam(param.argument)

    return false
  }

  while (reversePath && reversePath.node !== stopNode) {
    const node = reversePath.node
    if (t.isArrowFunctionExpression(node) || t.isFunctionDeclaration(node)) {
      for (let param of node.params) {
        if (checkParam(param)) return true
      }
    }
    reversePath = reversePath.parentPath
  }
  if (t.isClassMethod(stopNode)) {
    for (let param of stopNode.params) {
      if (checkParam(param)) return true
    }
  }
  return false
}

/**
 * check if the identifier is already like `this.a` / `xx.a` but not like `a.xx` / xx[a]
 */
function isMemberExpression(path) {
  const parentNode = path.parentPath.node
  return t.isMemberExpression(parentNode) && parentNode.property === path.node && parentNode.computed === false
}

/**
 * check if the identifier is a variable declarator like `let a = 1` `for (let a in array)`
 */
function isVariableDeclarator(path) {
  const parentNode = path.parentPath.node
  return t.isVariableDeclarator(parentNode) && parentNode.id === path.node
}

export default function () {
  return {
    visitor: {
      ClassDeclaration(classPath) {
        const classBodyNode = classPath.node.body
        const availPropNames = classBodyNode.body.map(
          (def) => def.key.name
        )

        for (let memberOrMethod of classBodyNode.body) {
          classPath.scope.traverse(memberOrMethod, {
            Identifier(path) {
              const idNode = path.node
              if (idNode === memberOrMethod.key) return
              const idName = idNode.name
              if (
                availPropNames.includes(idName) &&
                !isMemberExpression(path) &&
                !isVariableDeclarator(path) &&
                !isAttrFromFunction(path, idName, memberOrMethod)
              ) {
                path.replaceWith(
                  t.memberExpression(t.thisExpression(), t.identifier(idName))
                )
                path.skip()
              }
            },
          })
        }
      },
    },
  }
}
