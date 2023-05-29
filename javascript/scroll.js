document.querySelector("#contain-projets").addEventListener("wheel", (evt) =>{
    evt.preventDefault();
    document.querySelector("#contain-projets").scrollLeft += evt.deltaY;
})

document.querySelector(".evn").addEventListener("click", () => {
    window.location.href = window.location.href + "page/project/evnProject.html";
})