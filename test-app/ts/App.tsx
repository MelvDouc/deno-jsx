import Counter from "./components/Counter.tsx";
import Dropdown from "./components/Dropdown.tsx";
import Nav from "./components/Nav.tsx";

function App() {
  return (
    <>
      <Nav />
      <Counter blue />
      <Dropdown open={false}>
        <iframe
          width="1263"
          height="480"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="Rick Astley - Never Gonna Give You Up (Official Music Video)"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullscreen
          style={{ border: "0" }}
        ></iframe>
      </Dropdown>
    </>
  );
}

export default App;