function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        var time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("Time's up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}

let slideIndex = 1;                             // Initialize slideIndex to 1
showSlides(slideIndex);                         // Display the first slide

// Next/previous controls
function plusSlides(n) {                        // Function to change slides
  showSlides(slideIndex += n);                  // Update slideIndex and show the slide
}

// Thumbnail image controls
function currentSlide(n) {                      // Function to set the current slide   
  showSlides(slideIndex = n);                   // Update slideIndex and show the slide
}

function showSlides(n) {                                        // Function to display the slide
  let i;                                                        // Declare variable i for loop  
  let slides = document.getElementsByClassName("mySlides");     // Get all elements with class "mySlides"
  let dots = document.getElementsByClassName("dot");            // Get all elements with class "dot"
  if (n > slides.length) {slideIndex = 1}                       // Wrap around to first slide if n exceeds number of slides
  if (n < 1) {slideIndex = slides.length}                       // Wrap around to last slide if n is less than 1
  for (i = 0; i < slides.length; i++) {                         // Loop through all slides  
    slides[i].style.display = "none";                           // Hide each slide  
  }
  for (i = 0; i < dots.length; i++) {                               // Loop through all dots    
    dots[i].className = dots[i].className.replace(" active", "");   
  }
  slides[slideIndex-1].style.display = "block";                     // Show the current slide
  dots[slideIndex-1].className += " active";                        // Highlight the current dot
}