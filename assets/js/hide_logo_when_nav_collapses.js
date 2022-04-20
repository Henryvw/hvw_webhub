hideLogo = function() {
  var grabbedLogo = document.getElementById("logo-img");
  if (grabbedLogo.style.display === "none" && window.location.pathname != "/") {
    grabbedLogo.style.display = "block";
  }
  else {
    grabbedLogo.style.display = "none";
  }
}
