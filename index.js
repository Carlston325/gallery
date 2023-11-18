let arrowButton = $(".arrow-button")
let movingButton = true;

let photoSection = $("#photo-Div");
let videoSection = $("#video-Div");

// DOCUMENT
photoSection.slideUp();

// Change Section --SMALL WEBPAGE BUTTON-- (Photo - Video)
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
        console.log("collapse video");

        videoSection.slideUp();
        photoSection.slideDown();
    } else {
        // video section
        console.log("collapse photo");

        videoSection.slideDown();
        photoSection.slideUp();
    }

    movingButton = !movingButton;
});

// Change Section --SECTION-- (Photo - Video)


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

// Add MORE Photos & Videos (BOXES)
let i = 1;

$("#add-videos").click (function () {
    $("#add-videos").before("<div class='video-content'><img class='video "+ i + "' src='./assets/Videos/videoPlaceholder.jpg'></div>");
});

$("#add-photos").click (function () {
    $("#add-photos").before("<div class='image-content'><img class='image' src='./assets/Images/imagePlaceholder.png'></div>");
})

// Upload Photo OR Video Media

let imageUpload = document.querySelector("#background-img");
let bgUpload = document.querySelector("#bg-upload");

bgUpload.onchange = function () {
    console.log(imageUpload.src = URL.createObjectURL(bgUpload.files[0]))
    imageUpload.src = URL.createObjectURL(bgUpload.files[0])
}
 

    // To add media to each box uniquely code could be:
    // if (i === 0 ) {
        // add media to the class of zero
    // } else {
        // for (i = 1; i === img.length; i++ ) {
            // add media to the boxes
        // }
    // }
