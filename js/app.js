const refs = {
    servicesBtn: document.querySelector(".services-btn"),
    closeBtn: document.querySelector(".modal__close_btn"),
    servicesModal: document.querySelector(".backdrop"),

};

const toggleSevicesModal = () => {
    console.log("click");
    refs.servicesModal.classList.toggle("is-hidden");
};

refs.servicesBtn.addEventListener("click", toggleSevicesModal);
refs.closeBtn.addEventListener("click", toggleSevicesModal);


console.log("he");
console.log(refs.servicesBtn)