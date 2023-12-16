const niceList = document.getElementById("nice-list")
const naughtyList = document.getElementById("naughty-list")
const btn = document.getElementById("btn")
btn.addEventListener("click", sort)

const peopleList = document.getElementById("people-list");
// flag to check if switch btn exists
let hasSwitchBtn = false;

const sorteesArr = [
    {
        name: "David",
        hasBeenGood: false
    },
    {
        name: "Del",
        hasBeenGood: true
    },
    {
        name: "Valerie",
        hasBeenGood: false
    },
    {
        name: "Astrid",
        hasBeenGood: true
    }
]

// New div to list the people so everyone can see who they are
sorteesArr.map(person => {
    peopleList.innerHTML += `<li>${person.name } <span>${person.hasBeenGood ? "🤩" : "😠"}</span></li>`;
})

function sort() {
    // Remove existing switch btn if one already exists
    if (hasSwitchBtn) {
        const existingButton = document.getElementById("switchPeople");
        existingButton.parentNode.removeChild(existingButton);
    }
    hasSwitchBtn = true;
    // Include Switch button when Sort button is clicked
    const switchBtn = document.createElement("button");
    switchBtn.textContent = "Switch Places";
    switchBtn.style.marginLeft =  "100px";
    switchBtn.setAttribute("id", "switchPeople");

    const btnContainer = document.getElementById("btn-container");
    btnContainer.appendChild(switchBtn);

    // Filter good and naughty people into their respective lists
    goodPeopleList = sorteesArr.filter(person => person.hasBeenGood);
    naughtyPeopleList = sorteesArr.filter(person => !person.hasBeenGood);
    console.log(goodPeopleList, naughtyPeopleList);

    
    niceList.textContent = "";
    naughtyList.textContent = "";

    // fxn to generate list items and append to parent containers
    function generateListItems(peopleList, parentList, objProperty) {
        for (const pList of peopleList ) {
            const liElement = document.createElement("li");
            liElement.textContent = `${pList[objProperty]}`;
            liElement.style.color = "#000";
            parentList.appendChild(liElement);
        }
    }

    generateListItems(goodPeopleList, niceList, "name");
    generateListItems(naughtyPeopleList, naughtyList, "name");

    switchPeople.addEventListener("click", () => {
        console.log("switch btn clicked");

        niceList.innerHTML = "";
        naughtyList.innerHTML = "";

        generateListItems(goodPeopleList, naughtyList, "name");
        generateListItems(naughtyPeopleList, niceList, "name");

    })
}
