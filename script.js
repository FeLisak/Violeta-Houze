//HEADER - SECTION

let menuToggle = document.querySelector('.menuToggle');
let header = document.querySelector('header');
menuToggle.onclick = function () {
    header.classList.toggle('active')
};

let menuToggle2 = document.querySelector('.menuToggle2');
menuToggle2.onclick = function () {
    header.classList.toggle('active')
};

// HEADER - SCROLL

window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

window.addEventListener("scroll", function () {
    var pt = document.getElementById("pt");
    var en = document.getElementById("en");
    var check = document.getElementById("check");


    if (window.scrollY > 1) {
        pt.style.top = "25px";
        en.style.top = "25px";
        check.style.top = "25px";
    } else if (window.screen.width >= 1200) {
        pt.style.top = "40px";
        en.style.top = "40px";
        check.style.top = "40px";
    }
})

// MUTE & UNMUTE - PORTFOLIO VIDEOS

var video1 = document.getElementById("video1")
var video2 = document.getElementById("video2")
var video3 = document.getElementById("video3")
var video4 = document.getElementById("video4")
var video5 = document.getElementById("video5")
var video6 = document.getElementById("video6")
var video7 = document.getElementById("video7")
var video8 = document.getElementById("video8")

function videoOne() {

    var a1 = document.getElementById("video1a")

    if (video1.muted) {
        video1.muted = false;
        a1.innerHTML = '<i class="fa fa-volume-up" aria-hidden="true"></i>';
    } else {
        video1.muted = true;
        a1.innerHTML = '<i class="fa fa-volume-off" aria-hidden="true"></i>';
    }

}

function videoTwo() {

    var a2 = document.getElementById("video2a")

    if (video2.muted) {
        video2.muted = false;
        a2.innerHTML = '<i class="fa fa-volume-up" aria-hidden="true"></i>'
    } else {
        video2.muted = true;
        a2.innerHTML = '<i class="fa fa-volume-off" aria-hidden="true"></i>';
    }

}

function videoThree() {

    var a3 = document.getElementById("video3a")

    if (video3.muted) {
        video3.muted = false;
        a3.innerHTML = '<i class="fa fa-volume-up" aria-hidden="true"></i>';
    } else {
        video3.muted = true;
        a3.innerHTML = '<i class="fa fa-volume-off" aria-hidden="true"></i>';
    }

}

function videoFour() {

    var a4 = document.getElementById("video4a")

    if (video4.muted) {
        video4.muted = false;
        a4.innerHTML = '<i class="fa fa-volume-up" aria-hidden="true"></i>';
    } else {
        video4.muted = true;
        a4.innerHTML = '<i class="fa fa-volume-off" aria-hidden="true"></i>';
    }

}

function videoFive() {

    var a5 = document.getElementById("video5a")

    if (video5.muted) {
        video5.muted = false;
        a5.innerHTML = '<i class="fa fa-volume-up" aria-hidden="true"></i>';
    } else {
        video5.muted = true;
        a5.innerHTML = '<i class="fa fa-volume-off" aria-hidden="true"></i>';
    }

}

function videoSix() {

    var a6 = document.getElementById("video6a")

    if (video6.muted) {
        video6.muted = false;
        a6.innerHTML = '<i class="fa fa-volume-up" aria-hidden="true"></i>';
    } else {
        video6.muted = true;
        a6.innerHTML = '<i class="fa fa-volume-off" aria-hidden="true"></i>';
    }

}

function videoSeven() {

    var a7 = document.getElementById("video7a")

    if (video7.muted) {
        video7.muted = false;
        a7.innerHTML = '<i class="fa fa-volume-up" aria-hidden="true"></i>';
    } else {
        video7.muted = true;
        a7.innerHTML = '<i class="fa fa-volume-off" aria-hidden="true"></i>';
    }

}

function videoEight() {

    var a8 = document.getElementById("video8a")

    if (video8.muted) {
        video8.muted = false;
        a8.innerHTML = '<i class="fa fa-volume-up" aria-hidden="true"></i>';
    } else {
        video8.muted = true;
        a8.innerHTML = '<i class="fa fa-volume-off" aria-hidden="true"></i>';
    }

}

// BACK TO HOME FIXED BUTTON

let sec = document.querySelectorAll('section');
let links = document.querySelectorAll('ul li a');

window.onscroll = () => {
    sec.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 60;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            links.forEach(link => {
                link.classList.remove('active');
                document.querySelector('ul li a[href*=' + id + ']').classList.add('active');
            })
        }
    })
};

const btn = document.getElementById("btnTop")

