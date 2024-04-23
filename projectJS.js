//
// Amber Shores
// Final Project
// xx/xx/xx
//

function validMail(event) {
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(userMail.value)) {// Check if the input value matches the pattern
        window.alert('Invalid input');                   // Invalid input: display error message
        event.preventDefault();
    }
    else {
        window.alert('Valid input');                     // Valid input: display confirmation and submit the form
    }
}

const banner = document.getElementById("banner");

banner.style.backgroundColor = "teal";
banner.style.border = "3px, solid, black";
banner.style.textAlign = "center";
banner.style.fontFamily = "arial, serif";
banner.style.fontWeight = "bold";
banner.style.padding = "10px";
banner.style.fontSize = "20px";

let myButton = document.getElementById("myButton");

let userName = document.getElementById("myName");
let userMail = document.getElementById("myEmail");

myButton.addEventListener('click', validMail);