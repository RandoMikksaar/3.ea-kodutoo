function add_google_logo() {
    var src = "images/";
    show_image(images/);
}


function show_image(src, width, height) {
    var img = document.createElement("img");
    img.src = src;
    //img.width = width;
    //img.height = height;
     // img.alt = alt;
    document.body.appendChild(img);
}