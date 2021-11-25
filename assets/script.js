
let yourName = "Junie Lena" // HINT: Replace this with your own name!


document.getElementById('credit').textContent = `Created by ${yourName}`

let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

let gbminus = document.querySelector('#minus-gb');
let gbadd = document.querySelector('#add-gb');

let ccminus = document.querySelector('#minus-cc');
let ccadd = document.querySelector('#add-cc');

let sugarminus = document.querySelector('#minus-sugar');
let sugaradd = document.querySelector('#add-sugar');




document.getElementById('add-gb').addEventListener('click', function() {
    
    gb = gb + 1;
    
let Gingerbread = document.querySelector('#qty-gb');
Gingerbread.textContent = gb;
document.querySelector('#qty-total').textContent = gb + cc + sugar;
})


document.getElementById('minus-gb').addEventListener('click', function() {
    
    gb = gb - 1;
   
    let Gingerbread = document.querySelector('#qty-gb');
Gingerbread.textContent = gb;
document.querySelector('#qty-total').textContent = gb + cc + sugar;
})

document.getElementById('add-cc').addEventListener('click', function() {
    
    cc = cc + 1;
    
let ChocolateChip = document.querySelector('#qty-cc');
ChocolateChip.textContent = cc;
document.querySelector('#qty-total').textContent = gb + cc + sugar;
})

document.getElementById('minus-cc').addEventListener('click', function() {
    
    cc = cc - 1;
    
let ChocolateChip = document.querySelector('#qty-cc');
ChocolateChip.textContent = cc;
document.querySelector('#qty-total').textContent = gb + cc + sugar;
})

document.getElementById('add-sugar').addEventListener('click', function() {
 
    
    sugar = sugar + 1;
    
let SugarSprinkle = document.querySelector('#qty-sugar');
SugarSprinkle.textContent = sugar;
document.querySelector('#qty-total').textContent = gb + cc + sugar;
})


document.getElementById('minus-sugar').addEventListener('click', function() {
   
    
    sugar = sugar - 1;
    
let SugarSprinkle = document.querySelector('#qty-sugar');
SugarSprinkle.textContent = sugar;
document.querySelector('#qty-total').textContent = gb + cc + sugar;

})


