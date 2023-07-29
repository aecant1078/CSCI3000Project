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

function mouseover(e, over) {
    e.style.setProperty('box-shadow', over ? '#FC4C02 0px 0px 8px' : '#00838D 0px 0px 8px');
}

function expand(e) {
    switch(e) {
        case 1:
            document.getElementById('offense').style.setProperty('display', 'block');
            collapse(2);
            collapse(3);
            break;
        case 2:
            document.getElementById('defense').style.setProperty('display', 'block');
            collapse(1);
            collapse(3);
            break;
        case 3:
            document.getElementById('specialTeams').style.setProperty('display', 'block');
            collapse(1);
            collapse(2);
            break;
    }
}

function collapse(e) {
    switch(e) {
        case 1:
            document.getElementById('offense').style.setProperty('display', 'none');
            break;
        case 2:
            document.getElementById('defense').style.setProperty('display', 'none');
            break;
        case 3:
            document.getElementById('specialTeams').style.setProperty('display', 'none');
            break;
    }
}

function validateEmail(event) {
	var email = document.getElementById('email').value;
	var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,5}$/;
            
            if (!emailRegex.test(email)) {
                alert("Invalid email format! Please enter a valid email address.");
                event.preventDefault();
            }
}