let headerMenu = document.querySelector('.header__menu');
let headerResClose = document.querySelector('.header__res__close');
let headerRes = document.querySelector('.header__res');
let heroCart = document.querySelector('.hero__cart')

headerMenu.addEventListener('click', function () {
    headerRes.classList.add('active');
    heroCart.classList.add('activeBanner')
    document.body.style.overflow = 'hidden';a
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

featureswrapbtn.addEventListener('click' , function(){
    simpleCart.style.display = 'block'
    speedyCart.style.display = 'none'
    easyCart.style.display = 'none'
})

featuresBtnOne.addEventListener('click' , function(){
    simpleCart.style.display = 'none'
    speedyCart.style.display = 'block'
    easyCart.style.display = 'none'
})

featuresBtnTwo.addEventListener('click' , function(){
    simpleCart.style.display = 'none'
    speedyCart.style.display = 'none'
    easyCart.style.display = 'block'
})


let oneBtn = document.querySelector('#oneBtn');
let oneCart = document.querySelector('#oneCart');
let hidden = document.querySelector('#hidden');

if (oneBtn && oneCart && hidden) {
    oneBtn.addEventListener('click', function () {
        oneCart.style.display = 'block';
        oneBtn.classList.add('frequently__btn__hover');
    });

    hidden.addEventListener('click', function () {
        oneCart.style.display = 'none';
        oneBtn.classList.remove('frequently__btn__hover');
    });
}

let oneeBtn = document.querySelector('#oneeBtn');
let oneeCart = document.querySelector('#oneeCart');
let hiddeen = document.querySelector('#hiddeen');

if (oneeBtn && oneeCart && hiddeen) {
    oneeBtn.addEventListener('click', function () {
        oneeCart.style.display = 'block';
        oneeBtn.classList.add('frequently__btn__hover');
    });

    hiddeen.addEventListener('click', function () {
        oneeCart.style.display = 'none';
        oneeBtn.classList.remove('frequently__btn__hover');
    });
}

let uchBtn = document.querySelector('#uchBtn');
let uchCart = document.querySelector('#uchCart');
let uchhidden = document.querySelector('#uchhidden');

if (uchBtn && uchCart && uchhidden) {
    uchBtn.addEventListener('click', function () {
        uchCart.style.display = 'block';
        uchBtn.classList.add('frequently__btn__hover');
    });

    uchhidden.addEventListener('click', function () {
        uchCart.style.display = 'none';
        uchBtn.classList.remove('frequently__btn__hover');
    });
}

let fourBtn = document.querySelector('#fourBtn');
let fourCart = document.querySelector('#fourCart');
let hidden3 = document.querySelector('#hidden3');

if (fourBtn && fourCart && hidden3) {
    fourBtn.addEventListener('click', function () {
        fourCart.style.display = 'block';
        fourBtn.classList.add('frequently__btn__hover');
    });

    hidden3.addEventListener('click', function () {
        fourCart.style.display = 'none';
        fourBtn.classList.remove('frequently__btn__hover');
    });
}