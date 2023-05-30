let accueil = document.querySelector(".accueil")
let projet = document.querySelector(".projets")
let veille = document.querySelector(".veille")
let contact = document.querySelector(".contact")
let doc = document.querySelector(".documents")


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
    $('#container').load("../page/veille.html")
})
contact.addEventListener("click" , () => {
    let act = document.querySelector(".active");
    act.classList.remove("active");
    contact.classList.add("active");
    $('#container').load("../page/contact.html")
})
doc.addEventListener("click" , () => {
    let act = document.querySelector(".active");
    act.classList.remove("active");
    doc.classList.add("active");
    $('#container').load("../page/documents.html")
})
