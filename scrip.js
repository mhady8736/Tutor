const openRegister = document.getElementById("openRegister");
const closeRegister = document.getElementById("closeRegister");
const registerModal = document.getElementById("registerModal");
const registerForm = document.getElementById("registerForm");

openRegister.addEventListener("click", (event) => {
  event.preventDefault();
  registerModal.classList.add("show");
});

closeRegister.addEventListener("click", () => {
  registerModal.classList.remove("show");
});

registerModal.addEventListener("click", (event) => {
  if (event.target === registerModal) {
    registerModal.classList.remove("show");
  }
});

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("Your registration request was received!");
  registerForm.reset();
  registerModal.classList.remove("show");
});

const getStartedButton = document.querySelectorAll(".btn_yellow");
getStartedButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    alert("Welcome! Let`s find the perfect tutor for you.");
  });
});

const linkPlay = document.querySelector(".link_play");
linkPlay.addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector(".benefits").scrollIntoView({ behavior: "smooth" });
});
