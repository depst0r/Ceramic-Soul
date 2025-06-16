import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "/src/sass/style.scss";
import 'purecss/build/grids-min.css';
import 'purecss/build/grids-responsive-min.css';

const burger = document.querySelector(".burger"),
    close = document.querySelector(".header__menu-close"),
    menu = document.querySelector(".header__menu");

const burgerMenu = (open, close, menu) => {
    const active = "header__menu_active"
    open.addEventListener("click", () => {
        menu.classList.add(active);
        document.body.style.overflow = "hidden";
    })
    close.addEventListener("click", () => {
        menu.classList.remove(active);
        document.body.style.overflow = "";
    })
}

burgerMenu(burger, close, menu)

try {
    new Swiper('.works__slider', {
        modules: [Navigation, Pagination],
        slidesPerView: 1,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '.icon-right-open',
            prevEl: '.icon-left-open'
        },
        loop: true,
        spaceBetween: 10,
        breakpoints: {
            1200: {
                slidesPerView: 3,
                spaceBetween: 5
            },
            1920: {
                slidesPerView: 3,
                spaceBetween: 35
            },
        },
    })
} catch (error) {
    console.log(error)
}

