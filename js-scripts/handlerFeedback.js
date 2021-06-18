'use strict'

function handlerFeedback() {

    let subscribe = document.querySelector('.subscribe');

    subscribe.style.opacity = 1;
    subscribe.style.zIndex = 10;

    for(let i=0; i < subscribe.children[1].children.length; i++) {

        subscribe.children[1].children[i].children[1].value = "";
    }
}

var buttonFeedbackTop = document.querySelector('.header__button a');
buttonFeedbackTop.addEventListener('click', function(event) {

    event.preventDefault();
    handlerFeedback();
}, false);

var buttonFeedbackSend = document.querySelector('.subscribeSend a');
buttonFeedbackSend.addEventListener('click', function(event) {

    event.preventDefault();
    
    let subscribe = document.querySelector('.subscribe');
    for(let i=0; i < subscribe.children[1].children.length; i++) {

        subscribe.children[1].children[i].children[1].value = "";
    };

    $('.sendFeedback').dialog('open');

    subscribe.style.opacity = 0;
    subscribe.style.zIndex = 1;

}, false);

var buttonFeedbackClose = document.querySelector('.subscribeClose a');
// console.log(buttonFeedbackClose);
buttonFeedbackClose.addEventListener('click', function(event) {

    event.preventDefault();
    
    let subscribe = document.querySelector('.subscribe');

    subscribe.style.opacity = 0;
    subscribe.style.zIndex = 1;

}, false);

$('.sendFeedback').dialog({
    resizable: false,
    modal: true,
    title: "Обратная связь",
    buttons: [{
        text: "Ok",
        click: function() {
            $( this ).dialog( "close" );
        }
    }]
});

$('.sendFeedback').dialog('close');