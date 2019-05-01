//nav
function openNav() {
    var nav = document.getElementById("nav");
    nav.classList.toggle("navContent");
}
function closeNav() {
    var nav = document.getElementById("nav");
    nav.classList.toggle("navContent");
}
//product animation
window.onscroll = yHandler;
function yHandler() {

    var wh = window.innerHeight;
    var h = window.pageYOffset;
    var newHeight = h + wh;

    if (newHeight > 1450) {
        document.getElementById("product-container").style.display = "block";
    }
    console.log(newHeight);
}
console.log("hello world");

