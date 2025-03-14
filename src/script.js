const eyeToggle = document.querySelector("#eyeToggle");
const eyeToggleConfirm = document.querySelector("#eyeToggleConfirm");
const password = document.querySelector("#password");
const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".success-modal");
const dashboardBtn = document.querySelector("#dashboard-btn");
const OtpInput = document.querySelectorAll(".zamella-input--OTP");
const postModal = document.querySelector("#postModal");

const postTrigger = document.querySelector("#postTrigger");

console.log(OtpInput);

eyeToggle?.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    eyeToggle.classList.remove("fa-eye");
    eyeToggle.classList.add("fa-eye-slash");
  } else {
    password.type = "password";
    eyeToggle.classList.remove("fa-eye-slash");
    eyeToggle.classList.add("fa-eye");
  }
});

OtpInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    if (input.value.length > 1) {
      input.value = input.value[0];
    }
    if (input.value) {
      input.classList.add("ring-2", "ring-zamella-primary");
    } else {
      input.classList.remove("ring-2", "ring-zamella-primary");
    }
  });
});

postTrigger.addEventListener("click", () => {
  if (
    overlay.classList.contains("hidden") &&
    postModal.classList.contains("hidden")
  ) {
    overlay.classList.remove("hidden");
    postModal.classList.replace("hidden", "flex");
  }
});

overlay.addEventListener("click", () => {
  overlay.classList.add("hidden");
  postModal.classList.add("hidden");
});

dashboardBtn?.addEventListener("click", () => {
  console.log(modal, overlay);
  // overlay.classList.add("hidden");
  // modal.classList.add("hidden");
});
