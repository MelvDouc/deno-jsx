import Counter from "./components/Counter.tsx";
import Dropdown from "./components/Dropdown.tsx";
import Nav from "./components/Nav.tsx";

function App() {
  const iframeAllow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  const iframeTitle = "Votre ESPRIT : l'ARME d'une GUERRE FROIDE 2.0 ? (décryptage)";

  return (
    <>
      <Nav />
      <Counter blue />
      <Dropdown open>
        <iframe
          src="https://www.youtube.com/embed/gz0ar37JVPY"
          title={iframeTitle}
          referrerPolicy="strict-origin-when-cross-origin"
          allow={iframeAllow}
          allowFullscreen
          style={{
            width: "min(100%, 500px)",
            aspectRatio: "16 / 9"
          }}
        />
      </Dropdown>
    </>
  );
}

export default App;