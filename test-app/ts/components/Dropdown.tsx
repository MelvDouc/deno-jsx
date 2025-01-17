export default function Dropdown({ open, children }: {
  open?: boolean;
  children?: unknown;
}) {
  return (
    <details open={open}>
      <summary>toggle</summary>
      {children}
    </details>
  );
}