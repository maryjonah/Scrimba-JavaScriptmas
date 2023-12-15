const btnElement = document.getElementById("btn");
const vegetarianElement = document.getElementById("vegetarian-input");
const guestValue = document.querySelector(".guests");
let foodElement = document.getElementById("food");


btnElement.addEventListener("click", function(event) {    
    const numGuests = guestValue.value;
    
    if (vegetarianElement.checked && numGuests > 0) {
        foodElement.textContent = "Squash Risotto";
    } else {
        if (numGuests > 0 && numGuests <= 4) {
            foodElement.textContent = "Ham";
        } else {
            foodElement.textContent = "Turkey";
        }   
    }
})
