import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import JustValidate from 'just-validate';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import 'animate.css';

import "/src/sass/style.scss";
import 'purecss/build/grids-min.css';
import 'purecss/build/grids-responsive-min.css';


//!Burger-menu
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

//!Tab
try {
    const tabs = document.querySelectorAll(".catalog__tab");
    const contents = document.querySelectorAll(".catalog__content-item");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            tabs.forEach((t) => t.classList.remove("catalog__tab_active"));
            contents.forEach((c) => (c.style.display = "none"));

            tab.classList.add("catalog__tab_active");
            contents[index].style.display = "flex";
        });
    });

    contents.forEach((c, i) => (c.style.display = i === 0 ? "flex" : "none"));
} catch (e) { }


//!Swiper
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

//!Form

try {
    const validator = new JustValidate('form');
    validator
        .addField('#name', [
            {
                rule: 'required',
                errorMessage: 'Поле имя пользователя, не может быть пустым',
            },
            {
                rule: 'minLength',
                value: 2,
            }
        ])
        .addField('#email', [
            {
                rule: 'required',
            },
            {
                rule: 'email',
            }
        ])
        .addField('#question', [
            {
                rule: 'required',
            },
            {
                rule: 'minLength',
                value: 5,
            }
        ], {
            errorsContainer: document.querySelector('#question').parentElement.querySelector('.error-message'),
        })
        .addField('#checkbox', [
            {
                rule: 'required',
            },
        ], {
            errorsContainer: document
                .querySelector('#checkbox').parentElement.parentElement
                .querySelector('.checkbox-error-message'),
        })
        .onSuccess((event) => {
            const form = event.currentTarget;
            const formData = new FormData(form);

            fetch('https://httpbin.org/post', {
                method: 'POST',
                body: formData,
            }).then(res => res.json()).then(data => {
                console.log('Success', data)
                form.reset();
            })
        })
} catch (e) {

}

try {
    const validatorFooter = new JustValidate('.footer__form');
    validatorFooter
        .addField('.footer__input', [
            {
                rule: 'required',
            },
            {
                rule: 'email',
            }
        ])
        .addField('#footer__checkbox', [
            {
                rule: 'required',
            },
        ], {
            errorsContainer: document
                .querySelector('#footer__checkbox').parentElement.parentElement
                .querySelector('.checkbox-error-message'),
        })

} catch (e) {

}

burgerMenu(burger, close, menu)