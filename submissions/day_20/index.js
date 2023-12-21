const dangerArray = [
    ["🎅", "👺"],
    [
        ["🎅", "🦁"],
        ["👹", "🎅"]
    ],
    [
        [
            ["🎅", "🐻"],
            ["🧌", "🎅"]
        ],
        [
            ["🐯", "🎅"],
            ["🎅", "😈"]
        ]
    ]
];

function saveSanta(arr) {
    // Your code here
    let santas = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            santas.push(saveSanta(arr[i]));
        } else {
            if (arr[i] === "🎅") {
                santas.push(arr[i]);
            }
        }
    }
    return santas;    
}

// Check the returned results from saveSanta()
console.log(saveSanta(dangerArray))