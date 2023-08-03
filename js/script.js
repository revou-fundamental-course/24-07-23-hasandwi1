// Start Auto Slide
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("autoSlide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
// End Auto Slide

// Start Form Validation
function formValidation() {
    // Mengambil nilai dari input field dan dropdown
    const yname = document.getElementById("yname").value;
    const email = document.getElementById("email").value;
    const interest = document.getElementById("interest").value;
    
    // Validasi nama
    if (yname.trim().length < 2 || yname.trim().length > 20) {
        document.getElementById("error-message").innerText = "Name length should be between 2 and 20 characters.";
        return false;
    } else {
        document.getElementById("error-message").innerText = "";
    }

    // Validasi email
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(emailPattern)) {
        document.getElementById("error-message").innerText = "Please enter a valid email address.";
        return false;
    } else {
        document.getElementById("error-message").innerText = "";
    }

    // Validasi dropdown
    if (interest === "") {
        document.getElementById("error-message").innerText = "Please select your interest.";
        return false;
    } else {
        document.getElementById("error-message").innerText = "";
    }

    // Jika semua validasi berhasil, lanjutkan dengan pengiriman formulir
    alert("Form submitted successfully!"); // Ganti alert dengan aksi pengiriman formulir sesuai kebutuhan
    return true;
}
// End Form Validation

// Back To Top
// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}