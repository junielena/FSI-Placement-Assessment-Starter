// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Junie Lena" // HINT: Replace this with your own name!

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

let gbminus = document.querySelector('#minus-gb');
let gbadd = document.querySelector('#add-gb');

let ccminus = document.querySelector('#minus-cc');
let ccadd = document.querySelector('#add-cc');

let sugarminus = document.querySelector('#minus-sugar');
let sugaradd = document.querySelector('#add-sugar');




// Event listener for clicks on the "+" button for Gingerbread cookies

document.getElementById('add-gb').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Gingerbread add clicked!')
    gb = gb + 1;
    console.log(gb);
let Gingerbread = document.querySelector('#qty-gb');
Gingerbread.textContent = gb;

})

// TODO: Hook up event listeners for the rest of the buttons

document.getElementById('minus-gb').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Gingerbread minus clicked!')
    
})

document.getElementById('add-cc').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('CC add clicked!')
    cc = cc + 1;
    console.log(cc);
let ChocolateChip = document.querySelector('#qty-cc');
ChocolateChip.textContent = cc;

})

document.getElementById('minus-cc').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('CC minus clicked!')
    
})

document.getElementById('add-sugar').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Sugar add clicked!')
    sugar = sugar + 1;
    console.log(sugar);
let SugarSprinkle = document.querySelector('#qty-sugar');
SugarSprinkle.textContent = sugar;

})


document.getElementById('minus-sugar').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Sugar minus clicked!')
    
})

