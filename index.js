var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

function toggleDarkMode() {
    const themeStylesheet = document.getElementById('theme-stylesheet');
    const isDarkMode = themeStylesheet.getAttribute('href') === 'style.css';
    setTimeout(() =>{
        // Toggle between dark and light mode stylesheets
    themeStylesheet.href = isDarkMode ? 'lightMode.css' : 'style.css';

    // Save the current mode in localStorage
    const currentMode = isDarkMode ? 'light' : 'dark';
    localStorage.setItem('theme', currentMode);

    updateToggleIcon(currentMode);
    },500);
}

// Load the saved theme on page load
window.onload = () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const themeStylesheet = document.getElementById('theme-stylesheet');

    // Set the correct CSS file based on saved theme
    themeStylesheet.href = savedTheme === 'dark' ? 'style.css' : 'lightMode.css';

    updateToggleIcon(savedTheme);
};

// Update the button icon based on the theme
function updateToggleIcon(mode) {
    const toggleButton = document.getElementById('dark-mode-toggle');
    toggleButton.textContent = mode === 'dark' ? '🌙' : '☀️';
}

// Add event listener to the toggle button
document.getElementById('dark-mode-toggle').addEventListener('click', toggleDarkMode);

        
var sidemenu=document.getElementById("sidemenu");
function openmenu() {
    document.getElementById("sidemenu").style.right = "0";
    document.querySelector(".bi-x").style.display = "block";
    document.querySelector(".bi-list").style.display = "none";
}

function closemenu() {
    document.getElementById("sidemenu").style.right = "-200px";
    document.querySelector(".bi-x").style.display = "none";
    document.querySelector(".bi-list").style.display = "block";
}

// Example: Incorrect scroll listener that might remove `menu-open`
window.addEventListener('scroll', () => {
    const sidemenu = document.getElementById('sidemenu');
    if (!sidemenu.contains(event.target)) {
        // You can remove classes or logic affecting other elements here, but leave the cross icon unaffected
        document.querySelector('.menu').classList.remove('menu-open');
    }
});

const scriptURL = 'https://script.google.com/macros/s/AKfycby3vLznonem_chT-5yHG_naUcOyLBUOkC1RLgYIfuaFYtDK9LzrZl5lPxAwK6L6eQQe/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
        form.addEventListener('submit', e => {
        e.preventDefault()

        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {msg.innerHTML = "Message sent successfully..."
                msg.style.display = "block"
                setTimeout(function(){
                    msg.innerHTML=""
                    msg.style.display = "none"
                },5000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        })

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     // Immediately show the success message after submission
//     msg.innerHTML = "Message sent successfully!";
//     msg.style.display = "block";

//     // Reset the form
//     form.reset();

//     // Send the form data to Google Sheets
//     fetch(scriptURL, { method: 'POST', body: new FormData(form) })
//         .then(response => {
//             // Optionally, you can display a success message or handle response here
//             setTimeout(() => {
//                 msg.style.display = "none"; // Hide the message after 5 seconds
//             }, 5000); 
//         })
//         .catch(error => {
//             msg.innerHTML = "Error! Please try again.";
//             setTimeout(() => {
//                 msg.style.display = "none"; // Hide the message after 5 seconds
//             }, 5000);
//         });
// });

        

//animation for typing 

    document.addEventListener("DOMContentLoaded", () => {
        const heading = document.getElementsByClassName("animated-heading");
        heading.style.animation = "none"; // Reset animation to allow reloading effect
        setTimeout(() => {
            heading.style.animation = ""; // Trigger animation
        }, 1000);
    });


