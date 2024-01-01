document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
  const nav = document.querySelector("nav");

  mobileMenuIcon.addEventListener("click", function () {
    nav.classList.toggle("show");
  });
});

function sendEmail() {
  var name = document.forms["myForm"]["name"].value;
  var email = document.forms["myForm"]["email"].value;
  var message = document.forms["myForm"]["message"].value;

  var mailtoLink =
    "mailto:h.m.anisshakil786@gmail.com?subject=Message from " +
    name +
    "&body=" +
    message +
    "%0D%0A%0D%0AContact Email: " +
    email;

  window.location.href = mailtoLink;
}
