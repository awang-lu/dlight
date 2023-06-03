import * as t from "@babel/types"
import { shouldBeListened, isMemberInFunction, isMemberExpressionProperty, isObjectKey } from "./nodeHelper"
import { type ParserNode } from "./parser"

const htmlTags = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "label", "legend", "li", "link", "main", "map", "mark", "menu", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "slot", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr"]

export function isHTMLTag(parserNode: ParserNode) {
  const tag = parserNode.tag
  if (typeof tag === "string") return false
  if (t.isIdentifier(tag) && htmlTags.includes(tag.name)) {
    parserNode.tag = t.stringLiteral(tag.name)
    return true
  }
  if (t.isCallExpression(tag) && (tag.callee as any).name === "htmlTag") {
    parserNode.tag = tag.arguments[0]
    return true
  }
  return false
}

export function parseCustomTag(parserNode: ParserNode) {
  const tag = parserNode.tag
  if (typeof tag === "string") return false
  // ---- 碰到名字叫tag，可以嵌套：tag(MyTagList[100].getTag())().height(100)
  if (t.isCallExpression(tag) && (tag.callee as any).name === "tag") {
    parserNode.tag = tag.arguments[0]
    return true
  }
}

export function uid() {
  return Math.random().toString(20).slice(2, 8)
}

export function geneDeps(path: any, value: t.Node, depChain: string[], otherDeps: t.StringLiteral[] = []) {
  let deps: t.StringLiteral[] = []
  path.scope.traverse(
    t.variableDeclaration("const", [t.variableDeclarator(t.identifier("_"), value as any)]),
    {
      Identifier(innerPath: any) {
        if (
          depChain.includes(innerPath.node.name) &&
        t.isMemberExpression(innerPath.parentPath.node) &&
        t.isThisExpression(innerPath.parentPath.node.object) &&
        shouldBeListened(innerPath)
        ) {
          deps.push(t.stringLiteral(innerPath.node.name))
        }
      }
    })
  deps = [...new Set([...deps, ...otherDeps])]

  return deps
}

// ---- 只给for的解构用
export function geneIdDeps(path: any, value: t.Node, arr: Array<{ ids: string[], propNames: string[] }>, otherDeps: t.StringLiteral[] = []) {
  let deps: t.StringLiteral[] = []
  path.scope.traverse(value, {
    Identifier(innerPath: any) {
      for (const { ids, propNames } of arr) {
        if (ids.includes(innerPath.node.name)) {
          // ---- 这里不会遇到赋值的情况，所以只要判断在不在function里面就行
          if (!isMemberInFunction(innerPath)) {
            deps.push(...propNames.map(name => t.stringLiteral(name)))
          }
        }
      }
    }
  })
  deps = [...new Set([...deps, ...otherDeps])]

  return deps
}

export function getIdentifiers(valueStr: string) {
  return valueStr.match(/[_$a-zA-Z][_$a-zA-Z0-9]*/g) ?? []
}

export function resolveForBody(path: any, body: t.BlockStatement, item: t.Node, valueItemStr: string) {
  const identifierKeys: string[] = []
  // ---- 遍历拿到所有item里面的标识符，下面要把标识符转换成带.value的
  path.scope.traverse(item, {
    Identifier(innerPath: any) {
      identifierKeys.push(innerPath.node.name)
    }
  })
  path.scope.traverse(t.functionDeclaration(null, [], body), {
    Identifier(innerPath: any) {
      // ---- 必须key相等，但是不能是 xxx.keyname，也就是不是memberExpression
      //      但可以是 keyname.xxx 或者 xxx[keyname] -> computed = true
      if (identifierKeys.includes(innerPath.node.name) &&
                !isMemberExpressionProperty(innerPath.parentPath.node, innerPath.node) &&
                !isObjectKey(innerPath.parentPath.node, innerPath.node)
      ) {
        const valueNode = t.memberExpression(
          t.identifier(valueItemStr),
          t.identifier(innerPath.node.name)
        )
        innerPath.replaceWith(valueNode)
        innerPath.skip()
      }
    }
  })
}

export function getForIdArr(item: t.Node, path: any) {
  const idArr: string[] = []
  path.scope.traverse(item, {
    Identifier(innerPath: any) {
      idArr.push(innerPath.node.name)
    }
  })

  return idArr
}

export function isElementFunction(value: t.Node) {
  return !!(t.isArrowFunctionExpression(value) || t.isFunctionExpression(value))
}

export function isTwoWayConnected(value: t.Node) {
  return t.isMemberExpression(value)
}
