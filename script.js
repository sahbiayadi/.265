// Exercice1

var rev1 = document.getElementById("rev");
var count1 = document.getElementById("count");

function reverseString(){
var chValue= document.getElementById("ch").value;
rev1.value = chValue.split("").reverse().join("");
} 

function countcharacters(){
    var chValue= document.getElementById("ch").value;
    count1.value = chValue.length;

}
function capitalizeWords() {
var chValue = document.getElementById("ch").value;
cap1.value = chValue.split('').map(word => word.charAt(0).toUpperCase() + word.slice(1)). join (' ');


}