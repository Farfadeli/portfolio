document.querySelector("#contain-projets").addEventListener("wheel", (evt) =>{
    evt.preventDefault();
    document.querySelector("#contain-projets").scrollLeft += evt.deltaY;
})

document.querySelector(".evn").addEventListener("click", () => {
    window.location.href = window.location.href + "page/project/evnProject.html";
})
document.querySelector(".seetalk").addEventListener("click" , () =>{
    window.location.href = window.location.href + "page/project/seetalkProject.html";
})
document.querySelector(".ahm").addEventListener("click" , () =>{
    window.location.href = window.location.href + "page/project/ahmProject.html";
})