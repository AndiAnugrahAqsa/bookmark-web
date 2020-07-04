var featureOne = $("#feature-1");
var featureTwo = $("#feature-2");
var featureThree = $("#feature-3");
var slideOne = $("#slide-1");
var slideTwo = $("#slide-2");
var slideThree = $("#slide-3");
var email = $("input[name = 'email']");
var emailValid = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
var title = $(".title-fluid");
var image = $(".image-title");
var variationTop = $(".variation-image-feature-box");
var wrongText = $(".text-display");
var btnContact = $("#btn-contact-us");
var formEmail = $(".form-email")
var facebookIcon = $("#f-icon");
var twitterIcon = $("#t-icon");

// BUTTON FEATURE

featureOne.click(function() {
    featureOne.addClass("feature-select")
    featureTwo.removeClass("feature-select");
    featureThree.removeClass("feature-select");
    slideOne.removeClass("hide-slide");
    slideTwo.addClass("hide-slide");
    slideThree.addClass("hide-slide");
})

featureTwo.click(function() {
    featureTwo.addClass("feature-select")
    featureOne.removeClass("feature-select");
    featureThree.removeClass("feature-select");
    slideOne.addClass("hide-slide");
    slideTwo.removeClass("hide-slide");
    slideThree.addClass("hide-slide");
})

featureThree.click(function() {
    featureThree.addClass("feature-select")
    featureTwo.removeClass("feature-select");
    featureOne.removeClass("feature-select");
    slideOne.addClass("hide-slide");
    slideTwo.addClass("hide-slide");
    slideThree.removeClass("hide-slide");
});

$("#value-email").submit(function(e) {
    e.preventDefault();

    validateEmail();
})


// CHECK EMAIL

function validateEmail() {
    if (!checkEmail(email.val())) {
        $(".form-email").addClass("email-wrong");
        $(".text-display").addClass("wrong-text");
    } else {

        $(".form-email").removeClass("email-wrong");
        $(".text-display").removeClass("wrong-text");
    }
}

function checkEmail(email) {
    return emailValid.test(email);
}


// QNA RESPONSE

$("#qna-1").click(function() {
    $("#bar-1").toggleClass("drop-answer-bar")
    $("#answer-1").toggleClass("answer-text")
})

$("#qna-2").click(function() {
    $("#bar-2").toggleClass("drop-answer-bar")
    $("#answer-2").toggleClass("answer-text")
})

$("#qna-3").click(function() {
    $("#bar-3").toggleClass("drop-answer-bar")
    $("#answer-3").toggleClass("answer-text")
})

$("#qna-4").click(function() {
    $("#bar-4").toggleClass("drop-answer-bar")
    $("#answer-4").toggleClass("answer-text")
})


// CHANGE POSITION

function changePosition(media) {
    if (media.matches) {
        $(".title-container").html(image);
        $(".title-container").append(title);
        $(".input-email").html(formEmail);
        $(".input-email").append(wrongText);
        $(".input-email").append(btnContact);


    } else {
        $(".title-container").html(title);
        $(".title-container").append(image);
    }
}


var media = window.matchMedia("(max-width: 375px)");
changePosition(media);
media.addListener(changePosition);

// NAVBAR STYLE
$(".icon-nav").click(function() {
    $(".logo").toggleClass("logo-navbar")
    $(".icon-nav").toggleClass("icon-close");
    $(".nav-container").toggleClass("display-show")
    $(".navbar-nav").toggleClass("display-show")
    facebookIcon.toggleClass("display-hide");
    twitterIcon.toggleClass("display-hide")
});