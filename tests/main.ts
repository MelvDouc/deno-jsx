import { Window } from "happy-dom";
import "@melvdouc/dsx";

const window = new Window();
const { document } = window;

Object.defineProperties(globalThis, {
  document: { value: document },
  Node: { value: window.Node },
  HTMLElement: { value: window.HTMLElement },
  HTMLInputElement: { value: window.HTMLInputElement }
});