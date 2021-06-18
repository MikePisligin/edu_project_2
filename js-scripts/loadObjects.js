'use strict'

var xhr = new XMLHttpRequest();
xhr.open("post", "php-scripts/allObjects.php", true);

xhr.send();
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

        var allObjects = JSON.parse(xhr.responseText);

        var object = document.querySelector('.simfKirova28');

        var photoObjectTurn = document.querySelector('.simfKirova28 > .object__info > .object__info__photo a');
        var imageObject = document.querySelector('.simfKirova28 > .object__info > .object__info__photo img');
        var cityObject = document.querySelector('.simfKirova28 > .object__info > .object__info__parameter .city');
        var addressObject = document.querySelector('.simfKirova28 > .object__info > .object__info__parameter .address');
        var countRoomObject = document.querySelector('.simfKirova28 > .object__info .room');
        var countSleepPlaceObject = document.querySelector('.simfKirova28 > .object__info .sleepPlace');
        var countStageObject = document.querySelector('.simfKirova28 > .object__info .stage');
        var priceObject = document.querySelector('.simfKirova28 > .object__info > .object__info__price > h3');
        var descriptionObject = document.querySelector('.simfKirova28 > .object__description .description');
        var documentsObject = document.querySelector('.simfKirova28 > .object__description .documents');

        object.style.display = "block";

        photoObjectTurn.className = allObjects[0].AbbrNameObj;
        cityObject.textContent = allObjects[0].city;
        addressObject.textContent = allObjects[0].address;
        imageObject.src = allObjects[0].image;
        countRoomObject.textContent = allObjects[0].countRoom;
        countSleepPlaceObject.textContent = allObjects[0].countSleepPlace;
        countStageObject.textContent = allObjects[0].stage;
        priceObject.textContent = allObjects[0].price;
        descriptionObject.textContent = allObjects[0].description;
        documentsObject.textContent = allObjects[0].documents;

        photoObjectTurn.addEventListener('click', function(event) {

            event.preventDefault();

            var photoObject = document.querySelector('.photoObject');
            var catalogObject = event.target.src.split('/')[6].split('\.')[0];
            var smallPicture = "images/objects/bigPicture/" + catalogObject + "/1.jpg";

            photoObject.style.opacity = 1;
            photoObject.style.zIndex = 100;

            photoObject.children[1].children[1].src = smallPicture;

        }, false);

        var classNameObj = "";
        let strSelector = "";

        for (let i = 1; i < allObjects.length; i++) {

            var parentObject = document.querySelector('.content');
            var objectCopy = object.cloneNode(true);

            classNameObj = "object " + allObjects[i].AbbrNameObj;
            var classNameMoreDetailed = "object__control__moreDetailed " + allObjects[i].AbbrNameObj;

            objectCopy.className = classNameObj;
            parentObject.appendChild(objectCopy);

            strSelector = '.' + allObjects[i].AbbrNameObj + ' .object__control__moreDetailed';
            var objectMoreDetailed = document.querySelector(strSelector);
            strSelector = '.' + allObjects[i].AbbrNameObj + ' > .object__info > .object__info__photo a';
            photoObjectTurn = document.querySelector(strSelector);
            strSelector = '.' + allObjects[i].AbbrNameObj + ' > .object__info > .object__info__parameter .city';
            cityObject = document.querySelector(strSelector);
            strSelector = '.' + allObjects[i].AbbrNameObj + ' > .object__info > .object__info__parameter .address';
            addressObject = document.querySelector(strSelector);
            strSelector = '.' + allObjects[i].AbbrNameObj + ' > .object__info > .object__info__photo img';
            imageObject = document.querySelector(strSelector);
            strSelector = '.' + allObjects[i].AbbrNameObj + ' > .object__info .room';
            countRoomObject = document.querySelector(strSelector);
            strSelector = '.' + allObjects[i].AbbrNameObj + ' > .object__info .sleepPlace';
            countSleepPlaceObject = document.querySelector(strSelector);
            strSelector = '.' + allObjects[i].AbbrNameObj + ' > .object__info .stage';
            countStageObject = document.querySelector(strSelector);
            strSelector = '.' + allObjects[i].AbbrNameObj + ' > .object__info > .object__info__price > h3';
            priceObject = document.querySelector(strSelector);
            strSelector = '.' + allObjects[i].AbbrNameObj + ' > .object__description .description';
            descriptionObject = document.querySelector(strSelector);
            strSelector = '.' + allObjects[i].AbbrNameObj + ' > .object__description .documents';
            documentsObject = document.querySelector(strSelector);

            objectMoreDetailed.className = classNameMoreDetailed;
            photoObjectTurn.className = allObjects[i].AbbrNameObj;
            imageObject.src = allObjects[i].image;
            cityObject.textContent = allObjects[i].city;
            addressObject.textContent = allObjects[i].address;
            countRoomObject.textContent = allObjects[i].countRoom;
            countSleepPlaceObject.textContent = allObjects[i].countSleepPlace;
            countStageObject.textContent = allObjects[i].stage;
            priceObject.textContent = allObjects[i].price;
            descriptionObject.textContent = allObjects[i].description;
            documentsObject.textContent = allObjects[i].documents;

            photoObjectTurn.addEventListener('click', function(event) {

                event.preventDefault();

                var photoObject = document.querySelector('.photoObject');
                var catalogObject = event.target.src.split('/')[6].split('\.')[0];
                var smallPicture = "images/objects/bigPicture/" + catalogObject + "/1.jpg";

                photoObject.style.opacity = 1;
                photoObject.style.zIndex = 100;

                photoObject.children[1].children[1].src = smallPicture;

            }, false);

        };

        var moreDetaileds = document.querySelectorAll('.object .object__control__moreDetailed');
        var bookings = document.querySelectorAll('.booking');

        moreDetaileds.forEach(function(elem) {

            elem.addEventListener('click', function(event) {

                event.preventDefault();

                let strClass = event.target.className.split(" ")[1];
                let str = "." + strClass + " .object__info__parameter > span";
                var objectInfoParameterSpan = document.querySelector(str);
                str = "." + strClass + " .object__description";
                var objectDescription = document.querySelector(str);

                if (objectDescription.style.opacity == 0) {

                    objectDescription.style.top = '0px';
                    objectDescription.style.opacity = 1;
                    objectDescription.style.height = '400px';

                    objectInfoParameterSpan.style.opacity = 0;

                } else if (objectDescription.style.opacity == 1) {

                    objectDescription.style.top = '-400px';
                    objectDescription.style.opacity = 0;
                    objectDescription.style.height = '0px';

                    objectInfoParameterSpan.style.opacity = 1;
                }

            }, false);
        });

        bookings.forEach(function(booking) {

            booking.addEventListener('click', function(event) {

                event.preventDefault();
                alert("Извините, по техническим причинам бронирование невозможно.");

            }, false);

        });

    }

};