import { getPets } from "./database.js";
import { getWalkers } from "./database.js";

const pets = getPets();
const allWalkers = getWalkers();

document.addEventListener("click", (clickEvent) => {
  const clickTarget = clickEvent.target;
  const walkerDataId = clickTarget.dataset.walker;
  for (const walker of allWalkers)
    if (walker.id === parseInt(walkerDataId)) {
      window.alert(`This pet is being walked by ${walker.name}.`);
    }
});

export const registeredPets = () => {
  let petHTML = "<ul >";

  for (const pet of pets) {
    petHTML += `<li data-walker = "${pet.walkerId}">${pet.name}</li>`;
  }

  petHTML += "</ul>";

  return petHTML;
};
