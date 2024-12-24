let headerMenu = document.querySelector('.header__menu');
let headerResClose = document.querySelector('.header__res__close');
let headerRes = document.querySelector('.header__res');
let heroCart = document.querySelector('.hero__cart')

headerMenu.addEventListener('click', function () {
    headerRes.classList.add('active');
    heroCart.classList.add('activeBanner')
    document.body.style.overflow = 'hidden'; a
});

headerResClose.addEventListener('click', function () {
    headerRes.classList.remove('active');
    document.body.style.overflow = 'auto';
});


let featuresBtn = document.querySelectorAll('.features__wrap__btn');

featuresBtn.forEach((item) => {
    item.addEventListener('click', function () {
        featuresBtn.forEach((btn) => btn.classList.remove('features__wrap__btn__active'));
        item.classList.add('features__wrap__btn__active');
    });
});

let featureswrapbtn = document.querySelector('.features__wrap__btn')
let featuresBtnOne = document.querySelector('#featuresBtnOne')
let featuresBtnTwo = document.querySelector('#featuresBtnTwo')

let simpleCart = document.querySelector('.simpleCart')
let speedyCart = document.querySelector('.speedyCart')
let easyCart = document.querySelector('.easyCart')

featureswrapbtn.addEventListener('click', function () {
    simpleCart.style.display = 'block'
    speedyCart.style.display = 'none'
    easyCart.style.display = 'none'
})

featuresBtnOne.addEventListener('click', function () {
    simpleCart.style.display = 'none'
    speedyCart.style.display = 'block'
    easyCart.style.display = 'none'
})

featuresBtnTwo.addEventListener('click', function () {
    simpleCart.style.display = 'none'
    speedyCart.style.display = 'none'
    easyCart.style.display = 'block'
})



