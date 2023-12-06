// const btnGenerate = document.getElementById("generatePairs");
const btnGenerate = document.getElementById('generatePairs');
const pairsContent = document.getElementById("pairsContent");

const people = ["Alice", "Bob", "Carly", "Dan", "Ed", "Ferdinand", "Ginny"]

btnGenerate.addEventListener("click", function() {
    generateSecretSantaPairs(people);
});

function generateSecretSantaPairs(arr) {
    const objAssignees = {};
    const copyOfArr = [...arr];

    // shuffle the array of people
    copyOfArr.sort(() => Math.random() - 0.5);

    for (let i=0; i<copyOfArr.length; i++) {
       const firstAssignee = copyOfArr[i];

       let secondAssignee;

       // gets the next element in the array and assigns to the secondAssignee variable
       do {
          secondAssignee = copyOfArr[(i + 1) % copyOfArr.length];
       } while (firstAssignee == secondAssignee)

       objAssignees[firstAssignee] = secondAssignee
    }
    console.log(objAssignees)
    displayMatchingObject(objAssignees);
}

// Format the generated object and display to screen
function displayMatchingObject(objPairs) {
    pairsContent.textContent = '';

    for (let key in objPairs) {
        let paragraph = document.createElement('p');
        paragraph.textContent = `${key} => ${objPairs[key]}`;
        pairsContent.appendChild(paragraph);
    }
}
