let headerMenu = document.querySelector('.header__menu');
let headerResClose = document.querySelector('.header__res__close');
let headerRes = document.querySelector('.header__res');
let heroCart = document.querySelector('.hero__cart')

headerMenu.addEventListener('click', function () {
    headerRes.classList.add('active');
    heroCart.classList.add('activeBanner')
});

headerResClose.addEventListener('click', function () {
    headerRes.classList.remove('active');
});


let featuresBtn = document.querySelectorAll('.features__wrap__btn');

featuresBtn.forEach((item) => {
    item.addEventListener('click', function () {
        featuresBtn.forEach((btn) => btn.classList.remove('features__wrap__btn__active'));
        item.classList.add('features__wrap__btn__active');
    });
});

