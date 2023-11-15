// Change Section --SMALL WEBPAGE BUTTON-- (Photo - Video)
let arrowButton = $(".arrow-button")
let image = $(".select-section");
let movingButton = true;

let photoSection = $("#photo-Div");
let videoSection = $("#video-Div");

let webSize = window.matchMedia("(max-width: 650px)");

photoSection.slideUp();

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

// Upload Images
let imageUpload = $(".image");
let videoUpload = $(".video");


        // Upload Photos
        document.querySelector("#add-media-Div > label").setAttribute("for","image-upload");
        document.querySelector("#image-upload").setAttribute("id","image-upload");

        let imageInput = $(".image-upload");
        
        imageInput.onchange = function () {
            console.log(imageUpload.src = URL.createObjectURL(imageInput.files[0]));
            imageUpload.src = URL.createObjectURL(imageInput.files[0]);
        }

        // Upload Videos
        document.querySelector("#add-media-Div > label").setAttribute("for","video-upload");
        document.querySelector("#image-upload").setAttribute("id","video-upload");

        let videoInput = $(".video-upload");
        
        videoInput.onchange = function () {
            console.log(videoUpload.src = URL.createObjectURL(videoInput.files[0]));
            videoUpload.src = URL.createObjectURL(videoInput.files[0]);
        }


