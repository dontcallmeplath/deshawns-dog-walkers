import { getWalkers } from "./database.js";

const walkers = getWalkers();
let dupeWalker = "";
let sdWalkers = [];

document.addEventListener("click", (clickEvt) => {
  const cityTarget = clickEvt.target;
  if (cityTarget.dataset.type === "city") {
    if (cityTarget.innerText === "San Diego" && dupeWalker != "") {
      sdWalkers.push(dupeWalker.name);
      sdWalkers.push(cityTarget.dataset.walkername);
      window.alert(
        `${sdWalkers[0]} and ${sdWalkers[1]} are servicing this city.`
      );
    } else {
      window.alert(`${cityTarget.dataset.walkername} is servicing this city.`);
    }
  }
});

const getCleanArray = (newWalkerArray) => {
  dupeWalker = walkers.pop();
  return newWalkerArray;
};
const newWalkerArray = getCleanArray(walkers);

export const CityList = () => {
  let citiesHTML = "<ol>";

  for (const walker of newWalkerArray) {
    citiesHTML += `<li data-type="city" data-walkername="${walker.name}">${walker.city}</li>`;
  }

  citiesHTML += "</ol>";

  return citiesHTML;
};
