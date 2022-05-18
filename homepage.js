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
})

function toggleUpload(){
    document.getElementById("uploadpopup").classList.toggle("active");
}