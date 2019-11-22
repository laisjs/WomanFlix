let modal = document.getElementById("modal-info");
let modalContent = document.getElementById("info-content")

function showModal() {
    addClass(modalContent, "fadeIn");
    setTimeout(function(){
        addClass(modal, "modal-showing");
        removeClass(modal, "fadeIn")
    },1000)
}

function closeModal() {
    addClass(modal, "fadeOut")
    setTimeout(function(){
    removeClass(modal, "modal-showing");
    removeClass(modal, "fadeOut")
    },500)
}