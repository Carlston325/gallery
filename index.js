// Add Media --BUTTON CLICK--
$("#add-media-Div").click (function () {

    let activeButton = $("#add-media-Div");
    let textFlash = $(".btn");
    
    activeButton.addClass("btn-shadow");
    textFlash.addClass("text-flash");

    setTimeout(function() {
        activeButton.removeClass("btn-shadow");
        textFlash.removeClass("text-flash");
    }, 200);
});

// Change --ENTIRE-- Section (Photo - Video)
let arrowButton = $(".arrow-button")
let image = $("#select-section");
let movingButton = true;

let photoSection = $("#photo-Div");
let videoSection = $("#video-Div");

let webSize = window.matchMedia("(max-width: 650px)");

if (webSize.matches) {
    $("#select-photo-Div").remove();
    $("#select-video-Div").remove();
    
    $("#body").after("<div class='section-change-btn'><h3> <span class='green'>PHOTOS</span> <span style='color: white;'>/</span> <span class='blue'>VIDEOS</span> </h3>");
}

$(".section-change-btn").click (function () {

    let sectionChangeBTN = $(".section-change-btn");
    sectionChangeBTN.addClass("btn-shadow");
    
    setTimeout(function() {
        sectionChangeBTN.removeClass("btn-shadow");
    }, 100);

    if (movingButton) {

        videoSection.css("z-index", "1");
        photoSection.css("z-index", "0");

        $(".blue").addClass("text-flash");

        setTimeout(function() {
            $(".blue").removeClass("text-flash");
        }, 100);
    } else {

        videoSection.css("z-index", "0");
        photoSection.css("z-index", "1");

        $(".green").addClass("text-flash");

        setTimeout(function() {
            $(".green").removeClass("text-flash");
        }, 100);
    }

    movingButton = !movingButton;   
});

// Change Section --BUTTON-- (Photo - Video)
arrowButton.click(function() {

    if (movingButton) {

        image.attr("src", "./assets/svg/caret-" + "right" + "-square-fill.svg");

        videoSection.css("z-index", "1");
        photoSection.css("z-index", "0");

        arrowButton.css("text-align", "start");
        image.css("background-color", "rgb(129, 255, 112)");
    } else {

        image.attr("src", "./assets/svg/caret-" + "left" + "-square-fill.svg");
        
        videoSection.css("z-index", "0");
        photoSection.css("z-index", "1");

        arrowButton.css("text-align", "end");
        image.css("background-color", "rgb(112, 234, 255)");
    }

    movingButton = !movingButton;
});

// Upload Images - Videos

let imageUpload = document.querySelector("#background-img");
let bgUpload = document.querySelector("#bg-upload");

bgUpload.onchange = function () {
    console.log(imageUpload.src = URL.createObjectURL(bgUpload.files[0]))
    imageUpload.src = URL.createObjectURL(bgUpload.files[0])
}
