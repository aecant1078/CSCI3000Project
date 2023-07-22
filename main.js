//automatic slideshow for team photos
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slidePhoto");
    let dots = document.getElementsByClassName("dot");

    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); //remove the active class from all dots
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 4000);
}

function expand(e) {
    if (e == 1) {
        document.getElementById('offense').style.setProperty('display', 'block')
    }
    else if (e == 2) {
        document.getElementById('defense').style.setProperty('display', 'block')
    }
    else if (e == 3) {
        document.getElementById('specialTeams').style.setProperty('display', 'block')
    }
}

function collapse(e) {
    if (e == 1) {
        document.getElementById('offense').style.setProperty('display', 'none')
    }
    else if (e == 2) {
        document.getElementById('defense').style.setProperty('display', 'none')
    }
    else if (e == 3) {
        document.getElementById('specialTeams').style.setProperty('display', 'none')
    }
}