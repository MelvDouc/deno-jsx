import { initDsx } from "@melvdouc/dsx";
import App from "./App.tsx";

(() => {
  new EventSource("/esbuild").addEventListener("change", () => {
    location.reload();
  });
})();

initDsx();

document.body.append(App());