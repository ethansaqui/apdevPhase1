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

        size = 700;
        if(img.height > img.width) 
            size = 600;

        $(window).on('resize', () => {
            if(window.matchMedia('(max-width:768px)').matches) {
                $(".posts-wrapper .popup-image .popup").css("width", 400);
            }
            else {
                $(".posts-wrapper .popup-image .popup").css("width", size);
            }
        })

        var caption = $(this).parents(".image-container").find(".caption").text();
        $(".posts-wrapper .popup-image .caption").text(caption);
        var artist = $(this).parents(".image-container").find(".artist").text();
        $(".posts-wrapper .popup-image .artist").text(artist);
        
        $(".posts-wrapper .popup-image .popup").css("width", size);
        console.log(size);
        console.log($(".posts-wrapper .popup-image .popup").css("width"));
        $(".posts-wrapper .popup-image").css("display", "block");
        $(".popup-image .popup").attr('src', imgsrc);
    })

    $("#profile-picture img").each(function() { //I LEFT ON THIS FUNCTION, NEED TO MAKE IT SO THAT ALL PROFILE PICS ARE PERFECT CIRCLES
        var imgsrc = $(this).attr('src');
        const img = new Image();
        console.log(imgsrc);
        img.src = imgsrc;
        if(img.width > img.height) {
            img.width = img.height;
            console.log(img.width);
            console.log(img.height);
        }
    })
})

function toggleUpload(){
    document.getElementById("uploadpopup").classList.toggle("active");
}

