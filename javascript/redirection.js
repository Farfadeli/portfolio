let arrow = document.querySelector(".arrow")

arrow.addEventListener("click", () => {
    window.location.href = getReturnBack()
})



const getReturnBack = () =>{
    let url = window.location.href.split("/");
    let res = "";
    for(let e = 0; e != url.length-3; e++){
        res += url[e] + "/"
    }
    return res ;
}