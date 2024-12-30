/* Variable Declarations */
const themeChanger = document.getElementById("theme-changer");
const typewriter = document.getElementById("typewriter");

/* Function Declarations */
function setUp(){
    themeChanger.addEventListener('click', changeTheme);
    themeChanger.classList.toggle('theme-changer-light');
    typewriter.classList.toggle('typewriter-light');
};
function changeTheme(){
    const navbar = document.getElementById("nav");
    const themeChanger = document.getElementById("theme-changer");
    const header = document.getElementById("website-title");
    const body = document.body;
    const typewriter = document.getElementById("typewriter");

    navbar.classList.toggle('navbar-dark');
    themeChanger.classList.toggle('theme-changer-dark');
    header.classList.toggle('website-title-dark');
    body.classList.toggle('body-light');
    typewriter.classList.toggle('typewriter-dark');
};

/* Function Calls */
window.addEventListener('load', setUp);