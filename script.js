document.addEventListener("DOMContentLoaded", function () {
  const explorebtn = document.getElementById("explore-btn");
  const signupbtn = document.getElementById("signup-btn");

  explorebtn.addEventListener("click", function () {
    alert("Explore classes clicked");
  });
  signupbtn.addEventListener("click", function () {
    alert("sign up button clicked");
  });
});
