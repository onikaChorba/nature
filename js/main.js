//Function expresion to select elements
const selectElement = (s) => document.querySelector(s);
//Open menu on click
selectElement('.open').addEventListener('click', ()=>{
    console.log('CLICKED');
   selectElement('.nav-list').classList.add('active');
});
//Close menu on click
selectElement('.close').addEventListener('click', ()=>{
    selectElement('.nav-list').classList.remove('active');
});

