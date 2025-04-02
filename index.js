var colorbox = document.getElementById('color-box')
var changecolorbtn = document.getElementById('change-color-btn')



function getRandomColor(){
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


changecolorbtn.addEventListener("click", function () {
    colorbox.style.backgroundColor = getRandomColor();
});