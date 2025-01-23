import type { ComponentChildren } from "@melvdouc/dsx";

export default function Dropdown({ children }: ParentComponent) {
  return (
    <details className="dropdown">
      {children}
    </details>
  );
}

Dropdown.Head = ({ children }: ParentComponent) => {
  return (
    <summary className="dropdown-head">{children}</summary>
  );
};

Dropdown.Body = ({ children }: { children: Node[]; }) => {
  return (
    <ul className="dropdown-body">{children}</ul>
  );
};

Dropdown.BodyItem = ({ children }: ParentComponent) => {
  return (
    <li>{children}</li>
  );
};

type ParentComponent = {
  children: ComponentChildren;
};