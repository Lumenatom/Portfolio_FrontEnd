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
const moveArrow = document.querySelector(".move_arrow");
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
moveArrow.addEventListener("click", slideLeft);
rightArrow.addEventListener("click", slideRight);

const imageBlock_2 = document.querySelector("#images-2");
const leftArrow_2 = document.querySelector("#left-arrow-2");
const moveArrow_2 = document.querySelector("#move_arrow-2");
const rightArrow_2 = document.querySelector("#right-arrow-2");
let offset_2 = 0;
let width_2;
const slideLeft_2 = () => {
    width_2 = imageBlock_2.offsetWidth;
    offset_2 = offset_2 + width_2;
    if (offset_2 >= width_2 * 2) {
        offset_2 = 0;
    }
    imageBlock_2.style.left = -offset_2 + "px";
}
const slideRight_2 = () => {
    width_2 = imageBlock_2.offsetWidth;
    offset_2 = offset_2 - width_2;
    if (offset_2 < 0) {
        offset_2 = width_2;
    }
    imageBlock_2.style.left = -offset_2 + "px";
}
leftArrow_2.addEventListener("click", slideLeft_2);
moveArrow_2.addEventListener("click", slideLeft_2);
rightArrow_2.addEventListener("click", slideRight_2);

const imageBlock_3 = document.querySelector("#images-3");
const leftArrow_3 = document.querySelector("#left-arrow-3");
const moveArrow_3 = document.querySelector("#move_arrow-3");
const rightArrow_3 = document.querySelector("#right-arrow-3");
let offset_3 = 0;
let width_3;
const slideLeft_3 = () => {
    width_3 = imageBlock_3.offsetWidth;
    offset_3 = offset_3 + width_3;
    if (offset_3 >= width_3 * 2) {
        offset_3 = 0;
    }
    imageBlock_3.style.left = -offset_3 + "px";
}
const slideRight_3 = () => {
    width_3 = imageBlock_3.offsetWidth;
    offset_3 = offset_3 - width_3;
    if (offset_3 < 0) {
        offset_3 = width_3;
    }
    imageBlock_3.style.left = -offset_3 + "px";
}
leftArrow_3.addEventListener("click", slideLeft_3);
moveArrow_3.addEventListener("click", slideLeft_3);
rightArrow_3.addEventListener("click", slideRight_3);
