let modal = document.getElementById("modal-info");

function showModal() {
    addClass(modal, "fadeIn");
    setTimeout(function(){
        addClass(modal, "modal-showing");
    },2000)
}

function closeModal() {
    addClass(modal, "fadeOut")
    setTimeout(function(){
    removeClass(modal, "modal-showing");
    removeClass(modal, "fadeOut")
    },2000)
}