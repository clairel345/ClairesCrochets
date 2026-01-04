// Array to keep track of the current slide index for each product carousel
// The index corresponds to the product's position in the 'products' array (0-indexed)
let slideIndex = [];

// Function to initialize all slideshows on the page
function initializeSlideshows() {
    // Get all slideshow containers
    const slideshows = document.querySelectorAll('.slideshow-container');

    // Initialize slideIndex array with 1 for each slideshow (to show the first slide)
    slideshows.forEach((_, index) => {
        slideIndex[index] = 1;
        // Display the first slide for each slideshow
        showSlides(1, index);
    });
}

// Function to move slides forward or backward
// n: +1 for next, -1 for previous
// productCarouselIndex: The 0-indexed position of the product card in the grid
function plusSlides(n, productCarouselIndex) {
    showSlides(slideIndex[productCarouselIndex] += n, productCarouselIndex);
}

// Function to jump to a specific slide using the dots
// n: The slide number (1-indexed)
// productCarouselIndex: The 0-indexed position of the product card in the grid
function currentSlide(n, productCarouselIndex) {
    showSlides(slideIndex[productCarouselIndex] = n, productCarouselIndex);
}

// Core function to display a specific slide for a given product carousel
// n: The slide number to show (1-indexed)
// productCarouselIndex: The 0-indexed position of the product card in the grid
function showSlides(n, productCarouselIndex) {
    let i;
    const slides = document.querySelectorAll(`#slideshow-${productCarouselIndex + 1} .mySlides`);
    const dots = document.querySelectorAll(`#slideshow-${productCarouselIndex + 1} .dot`);

    // ONLY check if slides are found. Dots are optional for single-image products.
    if (slides.length === 0) {
        console.warn(`No slides found for slideshow-${productCarouselIndex + 1}`);
        return;
    }

    // Handle wrap-around for slides (only relevant if there's more than one slide)
    if (slides.length > 1) {
        if (n > slides.length) {
            slideIndex[productCarouselIndex] = 1; // Go back to first slide
        }
        if (n < 1) {
            slideIndex[productCarouselIndex] = slides.length; // Go to last slide
        }
    } else {
        // If there's only one slide, ensure its index is always 1
        slideIndex[productCarouselIndex] = 1;
    }

    // Hide all slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Deactivate all dot indicators (only if dots actually exist)
    if (dots.length > 0) {
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
    }

    // Display the current slide
    slides[slideIndex[productCarouselIndex] - 1].style.display = "block";

    // Activate its corresponding dot (only if dots actually exist)
    if (dots.length > 0) {
        dots[slideIndex[productCarouselIndex] - 1].className += " active";
    }
}

// Utility function for showing interest 
// Utility function for showing interest
function showInterest(myEmail, subject, bodyText) {
    console.log(`User is interested in: ${subject}`); // Changed this line

    // Encode the subject and body to handle special characters correctly in the URL
    const encodedSubject = encodeURIComponent(subject);
    const encodedBodyText = encodeURIComponent(bodyText);
    
    const mailtoUrl = `mailto:${myEmail}?subject=${encodedSubject}&body=${encodedBodyText}`;
    window.location.href = mailtoUrl;
}

// Utility function for custom orders (from your original code)
function contactForCustomOrder(myEmail, subject, bodyText) {
    console.log("User wants to discuss a custom order.");

    // Encode the subject and body to handle special characters correctly in the URL
    const encodedSubject = encodeURIComponent(subject);
    const encodedBodyText = encodeURIComponent(bodyText);
    
    const mailtoUrl = `mailto:${myEmail}?subject=${encodedSubject}&body=${encodedBodyText}`;
    window.location.href = mailtoUrl;
    
    
}

// Initialize slideshows when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeSlideshows);
