var image, imageText, button;

function init(){
    image = document.getElementById("image");
    imageText = document.getElementById("imageText");
    button = document.querySelector(".button");
    button.addEventListener("click", showImage)
}

function showImage(){
    if(imageText.className == "hidden"){
        imageText.classList.remove("hidden");
        image.parentElement.classList.remove("hidden");
    }
    else{
        imageText.classList.add("hidden");
        image.parentElement.classList.add("hidden");
    }
}

init();