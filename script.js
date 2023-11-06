
function Seven() {
    var x = document.getElementById('7');
    if (x.classList.contains('seven-style')) {
        x.classList.remove('seven-style');
        x.classList.add('eight-style');
    } else {
        x.classList.remove('eight-style');
        x.classList.add('seven-style');
    }
}

function Eight() {
    var elements = document.querySelectorAll("p.eight");
    elements.forEach(function(element) {
        if (element.classList.contains('eight-style')) {
            element.classList.remove('eight-style');
            element.classList.add('seven-style');
        } else {
            element.classList.remove('seven-style');
            element.classList.add('eight-style');
        }
    });
}

function addImage() {
    var img = document.createElement("img");
    img.src="Chernivtsi2.jpg";
    img.id = "city-image";
    var imageContainer = document.getElementById("image-container");
    imageContainer.appendChild(img);
}

function increaseImageSize() {
    var img = document.getElementById("city-image");
    img.style.width = (img.clientWidth * 2) + "px";
    img.style.height = (img.clientHeight * 2) + "px";
}

function decreaseImageSize() {
    var img = document.getElementById("city-image");
    img.style.width = (img.clientWidth / 2) + "px";
    img.style.height = (img.clientHeight / 2) + "px";
}

function deleteImage() {
    var img = document.getElementById("city-image");
    img.remove();
}




