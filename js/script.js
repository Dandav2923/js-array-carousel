const images = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const containerImages = document.querySelector('.row .col-4');

for (let index = 0; index < images.length; index++) {
    let image = `<div class="box-image w-100"> <img class="w-100" src="${images[index]}" alt="">`;
    containerImages.innerHTML += image;   
}
