    // JavaScript code for form validation
// Prevent form from submitting

function validAlNum(event) {
    if (!/^[a-zA-Z0-9]+$/.test(inputField.value)) {          //Regular expression pattern for alphanumeric input// Check if the input value matches the pattern
        window.alert('Invalid input');                   // Invalid input: display error message
        event.preventDefault();
    }
    else {
        window.alert('Valid input');                     // Valid input: display confirmation and submit the form
    }
}

let myForm = document.getElementById("myForm")
let inputField = document.getElementById("inputField");          // Retrieve the input field value
myForm.addEventListener('submit', validAlNum);