var x = 0;
var images = [];
images[0] = "img/artwork.jpg";
images[1] = "img/artwork2.jpg";
images[2] = "img/artwork3.jpg";
images[3] = "img/artwork4.jpg";

function changeImage()
{

    var img = document.getElementById('art');
    img.src = images[x];
    x++;
    if(x >= images.length){
        x = 0;
    } 
    setTimeout("changeImage()", 2500);
}



$( document ).ready(function() {
    changeImage();
});