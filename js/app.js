const refs = {
    servicesBtn: document.querySelector(".services-btn"),
    closeServicesBtn: document.querySelector("[data-services-close]"),
    closeHeroBtn: document.querySelector("[data-hero-close]"),
    closeMenuBtn: document.querySelector("[data-menu-close]"),
    heroBtn: document.querySelector(".hero-btn"),
    servicesModal: document.querySelector("[data-services]"),
    heroModal: document.querySelector("[data-hero]"),
    menuModal: document.querySelector("[data-menu]"),
    anchors: document.querySelectorAll('a[href*="#"]'),

};

const toggleSevicesModal = () => {
    refs.servicesModal.classList.toggle("is-hidden");
};

const toggleHeroModal = () => {
    refs.heroModal.classList.toggle("is-hidden");
}

const toggleMenuModal = () => {
    refs.menuModal.classList.toggle("is-visible");
}

refs.servicesBtn.addEventListener("click", toggleSevicesModal);
refs.closeServicesBtn.addEventListener("click", toggleSevicesModal);
refs.heroBtn.addEventListener("click", toggleHeroModal);
refs.closeHeroBtn.addEventListener("click", toggleHeroModal);
refs.closeMenuBtn.addEventListener("click", toggleMenuModal);

for(let anchor of refs.anchors) {
    anchor.addEventListener("click", (event) => {
        event.preventDefault();
        const blockId = anchor.getAttribute('href');
        refs.menuModal.classList.remove("is-visible");
        document.querySelector(blockId).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}