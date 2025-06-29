import { ContainerButtons } from "../Buttons/ContainerButton";
import "./style.css";

export function AddContainer() {
  return (
    <div className="container">
      <ContainerButtons />
      <div id="bottle-container"></div>
    </div>
  );
}
