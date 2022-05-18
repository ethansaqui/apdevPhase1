function toggleUpload(){
    document.getElementById("uploadpopup").classList.toggle("active");
}
function DeleteWork(clicked_id){
    var UsedId = clicked_id;
    console.log(UsedId)
    switch(UsedId)
    {
        case 'Delete1':
            document.getElementById("Art1").src = "Unavailable.png";
            document.getElementById("Art1").style.objectFit = "contain";
            break;
        case 'Delete2':
            document.getElementById("Art2").src = "Unavailable.png";
            document.getElementById("Art2").style.objectFit = "contain";
            break;
        case 'Delete3':
            document.getElementById("Art3").src = "Unavailable.png";
            document.getElementById("Art3").style.objectFit = "contain";
            break;
        case 'Delete4':
            document.getElementById("Art4").src = "Unavailable.png";
            document.getElementById("Art4").style.objectFit = "contain";
            break;
         case 'Delete5':
            document.getElementById("Art5").src = "Unavailable.png";
            document.getElementById("Art5").style.objectFit = "contain";
            break;
        default:
            console.log('Error');
            break;
    }
}
function Follow(){
    document.getElementById("followercount").innerHTML = "1 ";
}