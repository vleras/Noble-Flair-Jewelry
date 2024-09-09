// Executes the code as soon as the web page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Check if the page contains an element with the class "log-in"
    if (document.querySelector(".log-in")) {
        const swiper = new Swiper(".slider", {
            loop: true,
            autoplay: {
                delay: 2000, // Time the slide stays before moving to the next one (2 seconds)
                disableOnInteraction: false, // Autoplay is not disabled after interaction
            },
            effect: "fade",
            fadeEffect: {
                crossFade: true,
            },
            speed: 1000, // Time it takes to switch slides (1 second)
        });
    }
});

// Executes the code as soon as the web page is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Check if the page contains an element with the class "register"
    if (document.querySelector(".register")) {
        const swiper = new Swiper(".slider", {
            loop: true,
            autoplay: {
                delay: 2000, // Time the slide stays before moving to the next one (2 seconds)
                disableOnInteraction: false, // Autoplay is not disabled after interaction
            },
            effect: "fade",
            fadeEffect: {
                crossFade: true,
            },
            speed: 1000, // Time it takes to switch slides (1 second)
        });
    }
});

// Initialize Swiper when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.slider-wrapper', {
        loop: true,
        grabCursor: true,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            580: {
                slidesPerView: 2
            },
            820: {
                slidesPerView: 3
            },
            1024: {
                slidesPerView: 4
            }
        }
    });
});

function addToCart() {
    // Get the current count from the badge
    let count = parseInt(document.getElementById('itemCount').textContent, 10);
    // Increment the count
    count++;
    // Update the badge with the new count
    document.getElementById('itemCount').textContent = count;
}


// Set the initial index for the current slide to zero
let currentSlide = 0;

// Select all elements with the class 'slide' and store them in a NodeList
const slides = document.querySelectorAll('.slide');

// Get the total number of slides by counting elements in the NodeList
const totalSlides = slides.length;


// Function to change slides
function changeSlide() {
    slides.forEach((slide) => {
        slide.style.opacity = 0; // Make all slides invisible
    });
    slides[currentSlide].style.opacity = 1; // Only make the current slide visible
    currentSlide = (currentSlide + 1) % totalSlides; // Move to the next slide
}

setInterval(changeSlide, 2000); // Change slide every 2 seconds
changeSlide(); 

// Checks if we are on the login page
document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("log-in")) {
        // Add event listener for the email input field
        document.getElementById("email").addEventListener("input", function () {
            validateEmail(); // Call a function to validate the email field
        });

        // Add event listener for the password input field
        document.getElementById("password").addEventListener("input", function () {
            validatePassword(); // Call a function to validate the password field
        });
    }
});

// Function to validate the login form
function validateLoginForm(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    // Reset error messages
    emailError.textContent = "";
    passwordError.textContent = "";

    // Email validation
    if (email === "") {
        emailError.textContent = "Email is required!";
    } else if (!isValidEmail(email)) {
        emailError.textContent = "Invalid Email Format";
        return;
    }

    // Password validation
    if (password === "") {
        passwordError.textContent = "Password is required";
        return;
    } else if (password.length < 9) {
        passwordError.textContent = "Password must be at least 6 characters";
        return;
    }

    alert("You have logged in!");
}

// Function to validate the registration form
function registrationForm(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const lastname = document.getElementById("last-name").value;
    const number = document.getElementById("number").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const nameError = document.getElementById("nameError");
    const lastnameError = document.getElementById("lastnameError");
    const numberError = document.getElementById("numberError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    // Reset error messages
    nameError.textContent = "";
    lastnameError.textContent = "";
    numberError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    // Name validation
    if (name === "") {
        nameError.textContent = "Name is required!";
        return;
    }

    // Last name validation
    if (lastname === "") {
        lastnameError.textContent = "Last name is required!";
        return;
    }

    // Number validation
    if (number === "") {
        numberError.textContent = "Number is required!";
        return;
    } else if (number.length < 9) {
        numberError.textContent = "Number must be at least 9 digits";
        return;
    }

    // Email validation
    if (email === "") {
        emailError.textContent = "Email is required!";
    } else if (!isValidEmail(email)) {
        emailError.textContent = "Invalid email format";
        return;
    }

    // Password validation
    if (password === "") {
        passwordError.textContent = "Password is required";
        return;
    } else if (password.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters long";
        return;
    }

    alert("Account has been created!");
}

// Function to validate email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email); 
}
// Event listener setup to trigger validation functions on input fields
document.addEventListener("DOMContentLoaded", function () {

    //Check if we are on the register page
    if (document.getElementById("register")) {
        // Event listener for input fields to trigger validation functions
        document.getElementById("name").addEventListener("input", function () {
            validateName(); // Calls a function to validate the name field
        });

        document.getElementById("last-name").addEventListener("input", function () {
            validateLastName(); // Calls a function to validate the last name field
        });

        document.getElementById("number").addEventListener("input", function () {
            validateNumber(); // Calls a function to validate the number field
        });

        document.getElementById("email").addEventListener("input", function () {
            validateEmail(); // Calls a function to validate the email field
        });

        document.getElementById("password").addEventListener("input", function () {
            validatePassword(); // Calls a function to validate the password field
        });
    }
});
