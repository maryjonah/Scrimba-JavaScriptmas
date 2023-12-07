const wishlist = [
    {
        name: "Macbook Air M2",
        description: "M2 chip either 13 or 16 inch Macbook laptop",
        link: "https://www.apple.com/shop/buy-mac/macbook-air"
    },
    {
        name: "Weekend stay at Kempinski",
        description: "A relaxing weekend stay at the 5⭐ Kempinski hotel",
        link: "https://www.kempinski.com/en/hotel-gold-coast-city/rooms-suites/rooms/superior-room"
    },
    {
        name: "$5000",
        description: "Just for the holidays",
        link: "https://media.istockphoto.com/id/651372658/photo/black-woman-handbag-full-of-money-on-desk.webp?s=2048x2048&w=is&k=20&c=1lgfFEkGaBa1xj5QBjAnbDgvN3YovtNH7IqT9rfq6BQ="
    }
]

const wishListElement = document.querySelector(".wishlist");
wishlist.map(wishObj => {
    wishListElement.innerHTML += `
        <div class="gift">
            <p class="gift--name">${wishObj.name}</p>
            <p class="gift--description">${wishObj.description}</p>
            <a class="gift--link" href=${wishObj.link}>Buy item</a>
        </div>
    `;
});