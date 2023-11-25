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

// Add MORE Photos & Videos (BOXES)
// video
const videoAddBTN = document.querySelector("#add-videos");
function AddNewVideo () {
    const newVid = document.createElement("img");
    newVid.setAttribute("class", "video V")
    newVid.setAttribute("src", "./assets/Videos/videoPlaceholder.jpg"); 
    document.querySelector("#video-container").appendChild(newVid);
}
videoAddBTN.addEventListener("click", AddNewVideo);
// photo
const photoAddBTN = $("#add-photos");
function AddNewImage () {
    const newImg = document.createElement("img");
    newImg.setAttribute("class", "image I")
    newImg.src = "./assets/Images/imagePlaceholder.jpg"
    document.querySelector("#image-container").appendChild(newImg);
}
photoAddBTN.click (AddNewImage);
// Upload Photos & Videos
// Videos
let video = document.querySelector(".V0");
const videoInput = document.querySelector("#video-upload");

videoInput.onchange = function () {
    video.src = URL.createObjectURL(videoInput.files[0]);
};

// Photos    
let image = document.querySelector(".I0");
const imageInput = document.querySelector("#image-upload");

imageInput.onchange = function () {
    image.src = URL.createObjectURL(imageInput.files[0]);
};




