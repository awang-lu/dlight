import { DLNodeType } from "../DLNode"
import { MutableNode } from "./MutableNode"
import { DLStore } from "../store"

export class ExpNode extends MutableNode {
  nodesFunc

  /**
   * @brief Constructor, Exp type, accept a function that returns a list of nodes
   * @param nodesFunc
   */
  constructor(nodesFunc) {
    super(DLNodeType.Exp)
    this.nodesFunc = nodesFunc
    this._$nodes = ExpNode.formatNodes(nodesFunc())
  }

  /**
   * @brief Generate new nodes and replace the old nodes
   */
  update() {
    const newNodes = this.geneNewNodesInEnv(() =>
      ExpNode.formatNodes(this.nodesFunc())
    )
    this.removeNodes(this._$nodes)
    if (newNodes.length === 0) {
      this._$nodes = []
      return
    }

    // ---- Add new nodes
    const parentEl = this._$parentEl
    const flowIndex = MutableNode.getFlowIndexFromNodes(parentEl._$nodes, this)
    const nextSibling = parentEl.childNodes[flowIndex]
    MutableNode.appendNodesWithSibling(newNodes, parentEl, nextSibling)
    MutableNode.runDidMount(newNodes)

    this._$nodes = newNodes
  }

  /**
   * @brief Format the nodes
   * @param nodes
   * @returns New nodes
   */
  static formatNodes(nodes) {
    if (!Array.isArray(nodes)) nodes = [nodes]
    return (
      nodes
        // ---- Flatten the nodes
        .flat(1)
        // ---- Filter out empty nodes
        .filter(
          node =>
            node !== undefined && node !== null && typeof node !== "boolean"
        )
        .map(node => {
          // ---- If the node is a string, number or bigint, convert it to a text node
          if (
            typeof node === "string" ||
            typeof node === "number" ||
            typeof node === "bigint"
          ) {
            return DLStore.document.createTextNode(`${node}`)
          }
          // ---- If the node has PropView, call it to get the view
          if ("propViewFunc" in node) return node.build()
          return node
        })
        // ---- Flatten the nodes again
        .flat(1)
    )
  }
}
