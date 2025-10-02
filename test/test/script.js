//  3a) Function greet(name) and how to call it 
function greet(name) {
    return "Hello, " + name + "! Welcome to your profile page.";
}

function showGreeting() {
    let name = prompt("Enter your name:");
    let message = greet(name);
    document.getElementById("greeting").textContent = message;
}

//  3b) Array operations 

let courses = ["CIS", "SE", "CS"];

// i. Add "IT" to the array
courses.push("IT");

// ii. Remove the last element
courses.pop();

// iii. Display the updated array in the console
console.log("Updated courses array:", courses);

// iv. Difference between push() and pop():
/*
    push() adds an item to the end of the array.
    pop() removes the last item from the array.
*/
//  4a) Change background color when button is clicked 
document.getElementById("colorBtn").addEventListener("click", function () {
    document.body.style.backgroundColor = "lightblue";
});
//  4b) Use addEventListener() when writing modern JavaScript and keeping JS out of HTML for better maintainability.Use onclick only for very simple or quick examples.
document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form from submitting

    // Clear previous errors
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("successMessage").textContent = "";

    let isValid = true;

    // Validate Full Name (required)
    let fullName = document.getElementById("fullName").value.trim();
    if (fullName === "") {
        document.getElementById("nameError").textContent = "Full Name is required.";
        isValid = false;
    }

    // Validate Email (required and correct format)
    let email = document.getElementById("email").value.trim();
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {
        document.getElementById("emailError").textContent = "Email is required.";
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email.";
        isValid = false;
    }

    // Validate Password (required and min 8 characters)
    let password = document.getElementById("password").value;
    if (password.length < 8) {
        document.getElementById("passwordError").textContent = "Password must be at least 8 characters.";
        isValid = false;
    }

    // If all fields are valid
    if (isValid) {
        document.getElementById("successMessage").textContent = "Registration successful!";
        // You can add form submission or further logic here
        this.reset();  // Reset form after success (optional)
    }
});
