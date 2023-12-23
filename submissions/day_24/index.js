const lightElements = document.getElementsByClassName("lights");
console.log(lightElements, typeof lightElements)

function toggleTreeLights() {
    for (let light of lightElements) {
        console.log(light.classList)
        light.classList.toggle("lights-on");
    }
}

setInterval(toggleTreeLights, 800);
