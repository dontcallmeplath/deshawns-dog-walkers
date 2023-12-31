import { Walkers } from "./Walkers.js";
import { CityList } from "./CityList.js";
import { Assignments } from "./Assignments.js";
import { registeredPets } from "./RegisteredPets.js";

let mainContainer = document.querySelector("#container");

let applicationHTML = `
<h1>DeShawns Dog Walking</h1>
<article class="details">
    <section class="detail--column list details__cities">
        <h2>Cities with Service:</h2>
        ${CityList()}
    </section>
    <section class="detail--column list details__walkers">
        <h2>Walkers:</h2>
        ${Walkers()}
    </section>
    <section class="detail--column list details__pets">
        <h2>Pets:</h2>
        ${registeredPets()}
    </section>
</article>

<h2>Current Assignments:</h2>
<article class="assignments">
    <section>
    ${Assignments()}
    </section>
</article>
`;

mainContainer.innerHTML = applicationHTML;
