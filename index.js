const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

const imageBlock = document.querySelector(".images");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
let offset = 0;
let width;
const slideLeft = () => {
    width = imageBlock.offsetWidth;
    offset = offset + width;
    if (offset >= width * 2) {
        offset = 0;
    }
    imageBlock.style.left = -offset + "px";
}
const slideRight = () => {
    width = imageBlock.offsetWidth;
    offset = offset - width;
    if (offset < 0) {
        offset = width;
    }
    imageBlock.style.left = -offset + "px";
}


leftArrow.addEventListener("click", slideLeft);
rightArrow.addEventListener("click", slideRight);