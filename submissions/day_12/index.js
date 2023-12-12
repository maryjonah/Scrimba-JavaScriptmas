const xmasGifts = ['guitar 🎸', 'skates ⛸️', 'bear 🧸', 'magnet 🧲', 'laptop 💻', 'games console 🎮 ', 'jewellery 💍', 'kite 🪁']

const aTozOrder = document.querySelector(".alphabetical-order");
const zToaOrder = document.querySelector(".reverse-alphabetical-order");

const sortedAZ = xmasGifts.sort();
console.log('A-Z: ', sortedAZ) 
aTozOrder.textContent = sortedAZ;
//["bear 🧸", "games console 🎮 ", "guitar 🎸", "jewellery 💍", "kite 🪁", "laptop 💻", "scarf 🧣", "skates ⛸️"]

const sortedZA = xmasGifts.reverse();
console.log('Z-A: ', sortedZA) 
zToaOrder.textContent = sortedZA;
//["skates ⛸️", "scarf 🧣", "laptop 💻", "kite 🪁", "jewellery 💍", "guitar 🎸", "games console 🎮 ", "bear 🧸"]