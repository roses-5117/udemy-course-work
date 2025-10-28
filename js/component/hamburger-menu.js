export const initializeHamburgerMenu = () => {
    const menu=document.querySelector('.js-header-menu');
    const openButton=document.querySelector('.js-header-menu-open-button');
    const closeButton=document.querySelector('.js-header-menu-close-button');

    if(!menu||!closeButton||!openButton)return;

    openButton.addEventListener("click",()=>{
        menu.showModal();
    });

    closeButton.addEventListener("click",()=>{
        menu.close();
    });
};