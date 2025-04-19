let currentSlide = 0;
const slides = document.querySelectorAll('.slider .slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Initialize by showing the first slide
showSlide(currentSlide);


// Typing and Deleting Effect for Multiple Lines
let typingEffects = ['Precision.', 'Excellence.', 'Innovation.'];
let typingElements = [
    document.getElementById('typingEffect1'),
    document.getElementById('typingEffect2'),
    document.getElementById('typingEffect3')
];

let currentTextIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
let typingSpeed = 300;
let deletingSpeed = 200;

// Function to handle typing and deleting effect
function typeAndDelete() {
    for (let i = 0; i < typingElements.length; i++) {
        let element = typingElements[i];
        let text = typingEffects[i];

        if (isDeleting) {
            element.textContent = text.substring(0, currentCharIndex - 1);
            currentCharIndex--;
        } else {
            element.textContent = text.substring(0, currentCharIndex + 1);
            currentCharIndex++;
        }

        if (!isDeleting && currentCharIndex === text.length) {
            setTimeout(() => {
                isDeleting = true;
            }, 1000); // Wait before starting to delete
        } else if (isDeleting && currentCharIndex === 0) {
            isDeleting = false;
            currentTextIndex = (currentTextIndex + 1) % typingEffects.length; // Move to the next word
            currentCharIndex = 0; // Reset character index for the new word
        }
    }

    setTimeout(typeAndDelete, isDeleting ? deletingSpeed : typingSpeed);
}

// Start typing and deleting effect when the page loads
window.onload = () => {
    typeAndDelete();
};

let slideIndex = 0;
let slidesToShow = 4;
const carousel = document.querySelector(".carousel");
const slideItems = document.querySelectorAll(".machinery-item");
const totalItems = slideItems.length;

function updateSlidesToShow() {
    if (window.innerWidth <= 768) {
        slidesToShow = 1;
    } else if (window.innerWidth <= 1024) {
        slidesToShow = 2;
    } else {
        slidesToShow = 4;
    }
    moveSlide(0);
}

function moveSlide(step) {
    slideIndex += step;
    if (slideIndex < 0) slideIndex = totalItems - slidesToShow;
    if (slideIndex > totalItems - slidesToShow) slideIndex = 0;
    const offset = -(slideIndex * (100 / slidesToShow));
    carousel.style.transform = `translateX(${offset}%)`;
}

window.addEventListener("resize", updateSlidesToShow);
updateSlidesToShow();


document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const section = params.get("section"); // Get section name from URL

    if (section) {
        document.querySelectorAll(".service-section").forEach(sec => {
            sec.style.display = "none"; // Hide all sections
        });

        const targetSection = document.getElementById(section);
        if (targetSection) {
            targetSection.style.display = "block"; // Show only the selected section
        }
    }
});

    
   
document.addEventListener("DOMContentLoaded", function () {
    const dropdownMenu = document.querySelector(".dropdown-menu");

    // Ensure dropdown is hidden on page load
    dropdownMenu.style.display = "none";

    // Handle hover event to show/hide the dropdown properly
    const servicesMenu = document.querySelector(".dropdown");
    servicesMenu.addEventListener("mouseenter", () => {
        dropdownMenu.style.display = "block";
        setTimeout(() => {
            dropdownMenu.style.opacity = "1";
            dropdownMenu.style.visibility = "visible";
        }, 10);
    });

    servicesMenu.addEventListener("mouseleave", () => {
        dropdownMenu.style.opacity = "0";
        dropdownMenu.style.visibility = "hidden";
        setTimeout(() => {
            dropdownMenu.style.display = "none";
        }, 300);
    });
});

    