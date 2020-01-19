// Dropdown menu Content 
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
// Dropdown menu Content 
function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

/* Dit verandert de kleur van /images/div van het hartje */
function changecol() {
  document.getElementById("like").style.display="none";
 document.getElementById("like1").style.display="block";
}

// Sluiten van het dropdownmenu wanneer de gebruiker buiten het vak klikt
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


// Button vind ik leuk  

var feedback = document.querySelector('h6');
var button = document.querySelector('button');

var verander = function () {
    feedback.classList.toggle('visible');
    button.classList.toggle('liked');

}
button.addEventListener('click', verander);


/* Een functie voor het veranderen van de achtergrondkleur van de site, wanneer op het login formulier wordt geklikt. */

function changeColor(color) { 
  document.body.style.background = color; 
} 

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
  document.body.style.background = 'white'; 
}





