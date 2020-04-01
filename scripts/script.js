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
});

$('#skills-button').click(function() {
  document.getElementById("ifrm").src = "./skills.html";
}); 

$('#education-button').click(function() {
  document.getElementById("ifrm").src = "./education.html";
});

$('#contact-button').click(function() {
  document.getElementById("ifrm").src = "./contact.html";
});







