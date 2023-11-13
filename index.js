// BUTTON CLICK
$("#add-media-Div").click (function () {

    let activeButton = $("#add-media");
    let textFlash = $(".btn");
    
    activeButton.addClass("btn-shadow");
    textFlash.addClass("text-flash");

    setTimeout(function() {
        activeButton.removeClass("btn-shadow");
        textFlash.removeClass("text-flash");
    }, 200);
});

// Change Section (Photo - Video)
document.getElementById("select-section").addEventListener("click", function() {
    let sectionSelectButton = document.getElementById("select-section");

    sectionSelectButton.classList.add("move-left");
    sectionSelectButton.classList.remove("move-right");
});