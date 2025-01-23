import type { ComponentChildren, ComponentChild } from "$/component/component.ts";

export default function applyChildren(node: Node, children: ComponentChildren): void {
  children.forEach((child) => applyChild(node, child));
}

function applyChild(node: Node, child: ComponentChild): void {
  if (Array.isArray(child)) {
    applyChildren(node, child);
    return;
  }

  if (child instanceof Node) {
    node.appendChild(child);
    return;
  }

  if (child !== false && child != null) {
    const text = document.createTextNode(String(child));
    node.appendChild(text);
  }
}