const arrowButton = $(".arrow-button")
let movingButton = true;

const photoSection = $("#photo-Div");
const videoSection = $("#video-Div");

// DOCUMENT
photoSection.slideUp();

$(".image-btn").remove();

// Change Section --SMALL WEBPAGE BUTTON-- (Photo - Video)
const webSize = window.matchMedia("(max-width: 650px)");


if (webSize.matches) {
    $("#select-photo-Div").remove();
    $("#select-video-Div").remove();
    
    $("#body").after("<div id='selector' class='card section-change-btn'><h4> <span class='green'>PHOTOS</span> <span style='color: white;'>/</span> <span class='blue'>VIDEOS</span> </h4>");
}

$(".section-change-btn").click (function () {

    const sectionChangeBTN = $(".section-change-btn");
    sectionChangeBTN.addClass("btn-shadow");
    
    setTimeout(function() {
        sectionChangeBTN.removeClass("btn-shadow");
    }, 100);

    if (movingButton) {

        videoSection.slideUp();
        photoSection.slideDown();

        $(".green").addClass("text-flash");

        setTimeout(function() {
            $(".green").removeClass("text-flash");
        }, 100);
    } else {

        videoSection.slideDown();
        photoSection.slideUp();

        $(".blue").addClass("text-flash");

        setTimeout(function() {
            $(".blue").removeClass("text-flash");
        }, 100);
    }

    movingButton = !movingButton;   
});

// Change Section --ARROW-- (Photo - Video)
arrowButton.click(function() {

    if (movingButton) {
        // photo section
        videoSection.slideUp();
        photoSection.slideDown();

    } else {
        // video section
        videoSection.slideDown();
        photoSection.slideUp();
    }

    movingButton = !movingButton;
});

// Upload Photos & Videos
// Video
function addVideo() {
    var input = document.getElementById("inputVideo");
    var file = input.files[0];
    var reader = new FileReader();

    reader.onload = function(e) {
        var video = document.createElement("video");
        video.src = e.target.result;
        video.controls = true;

        var div = document.createElement("div");
        div.className = "video-box";

        div.appendChild(video);
        document.getElementById("video-container").appendChild(div);
    }

    reader.readAsDataURL(file);
}

$("#addVideo").click(addVideo);
// Image
function addImage() {
    var input = document.getElementById("inputImage");
    var file = input.files[0];
    var reader = new FileReader();

    reader.onload = function(e) {
        var img = new Image();
        img.src = e.target.result;
        img.classList.add("image");

        var div = document.createElement("div");
        div.classList.add("image-box");
        
        div.appendChild(img);
        document.getElementById("image-container").appendChild(div);
    }

    reader.readAsDataURL(file);
}

$("#addImage").click(addImage);
