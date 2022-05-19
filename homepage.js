$(document).ready(function() {

    $(".reply-container").addClass("display-replies");
    var clicked = false;
    $(".reply-button").on("click", function() {
        console.log("clicked");
        clicked = !clicked;
        
        $(this).parents(".comment-box").toggleClass("extend")
        $(this).parents(".comment-box").find(".reply-container").toggleClass("display-replies");
    })

    var replyButtons = $(".reply-button");


    $(".reply-button").hover(function() {
        $(this).addClass("rotate-button");
    },
    function() {
        if(clicked == false) {
            $(this).removeClass("rotate-button");
        }
    })

    // Popup Modal Image Functions
    $(".posts-wrapper .popup-image span").on("click", () => {
        $(".posts-wrapper .popup-image").css("display", "none");
    })

    $(".posts-wrapper .post-image").on("click", function() {
        var imgsrc = $(this).attr('src');
        
        const img = new Image();

        var size;
        img.src = imgsrc;

        var caption = $(this).parents(".image-container").find(".caption").text();
        $(".posts-wrapper .popup-image .caption").text(caption);
        var artist = $(this).parents(".image-container").find(".artist").text();
        $(".posts-wrapper .popup-image .artist").text(artist);

        var pfpsrc = $(this).parents(".parent").find("#profile-picture img").attr('src');
        $(".popup-image #profile-picture img").attr('src', pfpsrc);

     

        console.log($(".posts-wrapper .popup-image .popup").css("width"));
        $(".posts-wrapper .popup-image").css("display", "block");
        $(".popup-image .popup").attr('src', imgsrc);
    })

    $("#profile-picture img").each(function() { 
        var imgsrc = $(this).attr('src');
        const img = new Image();
        console.log(imgsrc);
        img.src = imgsrc;
        if(img.width > img.height) {
            $(this).width = img.height;
            console.log(img.width);
            console.log(img.height);
        }
    })
})

function toggleUpload(){
    document.getElementById("uploadpopup").classList.toggle("active");
}

