import { assert, assertEquals } from "@std/assert";
import "./main.ts";

Deno.test("Create a simple element", () => {
  const p = (
    <p>lorem ipsum</p>
  );

  assert(p instanceof HTMLElement);
  assert(p.tagName.toLowerCase() === "p");
  assertEquals(p.innerText, "lorem ipsum");
});

Deno.test("Create an element with children", () => {
  const title = "title";
  const element = (
    <div><strong>A.</strong> {title}</div>
  );

  assert(element instanceof HTMLElement);
  assert(element.tagName.toLowerCase() === "div");
  assertEquals(element.innerText, `A. ${title}`);
  assertEquals(element.childElementCount, 1);
  assert(element.children[0] instanceof Node);
  assertEquals(element.children[0].tagName.toLowerCase(), "strong");
});

Deno.test("Add deeply nested children", () => {
  const children = [
    (<li>1</li>),
    (<li>
      <div id="div1">{[2, [3]]}</div>
    </li>),
  ];
  const element = (
    <ul>{children}</ul>
  );

  assert(element instanceof HTMLElement);
  assert(element.tagName.toLowerCase() === "ul");
  assertEquals(element.childElementCount, 2);
  assert(element.children[1] instanceof Node);
  const innerHTML = element.children[1].children[0].innerHTML;
  assertEquals(innerHTML, "23", innerHTML);
});

Deno.test("Add falsy children", () => {
  const children = [
    (<li>1</li>),
    null,
    (<li>
      <div id="div1">{[2, undefined]}</div>
    </li>),
  ];
  const element = (
    <ul>{children}</ul>
  );

  assert(element instanceof HTMLElement);
  assert(element.tagName.toLowerCase() === "ul");
  assertEquals(element.childElementCount, 2);
  assert(element.children[1] instanceof Node);
  const innerHTML = element.children[1].children[0].innerHTML;
  assertEquals(innerHTML, "2", innerHTML);
});

Deno.test("readonly attributes", () => {
  const element = (
    <input type="text" list="d-list" required />
  ) as HTMLInputElement;

  assert(element instanceof HTMLInputElement);
  assertEquals(element.getAttribute("list"), "d-list");
  assertEquals(element.required, true);
});