flag = 0


function controller(x) {
    flag = flag + x
    slideShow(flag)


}

slideShow(flag)

function slideShow(num) {
    let slides = document.getElementsByClassName('slide')

    if (num < 0) {
       flag = slides.length-1
       num =  slides.length-1
    }

    if (num == slides.length) {
        flag = 0
        num = 0
    }

    for (let c of slides) {
        c.style.display = "none"
    }

    slides[num].style.display = "block"

}

