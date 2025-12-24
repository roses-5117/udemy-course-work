export const initializeCultureGallery = () => {
    // const recruitCultureGallery = document.querySelector(".js-about-staff-slider");
    // new Splide( '.splide' ).mount();
    const recruitCultureGallery = document.querySelector(".js-recruit-culture-gallery");

    if (!recruitCultureGallery) return;
    
    const splide = new Splide(recruitCultureGallery,{
        type: "loop",
        perPage: 3,
        // perMove: 1,
        arrows: false,
        pagination: false,
        // autoplay: true,
        // interval: 3000,
        gap: "32rem",
        padding:{left:"112rem",right:"140rem"},
        autoScroll: {
            speed: 1,
            pauseOnHover: false,
        },
        breakpoints:{
            899:{
                perPage: 1,
                padding:{left:"10rem",right:"142rem"},
                gap: "10rem",
                autoScroll: {
                    speed: 0.6,
                },
            },

        },
    });
    splide.mount(window.splide.Extensions);
};