btn.addEventListener("click", function () {
    window.scrollTo(0, 0)
})

document.addEventListener('scroll', ocultar)

function ocultar() {
    if (window.scrollY > 10) {
        btn.style.display = "flex"
    } else {
        btn.style.display = "none"
    }
}

ocultar()

function aparecerTextoSubir() {
    if (window.screen.width >= 900) {
        setTimeout(() => {
            document.getElementById("btnTop").innerHTML = '<i class="fa fa-arrow-up" aria-hidden="true"></i> &nbsp; Home';
        }, 200)
    };
}
function resetSubir() {
    setTimeout(() => {
        document.getElementById("btnTop").innerHTML = '<i class="fa fa-arrow-up" aria-hidden="true"></i>';
    }, 200)
}

// CONTACT PAGE - PORTUGUESE

function whatsappPt() {
    var namePt = document.getElementById('namePt').value;
    var lastnamePt = document.getElementById('lastnamePt').value;
    var emailPt = document.getElementById('emailPt').value;
    var phonePt = document.getElementById('phonePt').value;
    var messagePt = document.getElementById('messagePt').value;

    var wppurlPt = "https://api.whatsapp.com/send?phone=5511993004410&text=*MINHAS INFORMAÇÕES:* %0a*Nome:* "+ namePt + " " + lastnamePt +"%0a" + "*E-Mail:* "+ emailPt +"%0a" + "*Telefone:* "+ phonePt +"%0a" + "*Mensagem:* "+ messagePt +"%0a";

    window.open(wppurlPt, "_blank").focus();
}

// CONTACT PAGE - ENGLISH

function whatsappEn() {
    var nameEn = document.getElementById('nameEn').value;
    var lastnameEn = document.getElementById('lastnameEn').value;
    var emailEn = document.getElementById('emailEn').value;
    var phoneEn = document.getElementById('phoneEn').value;
    var messageEn = document.getElementById('messageEn').value;

    var wppurlEn = "https://api.whatsapp.com/send?phone=5511993004410&text=*MY INFORMATIONS:* %0a*Name:* "+ nameEn + " " + lastnameEn +"%0a" + "*E-Mail:* "+ emailEn +"%0a" + "*Phone Number:* "+ phoneEn +"%0a" + "*Message:* "+ messageEn +"%0a";

    window.open(wppurlEn, "_blank").focus();
}

// FIXED WHATSAPP BUTTON - Portuguese

const btnWppPt = document.getElementById("btnWppPt")

document.addEventListener('scroll', ocultarWppPt)

function ocultarWppPt() {
    if (window.scrollY > 10) {
        btnWppPt.style.bottom = "76px"
    } else {
        btnWppPt.style.bottom = "15px"
    }
}

ocultarWppPt()

function aparecerTextoWppPt() {
    if (window.screen.width >= 900) {
        setTimeout(() => {
            document.getElementById("btnWppPt").innerHTML = '<i class="fa fa-whatsapp" aria-hidden="true"></i> &nbsp; Whatsapp';
        }, 200)
    };
}

function resetWppPt() {
    setTimeout(() => {
        document.getElementById("btnWppPt").innerHTML = '<i class="fa fa-whatsapp" aria-hidden="true"></i>';
    }, 200)
}

btnWppPt.addEventListener("click", function () {
    setTimeout(() => {
        window.open("https://api.whatsapp.com/send?phone=5511993004410&text=Olá%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20seu%20servi%C3%A7o.", '_blank')
    }, 300);
})

// FIXED WHATSAPP BUTTON - English

const btnWppEn = document.getElementById("btnWppEn")

document.addEventListener('scroll', ocultarWppEn)

function ocultarWppEn() {
    if (window.scrollY > 10) {
        btnWppEn.style.bottom = "76px"
    } else {
        btnWppEn.style.bottom = "15px"
    }
}

ocultarWppEn()

function aparecerTextoWppEn() {
    if (window.screen.width >= 900) {
        setTimeout(() => {
            document.getElementById("btnWppEn").innerHTML = '<i class="fa fa-whatsapp" aria-hidden="true"></i> &nbsp; Whatsapp';
        }, 200)
    };
}

function resetWppEn() {
    setTimeout(() => {
        document.getElementById("btnWppEn").innerHTML = '<i class="fa fa-whatsapp" aria-hidden="true"></i>';
    }, 200)
}

btnWppEn.addEventListener("click", function () {
    setTimeout(() => {
        window.open("https://api.whatsapp.com/send?phone=5511993004410&text=Hello%2C%20I%20would%20like%20more%20information%20about%20your%20service.", '_blank')
    }, 300);
})