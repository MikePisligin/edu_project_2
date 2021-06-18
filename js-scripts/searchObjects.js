'use script'

var searchButton = document.querySelector('.search__button input');
searchButton.addEventListener('click', function() {

    let data = {}, priceSearch = new Array(), animalsSearch;

    let citySearch = document.querySelector('.search__city select'),
        countGuest = document.querySelector('.search__qountGuest select'),
        floorSearch = document.querySelector('.search__floor select'),
        priceLeft = document.querySelector('.search__slider__price__range__min'),
        priceRight = document.querySelector('.search__slider__price__range__max');
    
    priceSearch.push(priceLeft.value, priceRight.value);

    let animalsCheckbox = document.querySelector('.search__animals input');
    if (animalsCheckbox.checked == true) {
        animalsSearch = 1;
    } else if (animalsCheckbox.checked == false) {
        animalsSearch = 0;
    };

    data.citySearch = citySearch.value;
    data.countGuest = countGuest.value;
    data.floorSearch = floorSearch.value;
    data.priceSearch = priceSearch;
    data.animalsSearch = animalsSearch;

    var searchQuery = new XMLHttpRequest();

    searchQuery.open("post", "php-scripts/searchObjects.php", true);
    searchQuery.send(JSON.stringify(data));

    searchQuery.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {

            var object = "",
                objectCopy = "";

            var searchObjects = JSON.parse(searchQuery.responseText);
            var parentObject = document.querySelector('.content');

            var collectionAllObjects = document.querySelectorAll('.object');
            var strSelector = "";

            for (let i = 0; i < collectionAllObjects.length; i++) {

                objectCopy = parentObject.removeChild(collectionAllObjects[i]);
            }

            for (let i = 0; i < searchObjects.length; i++) {

                classNameObj = "object " + searchObjects[i].AbbrNameObj;
                var classNameMoreDetailed = "object__control__moreDetailed " + searchObjects[i].AbbrNameObj;

                if (i > 0) {
                    strSelector = '.' + searchObjects[i - 1].AbbrNameObj;
                    object = document.querySelector(strSelector);
                    objectCopy = object.cloneNode(true);
                }

                objectCopy.className = classNameObj;
                parentObject.appendChild(objectCopy);

                strSelector = '.' + searchObjects[i].AbbrNameObj + ' .object__control__moreDetailed';
                var objectMoreDetailed = document.querySelector(strSelector);
                strSelector = '.' + searchObjects[i].AbbrNameObj + ' > .object__info > .object__info__photo a';
                var photoObjectTurn = document.querySelector(strSelector);

                strSelector = '.' + searchObjects[i].AbbrNameObj + ' > .object__info > .object__info__parameter .city';
                var cityObject = document.querySelector(strSelector);
                strSelector = '.' + searchObjects[i].AbbrNameObj + ' > .object__info > .object__info__parameter .address';
                var addressObject = document.querySelector(strSelector);
                strSelector = '.' + searchObjects[i].AbbrNameObj + ' > .object__info > .object__info__photo img';
                var imageObject = document.querySelector(strSelector);
                strSelector = '.' + searchObjects[i].AbbrNameObj + ' > .object__info .room';
                var countRoomObject = document.querySelector(strSelector);
                strSelector = '.' + searchObjects[i].AbbrNameObj + ' > .object__info .sleepPlace';
                var countSleepPlaceObject = document.querySelector(strSelector);
                strSelector = '.' + searchObjects[i].AbbrNameObj + ' > .object__info .stage';
                var countStageObject = document.querySelector(strSelector);
                strSelector = '.' + searchObjects[i].AbbrNameObj + ' > .object__info > .object__info__price > h3';
                var priceObject = document.querySelector(strSelector);
                strSelector = '.' + searchObjects[i].AbbrNameObj + ' > .object__description .description';
                var descriptionObject = document.querySelector(strSelector);
                strSelector = '.' + searchObjects[i].AbbrNameObj + ' > .object__description .documents';
                var documentsObject = document.querySelector(strSelector);

                objectMoreDetailed.className = classNameMoreDetailed;
                photoObjectTurn.className = searchObjects[i].AbbrNameObj + "PhotoObj";
                imageObject.src = searchObjects[i].image;
                cityObject.textContent = searchObjects[i].city;
                addressObject.textContent = searchObjects[i].address;
                countRoomObject.textContent = searchObjects[i].countRoom;
                countSleepPlaceObject.textContent = searchObjects[i].countSleepPlace;
                countStageObject.textContent = searchObjects[i].stage;
                priceObject.textContent = searchObjects[i].price;
                descriptionObject.textContent = searchObjects[i].description;
                documentsObject.textContent = searchObjects[i].documents;

                photoObjectTurn.addEventListener('click', function(event) {

                    event.preventDefault();
        
                    var photoObject = document.querySelector('.photoObject');
        
                    photoObject.style.opacity = 1;
                    photoObject.style.zIndex = 100;
        
        
                }, false);

            }

            var moreDetaileds = document.querySelectorAll('.object .object__control__moreDetailed');
            var bookings = document.querySelectorAll('.booking');
    
            moreDetaileds.forEach(function(elem, ind) {
    
                elem.addEventListener('click', function(event) {

                    event.preventDefault();

                    if (ind == 0) {

                    } else {

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
                    };
    
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

}, false);