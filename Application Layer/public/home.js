function toggleSection(sectionId) {
            
    if (sectionId === 'about') {
        window.location.href = '/';
    } else {
        // Hide all sections except the clicked one
        var sections = document.getElementsByClassName('mainbox')[0].children;
        for (var i = 0; i < sections.length; i++) {
            sections[i].style.display = 'none';
        }
        document.getElementById(sectionId).style.display = 'block';
        
        // Show left main and navbox
        document.querySelector('.leftmain').style.display = 'block';
        document.querySelector('.navbox').style.display = 'flex';
    }
}
// function toggleDarkMode() {
//     const element = document.body;
//     element.classList.toggle("darkmode");
// }
// JavaScript to toggle dark mode
function toggleDarkMode() {
const body = document.body;
body.classList.toggle('darkmode');
const isDarkMode = body.classList.contains('darkmode');
localStorage.setItem('darkMode', isDarkMode);
}
function initializeDarkMode() {
const body = document.body;
const isDarkMode = localStorage.getItem('darkMode') === 'true';

if (isDarkMode) {
body.classList.add('darkmode');
}
}
window.addEventListener('load', initializeDarkMode);


//preloader

const fadeout=()=>{
    const loader=document.querySelector(".preloader");
    loader.classList.remove("preloader");
}
window.addEventListener("load",fadeout);

