document.querySelector("#contain-projets").addEventListener("wheel", (evt) =>{
    evt.preventDefault();
    document.querySelector("#contain-projets").scrollLeft += evt.deltaY;
})
