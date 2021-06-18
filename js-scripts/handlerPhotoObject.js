'use strict'

function handlerNext(countImage) {


    var photoObjectImg = document.querySelector('.photoObject img');
    var patternPage = /[0-9]{1,2}\.(jpg|JPG)/;

    var extendsImg = photoObjectImg.src.substr(-4, 4);
    var catalog = photoObjectImg.src.split('/');
    catalog.pop(catalog.length - 1);
    catalog = catalog.join("\/");

    var page = patternPage.exec(photoObjectImg.src);
    page = Number(page[0].split('.')[0]) + 1;

    if (page != countImage) {

        photoObjectImg.src = catalog + "\/" + page + extendsImg;
    } else {

        page = 1;
        photoObjectImg.src = catalog + "\/" + page + extendsImg;
    };
}

function handlerPrev(countImage) {

    var photoObjectImg = document.querySelector('.photoObject img');
    var patternPage = /[0-9]{1,2}\.(jpg|JPG)/;

    var extendsImg = photoObjectImg.src.substr(-4, 4);
    var catalog = photoObjectImg.src.split('/');
    catalog.pop(catalog.length - 1);
    catalog = catalog.join("\/");

    var page = patternPage.exec(photoObjectImg.src);
    page = Number(page[0].split('.')[0]) - 1;

    if (page != 0) {

        photoObjectImg.src = catalog + "\/" + page + extendsImg;
    } else {

        page = countImage - 1;
        photoObjectImg.src = catalog + "\/" + page + extendsImg;
    }
}

var buttonClose = document.querySelectorAll('.Close');
buttonClose[0].addEventListener('click', function() {

    var photoObject = document.querySelector('.photoObject');
    photoObject.style.opacity = 0;
    photoObject.style.zIndex = 1;    

}, false);

var buttonNext = document.querySelectorAll('.Next');
buttonNext[0].addEventListener('click', function(event) {

    let nameObject = event.target.parentNode.parentNode.children[1].src.split('/')[6];
    console.log(nameObject);
    if(nameObject == 'Simf_Kirova_28') { handlerNext(13); };
    if(nameObject == 'Simf_Naberej_77') { handlerNext(16); };
    if(nameObject == 'Simf_Lermontova_17') { handlerNext(12); };
    if(nameObject == 'Simf_KMarx_5') { handlerNext(12); };
    if(nameObject == 'Simf_Sevastopol_29') { handlerNext(6); };
    if(nameObject == 'Simf_Gagarina_1') { handlerNext(9); };
    if(nameObject == 'Simf_Kirova_5') { handlerNext(10); };
    if(nameObject == 'Simf_Samokisha_2') { handlerNext(9); };
    if(nameObject == 'Simf_Kirova_16') { handlerNext(9); };
    if(nameObject == 'Simf_CrimSpring_1') { handlerNext(7); };
    if(nameObject == 'Simf_Leskova_58') { handlerNext(8); };
    if(nameObject == 'Mosc_Myakinino_19A1') { handlerNext(13); };
    if(nameObject == 'Mosc_Myakinino_19A2') { handlerNext(10); };
    if(nameObject == 'Mosc_Myakinino_19A3') { handlerNext(13); };
    if(nameObject == 'Mosc_Myakinino_19A4') { handlerNext(11); };

}, false);

var buttonPrev = document.querySelectorAll('.Prev');
buttonPrev[0].addEventListener('click', function(event) {

    let nameObject = event.target.parentNode.parentNode.children[1].src.split('/')[6];

    if(nameObject == 'Simf_Kirova_28') { handlerPrev(13); };
    if(nameObject == 'Simf_Naberej_77') { handlerPrev(16); };
    if(nameObject == 'Simf_Lermontova_17') { handlerPrev(12); };
    if(nameObject == 'Simf_KMarx_5') { handlerPrev(12); };
    if(nameObject == 'Simf_Sevastopol_29') { handlerPrev(6); };
    if(nameObject == 'Simf_Gagarina_1') { handlerPrev(9); };
    if(nameObject == 'Simf_Kirova_5') { handlerPrev(10); };
    if(nameObject == 'Simf_Samokisha_2') { handlerPrev(9); };
    if(nameObject == 'Simf_Kirova_16') { handlerPrev(9); };
    if(nameObject == 'Simf_CrimSpring_1') { handlerPrev(7); };
    if(nameObject == 'Simf_Leskova_58') { handlerPrev(8); };
    if(nameObject == 'Mosc_Myakinino_19A1') { handlerPrev(13); };
    if(nameObject == 'Mosc_Myakinino_19A2') { handlerPrev(10); };
    if(nameObject == 'Mosc_Myakinino_19A3') { handlerPrev(13); };
    if(nameObject == 'Mosc_Myakinino_19A4') { handlerPrev(11); };

}, false);