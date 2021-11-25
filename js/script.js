const images = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const containerImages = document.querySelector('.row .col-4');
const containerImagesBig = document.querySelector ('.row .col-8');
for (let index = 0; index < images.length; index++) {
    let image = `<div class="box-image w-100"> <img class="w-100 h-100" src="${images[index]}" alt="">`;
    let imagesBig = `<img class="w-100 h-100 d-none" src="${images[index]}"alt="">`;
    containerImages.innerHTML += image;
    containerImagesBig.innerHTML += imagesBig;   
}

const imagesBox = document.querySelectorAll('.box-image img');
const imagesBoxBig = document.querySelectorAll('col-8 img');

imagesBox[0].classList.add('first' ,'active');
imagesBox[imagesBox.length - 1].classList.add('last');

imagesBoxBig[0].classList.add('first', 'active');
imagesBoxBig[imagesBoxBig.length - 1].classList.add('last');

const up = document.querySelector('.col-4 .box-up');
const down =document.querySelector('.col-4 .box-down');

up.addEventListener('click', function() {
    
}
)