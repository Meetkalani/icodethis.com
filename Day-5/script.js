let expandProjectsIcon = document.querySelector('.expand-projects');
let navbar = document.querySelector("nav .nav-links");
let projects = document.querySelector("#dashboard .project-quick-links");

function openProjects() {
    projects.style.visibility = "visible";
    expandProjectsIcon.style.visibility = "hidden";
}

function closeProjects() {
    projects.style.visibility = "hidden";
    expandProjectsIcon.style.visibility = "visible";
}

function openNavbar() {
    if (navbar.style.visibility === "visible") {
        navbar.style.visibility = "hidden";
    } else {
        navbar.style.visibility = "visible";
    }
}

window.addEventListener('resize', ()=>{
    if(window.innerWidth >= 960){
        projects.style.visibility = "visible";
    } else if(window.innerWidth >= 710){
        navbar.style.visibility = "visible";
    } else {
        navbar.style.visibility = "hidden";   
        projects.style.visibility = "hidden";
    }
});