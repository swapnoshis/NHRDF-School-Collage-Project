// Toggle JS
document.addEventListener("DOMContentLoaded",()=>{

    let toggle_btn = document.getElementById("toggle_btn");
toggle_btn.onclick = (e)=>{
    let menu = document.querySelector(".my_navbar ul");
    menu.classList.toggle("active");
    let icon = document.querySelector("toggle_btn .icon");

    if(icon.classList.contains("fa-bars")){
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-bars-staggered");
    }else{
        icon.classList.remove("fa-bars-staggered");
        icon.classList.add("fa-bars");
    }
};
});