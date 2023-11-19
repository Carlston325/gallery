let arrowButton = $(".arrow-button")
let movingButton = true;

let photoSection = $("#photo-Div");
let videoSection = $("#video-Div");

// DOCUMENT
photoSection.slideUp();

$(".image-btn").remove();

// Change Section --SMALL WEBPAGE BUTTON-- (Photo - Video)
let webSize = window.matchMedia("(max-width: 650px)");


if (webSize.matches) {
    $("#select-photo-Div").remove();
    $("#select-video-Div").remove();
    
    $("#body").after("<div id='selector' class='card section-change-btn'><h4> <span class='green'>PHOTOS</span> <span style='color: white;'>/</span> <span class='blue'>VIDEOS</span> </h4>");
}

$(".section-change-btn").click (function () {

    let sectionChangeBTN = $(".section-change-btn");
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

// Add MORE Photos & Videos (BOXES)
// video
let i = 1;
let amountOfVideoBoxes = $(".video").length;

$("#add-videos").click (function () {
    for (i; i <= amountOfVideoBoxes; i++) {
        $("#add-videos").before("<div class='video-content'><img src='./assets/Videos/videoPlaceholder.jpg' id='video' class='video V"+ i + "'></div>");
    }
}); 
// photo
let x = 1;
let amountOfImageBoxes = $(".image").length;

$("#add-photos").click (function () {
    for (x; x <= amountOfImageBoxes; x++) {
        $("#add-photos").before("<div class='image-content'><img src='./assets/Images/imagePlaceholder.jpg' id='image' class='image I"+ x + "'></div>");
    }
}); 

// Upload Photo OR Video Media
// video
let video = document.querySelector("#video");
let videoInput = document.querySelector("#video-upload");

videoInput.onchange = function () {
    console.log(video.src = URL.createObjectURL(videoInput.files[0]));
    video.src = URL.createObjectURL(videoInput.files[0]);
};
    
// photo
let image = document.querySelector("#image");
let imageInput = document.querySelector("#image-upload");

imageInput.onchange = function () {
    console.log(image.src = URL.createObjectURL(imageInput.files[0]));
    image.src = URL.createObjectURL(imageInput.files[0]);
};

