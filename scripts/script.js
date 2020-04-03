// Test if jQuery is loaded
// window.onload = function() {
//   if (window.jQuery) {  
//       // jQuery is loaded  
//       alert("Yeah!");
//   } else {
//       // jQuery is not loaded
//       alert("Doesn't Work");
//   }
// }



// $("nav").on( "click", "a", function() {
//   let href = $(this).attr('href');
//   console.log(href);
// })


$('#experience-button').click(function() {
  document.getElementById("ifrm").src = "./experience.html";
  // document.getElementById("ifrm").style.height = 1475 + "px";
});

$('#skills-button').click(function() {
  document.getElementById("ifrm").src = "./skills.html";
  // document.getElementById("ifrm").style.height = 648.97 + "px";
}); 

$('#education-button').click(function() {
  document.getElementById("ifrm").src = "./education.html";
  // document.getElementById("ifrm").style.height = 570.23 + "px";
});

$('#contact-button').click(function() {
  document.getElementById("ifrm").src = "./contact.html";
  // document.getElementById("ifrm").style.height = 570 + "px";
});

// let ifrm = document.getElementById("ifrm");

// ifrm.onload = function() {
//   ifrm.style.height = ifrm.contentWindow.document.body.scrollHeight + 'px';
//   ifrm.style.height = 1475 + 'px';
//   console.log('himashi')
// }

// document.getElementById('ifrm').onload = function() {
//   put your awesome code here
//   console.log('himashi')
// }


console.log(window.matchMedia("(max-width: 700px)"))

let ifrm = document.getElementById("ifrm")
if ($( window ).width() < 600) {
  
  $('#experience-button').click(function() {
    document.getElementById("ifrm").src = "./experience.html";
    document.getElementById("ifrm").style.height = 1511 + "px";
  });

  $('#skills-button').click(function() {
    document.getElementById("ifrm").src = "./skills.html";
    document.getElementById("ifrm").style.height = 648.97 + "px";
  }); 
  
  $('#education-button').click(function() {
    document.getElementById("ifrm").src = "./education.html";
    document.getElementById("ifrm").style.height = 570.23 + "px";
  });
  
  $('#contact-button').click(function() {
    document.getElementById("ifrm").src = "./contact.html";
    document.getElementById("ifrm").style.height = 570 + "px";
  });

}

// Scrolling

if ($( window ).width() < 600) {
  $("#skills-button").click(function() {
    var position = $("#ifrm").offset().top; //calculates how far the top of the Carousel is from the top of the page
    $('body, html').animate({ scrollTop: position }, 700); });
  
  $("#education-button").click(function() {
    var position = $("#ifrm").offset().top; //calculates how far the top of the Carousel is from the top of the page
    $('body, html').animate({ scrollTop: position }, 700); });
  
  $("#contact-button").click(function() {
    var position = $("#ifrm").offset().top; //calculates how far the top of the Carousel is from the top of the page
    $('body, html').animate({ scrollTop: position }, 700); });
}








