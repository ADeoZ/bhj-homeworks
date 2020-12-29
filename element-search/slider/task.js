const sliders = document.querySelectorAll('.slider__item'),
    prev = document.querySelector('.slider__arrow_prev'),
    next = document.querySelector('.slider__arrow_next'),
    dots = document.querySelectorAll('.slider__dot');
let slideActive = 0;

prev.onclick = () => {
    sliders[slideActive].classList.remove('slider__item_active');
    dots[slideActive].classList.remove('slider__dot_active');

    if (slideActive - 1 < 0) {
        slideActive = sliders.length - 1;
    } else {
        slideActive -= 1;
    }

    sliders[slideActive].classList.add('slider__item_active');
    dots[slideActive].classList.add('slider__dot_active');
}

next.onclick = () => {
    sliders[slideActive].classList.remove('slider__item_active');
    dots[slideActive].classList.remove('slider__dot_active');

    if (slideActive + 1 === sliders.length) {
        slideActive = 0;
    } else {
        slideActive += 1;
    }

    sliders[slideActive].classList.add('slider__item_active');
    dots[slideActive].classList.add('slider__dot_active');
}

// Управление точками
dots[slideActive].classList.add('slider__dot_active');
[...dots].forEach((item, i) => item.onclick = () => {
    sliders[slideActive].classList.remove('slider__item_active');
    dots[slideActive].classList.remove('slider__dot_active');

    slideActive = i;

    sliders[slideActive].classList.add('slider__item_active');
    dots[slideActive].classList.add('slider__dot_active');
});
