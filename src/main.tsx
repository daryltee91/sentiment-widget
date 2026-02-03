import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { SentimentsProvider } from "./providers/SentimentsProvider.tsx";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SentimentsProvider>
      <App />
    </SentimentsProvider>
  </StrictMode>,
);
