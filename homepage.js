$(document).ready(function() {
    // Comment Functions
    const user = "Anya";
    
    // Hide Show Replies for comments without replies
    $(".comment").each(function (){
        let c = $(this);
        
        var containers = c.next(".comment-container");
        if (containers.length == 0) {
            c.find(".show-replies").css("display", "none");
        }
    })

    // Give only Anya the power to delete and edit her comments
    $(".comment-text h3").each(function () {
        var cText = $(this);
        if(cText.text() != user) {
            console.log("in")
            console.log(cText.parent());
            cText.parents(".comment").find(".user").css("display", "none")
        }
    })

    
    var replyHidden = false;
    // change all show reply to hide reply
    $(".show-replies").text("Hide Replies")

    $(".show-replies").on("click", function() {
        var reply = $(this).closest(".comment").next(".comment-container");
        if(replyHidden) {
            reply.css("display", "block");
            replyHidden = false;
            $(this).text("Hide Replies");
            return;
        }
        reply.css("display", "none");
        replyHidden = true;
        $(this).text("Show Replies");
    })

    // Popup Modal Image Functions
    $(".posts-wrapper .popup-image span").on("click", () => {
        $(".posts-wrapper .popup-image").css("display", "none");
    })

    $(".posts-wrapper .post-image").on("click", function() { // Update the Image, Caption, and Artist of a Modal
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

        $(".posts-wrapper .popup-image").css("display", "block");
        $(".popup-image .popup").attr('src', imgsrc);
    })

    $("#profile-picture img").each(function() { 
        var imgsrc = $(this).attr('src');
        const img = new Image();
        img.src = imgsrc;
        if(img.width > img.height) {
            $(this).width = img.height;
        }
    })
})

function toggleUpload(){
    document.getElementById("uploadpopup").classList.toggle("active");
}



