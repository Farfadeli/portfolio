let accueil = document.querySelector(".accueil")
let projet = document.querySelector(".projets")
let veille = document.querySelector(".veille")
let contact = document.querySelector(".contact")

$('#container').load("../page/accueil.html")
accueil.addEventListener("click" , () => {
    let act = document.querySelector(".active");
    act.classList.remove("active");
    accueil.classList.add("active");
    $('#container').load("../page/accueil.html")
})
projet.addEventListener("click" , () => {
    let act = document.querySelector(".active");
    act.classList.remove("active");
    projet.classList.add("active");
    $('#container').load("../page/projets.html");
})
veille.addEventListener("click" , () => {
    let act = document.querySelector(".active");
    act.classList.remove("active");
    veille.classList.add("active");
})
contact.addEventListener("click" , () => {
    let act = document.querySelector(".active");
    act.classList.remove("active");
    contact.classList.add("active");
})