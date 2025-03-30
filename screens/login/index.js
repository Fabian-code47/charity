const passwordEyeDiv = document.querySelector(".password-eye");

const passwordEyeInput = document.querySelector(".password-input");
const passwordEyeImg = document.querySelector(".password-eye-img");

const togglePasswordEye = () => {
  if (passwordEyeInput.type == "text") {
    passwordEyeInput.type = "password";
    passwordEyeImg.src = "../../images/show.png";
  } else {
    passwordEyeInput.type = "text";
    passwordEyeImg.src = "../../images/hide.png";
  }
};

passwordEyeDiv.addEventListener("click", togglePasswordEye);
