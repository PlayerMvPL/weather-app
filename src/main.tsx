import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/app";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Не удалось найти корневой элемент с id 'root'");
}

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
