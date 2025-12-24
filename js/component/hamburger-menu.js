export const initializeHamburgerMenu = () => {
    const menu=document.querySelector('.js-header-menu');
    const openButton=document.querySelector('.js-header-menu-open-button');
    const closeButton=document.querySelector('.js-header-menu-close-button');

    if(!menu||!closeButton||!openButton)return;

    const openMenu = () =>{
        document.body.style.overflow = "hidden";
        menu.showModal();

        //rotate and move elements with a class of "box" ("x" is a shortcut for a translateX() transform) over the course of 1 second.
        gsap.fromto(menu,
            {
                opacity: 0
            },
            {
                opacity: 1,
                duration: 0.3,
                ease:"power2.out"
            }
        );
    }

    const closeMenu = () =>{
        document.body.style.overflow = "";
        menu.close();
    }

    openButton.addEventListener("click",()=>{
        openMenu();
    });

    closeButton.addEventListener("click",()=>{
        closeMenu();
    });
};