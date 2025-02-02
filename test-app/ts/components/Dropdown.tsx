import type { ComponentParent } from "@melvdouc/dsx";

export default function Dropdown({ children }: ComponentParent) {
  return (
    <details className="dropdown">
      {children}
    </details>
  );
}

Dropdown.Head = ({ children }: ComponentParent) => {
  return (
    <summary className="dropdown-head">{children}</summary>
  );
};

Dropdown.Body = ({ children }: ComponentParent) => {
  return (
    <ul className="dropdown-body">{children}</ul>
  );
};

Dropdown.BodyItem = ({ children }: ComponentParent) => {
  return (
    <li>{children}</li>
  );
};

const _dropdown = (
  <Dropdown>
    <Dropdown.Head>
      <h1>Title</h1>
    </Dropdown.Head>
    <Dropdown.Body>
      <Dropdown.BodyItem></Dropdown.BodyItem>
      <Dropdown.BodyItem>text</Dropdown.BodyItem>
    </Dropdown.Body>
  </Dropdown>
);