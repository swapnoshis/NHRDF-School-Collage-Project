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


// Live Chat JS
let chat_icon = document.querySelector(".my_chat_wrapper .chat_icon");
let chat_box = document.querySelector(".my_chat_wrapper .chat_box");
chat_icon.addEventListener("click",()=>{
    chat_box.classList.toggle("active");
});

// Message Send
let send_btn = document.querySelector("#send_button");


send_btn.addEventListener('click',()=>{
    let message_input = document.querySelector("#message_input");
    let message_wrapper = document.querySelector(".messages");
    let message = message_input.value;
    let message_body = `<div class="sender d-flex align-items-center mb-3 justify-content-left">
                            <div class="author_img rounded-circle">
                                <i class="fa-solid fa-user"></i>
                            </div>
                            <div class="message">
                                <p>${message}</p>
                            </div>
                        </div>`;
    message_wrapper.innerHTML +=message_body;
    message_input.value = "";
});
});