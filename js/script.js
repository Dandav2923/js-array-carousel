const images = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];
const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

const containerImages = document.querySelector('.row .col-4');
const containerImagesBig = document.querySelector ('.row .col-8');
for (let index = 0; index < images.length; index++) {
    let image = `<div class="box-image w-100"> <img class="w-100 h-100 opacity-25" src="${images[index]}" alt="">`;
    let imagesBig = `<img class="w-100 h-100 d-none" src="${images[index]}"alt="">`;
    containerImages.innerHTML += image;
    containerImagesBig.innerHTML += imagesBig;   
}

const imagesBox = document.querySelectorAll('.box-image');
const imagesBoxBig = document.querySelectorAll('.col-8 img');

imagesBox[0].classList.add('first' ,'active');
imagesBox[imagesBox.length - 1].classList.add('last');

imagesBoxBig[0].classList.add('first' , 'active');
imagesBoxBig[imagesBoxBig.length - 1].classList.add('last');

const up = document.getElementById('up');
const down =document.getElementById('down');


// down.addEventListener('click', function() {
    
//     // let classes = imageActive.classList;
//     let boolean = false;
//     // for (let index = 0; index < classes.length; index++) {
//         //     if (classes[index] == 'last') {
//             //         boolean = true;
//             //     }        
//             // }
//             const imageActive = document.querySelector('.col-4 img.active');
//             const imageBigActive = document.querySelector('.col-8 img.active');
//             const imageNext = imageActive.nextElementSibling;
//             const imageBigNext = imageBigActive.nextElementSibling;
//     if (boolean == false) {
//         imageActive.classList.remove('active');
//         imageBigActive.classList.remove('active');
//         // console.log(imageNext);
//         // console.log(imageBigNext);
//         imageNext.classList.add('active');
//         imageBigNext.classList.add('active');

//     }
// });

down.addEventListener('click', function () {

    let imageLast = false;
    const imageActive = document.querySelector('.col-8 img.active');
    const firstImage = document.querySelector('.col-8 img.first');
    const nextImage = imageActive.nextElementSibling;
    const thumbActive = document.querySelector('.col-4 .box-image.active');
    const firstThumb = document.querySelector('.col-4 .box-image.first');
    const nextThumb = thumbActive.nextElementSibling;
    const imageActiveClasses = imageActive.classList;

    for (let i = 0; i < imageActiveClasses.length; i++) {
        if (imageActiveClasses[i] == 'last') {
            imageLast = true;
        }
    }
    imageActive.classList.remove('active');
    thumbActive.classList.remove('active');
    
    if (!imageLast) {
        nextImage.classList.add('active');
        nextThumb.classList.add('active');
    } else {
        firstImage.classList.add('active');
        firstThumb.classList.add('active');
    }

});

up.addEventListener('click', function () {

    let imageFirst = false;
    const imageActive = document.querySelector('.col-8 img.active');
    const lastImage = document.querySelector('.col-8 img.last');
    const nextImage = imageActive.previousElementSibling;
    const thumbActive = document.querySelector('.col-4 .box-image.active');
    const lastThumb = document.querySelector('.col-4 .box-image.last');
    const nextThumb = thumbActive.previousElementSibling;
    const imageActiveClasses = imageActive.classList;
    // console.log(imageActive.classList);

    for (let i = 0; i < imageActiveClasses.length; i++) {
        // console.log(imageActiveClasses[i]);
        if (imageActiveClasses[i] == 'first') {
            imageFirst = true;
        }
    }
    imageActive.classList.remove('active');
    thumbActive.classList.remove('active');

    if (!imageFirst) {
        nextImage.classList.add('active');
        nextThumb.classList.add('active');
    } else {
        lastImage.classList.add('active');
        lastThumb.classList.add('active');
    }

});