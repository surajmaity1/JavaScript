import { useState } from "react";
import "./style.css";

export function ContainerButtons() {
  const [bottleNo, setBottleNo] = useState(1);

  function addNewContainer() {
    const parentDiv = document.getElementById("bottle-container");
    const newBottle = document.createElement("div");
    newBottle.id = "water-bottle-" + bottleNo;
    setBottleNo(bottleNo + 1);
    newBottle.classList.add("new-bottle");
    parentDiv.appendChild(newBottle);
  }

  function fillWater() {
    const totalBottles = bottleNo;

    for (let index = 1; index < totalBottles; index++) {
      const eachBottle = document.getElementById("water-bottle-" + index);
      const totalElements = eachBottle.childElementCount;

      if (totalElements === 10) {
        continue;
      }

      const newWaterLevel = document.createElement("div");
      newWaterLevel.classList.add("new-water-level");
      newWaterLevel.id =
        "water-bottle-" + index + "-level-" + (10 - totalElements);
      newWaterLevel.style.bottom = `${totalElements * 10}px`;
      eachBottle.appendChild(newWaterLevel);
    }
  }

  function drainWater() {
    const totalBottles = bottleNo;

    for (let index = 1; index < totalBottles; index++) {
      const eachBottle = document.getElementById("water-bottle-" + index);
      const totalElements = eachBottle.childElementCount;

      if (totalElements === 0) {
        continue;
      }
      const eachWaterLevel = document.getElementById(
        eachBottle.id + "-level-" + (10 - totalElements + 1)
      );
      eachWaterLevel.remove();
    }
  }

  return (
    <div className="button-container">
      <button id="add-container" onClick={addNewContainer}>
        Add Container
      </button>
      <div className="fill-drain-container">
        <button id="fill-water" onClick={fillWater}>
          Fill Water
        </button>
        <button id="drain-water" onClick={drainWater}>
          Drain Water
        </button>
      </div>
    </div>
  );
}
