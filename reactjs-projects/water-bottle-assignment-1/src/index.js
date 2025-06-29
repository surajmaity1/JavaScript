import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AddContainer } from "./components/Container/Container";
import { Header } from "./components/Header/Header";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Header/>
    <AddContainer/>
  </StrictMode>
);
