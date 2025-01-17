export default function Nav() {
  return (
    <nav>
      <ul>
        {Object.entries(links).map(([key, value]) => (
          <li style={{ color: "blue" }}>
            <a on:animationend={(e) => e.animationName} href={key}>{value}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

const links = {
  "/": "Home",
  "/about": "About"
};