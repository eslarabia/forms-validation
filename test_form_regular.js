let form = document.querySelector(".register");
let phone = document.querySelector("#phone");
let userName = document.querySelector("#user");
let passwordName = document.querySelector("#password");
let emailName = document.querySelector("#email");
let AgainNAme = document.querySelector("#PasswordAgain");

let iconShow = document.querySelectorAll(".par .show");
let iconHidden = document.querySelectorAll(".par .hidden");
console.log(iconShow);
console.log(iconHidden);

let icons = document.querySelectorAll(".DivUser ion-icon");

let myFunc = function () {
  form.addEventListener("submit", function (ele) {
    ele.preventDefault();
    let number = false;
    let user = false;
    let password = false;
    let email = false;
    let Again = false;

    let userInput = document.querySelector("#user").value;
    let userRe = /^[a-z]{5,}\s[a-z]{5,}(?!-)(?!_)(?!\d+)(?!@)/ig;
    let userInputValid = userRe.test(userInput);

    console.log(userInputValid);

    if (userInput.value !== "" && userInputValid === true && user === false) {
      user = true;
      userName.classList.remove("active");
      userName.classList.add("true");
      icons[0].classList.add("core");
      icons[1].classList.remove("active");
    }

    if (userInputValid === false && user === false) {
      userName.classList.add("active");
      userName.classList.remove("true");
      icons[0].classList.remove("core");
      icons[1].classList.add("active");
    }

    let phoneInput = document.querySelector("#phone").value;
    let phoneInputRe = /\(\d{4}\)\s\d{3}-\d{4}(?!@)(?!_)/; // (1234) 456-8910
    let phoneInputValid = phoneInputRe.test(phoneInput);

    if (phoneInput.value !== "" && phoneInputValid === true && number === false) {
      number = true;
      phone.classList.remove("active");
      phone.classList.add("true");
      icons[2].classList.add("core");
      icons[3].classList.remove("active");
    }

    if (number === false && phoneInputValid === false) {
      phone.classList.add("active");
      phone.classList.remove("true");
      icons[2].classList.remove("core");
      icons[3].classList.add("active");
    }

    let emailInput = document.querySelector("#email").value;
    let emailInputRe = /(^[a-z_-]+@\d+[a-z]+\.[a-zA-Z]{2,}$|^[a-z_-]+\d+@[a-z]+\.[a-zA-Z]{2,}$)/ig;  // eslamrabea@12gmail.com  || eslamrabea22@gmail.com
    let emailInputReValid = emailInputRe.test(emailInput);

    if (emailInput.value !== "" && emailInputReValid === true && email === false) {
      email = true;
      emailName.classList.remove("active");
      emailName.classList.add("true");
      icons[4].classList.add("core");
      icons[5].classList.remove("active");
    }

    if (emailInputReValid === false && email === false) {
      emailName.classList.add("active");
      emailName.classList.remove("true");
      icons[4].classList.remove("core");
      icons[5].classList.add("active");
    }

    let passwordInput = document.querySelector("#password").value;
    let passwordInputRe = /^[0-9]{1,16}(?![a-zA-Z_-])(?!\w+)/ig;
    let passwordInputReValid = passwordInputRe.test(passwordInput);

    if (passwordInput.value !== "" && passwordInputReValid === true && password === false) {
      password = true;
      passwordName.classList.remove("active");
      passwordName.classList.add("true");
    }

    if (passwordInputReValid === false && password === false) {
      passwordName.classList.add("active");
      passwordName.classList.remove("true");
    }

    let AgainInput = document.querySelector("#PasswordAgain").value;
    let AgainRe = /^[0-9]{1,16}(?![a-zA-Z_-])(?!\w+)/ig;
    let AgainReValid = AgainRe.test(AgainInput);

    if (AgainInput.value !== "" && AgainReValid === true && Again === false) {
      Again = true;
      AgainNAme.classList.remove("active");
      AgainNAme.classList.add("true");
    }

    if (AgainReValid === false && Again === false) {
      AgainNAme.classList.add("active");
      AgainNAme.classList.remove("true");
    }

    if (AgainNAme.value !== passwordName.value && AgainNAme !== '' && passwordName !== '') {
      AgainNAme.classList.add("active");
      AgainNAme.classList.remove("true");
    }

    if (AgainNAme.value === passwordName.value && AgainNAme === '' && passwordName === '') {
      AgainNAme.classList.remove("active");
      AgainNAme.classList.add("true");
    }
  });

  iconHidden[0].addEventListener("click", function () {
    iconShow[0].classList.add("active");
    iconHidden[0].classList.add("active");
    if (passwordName.getAttribute("type") === "password") {
      passwordName.removeAttribute("type");
      passwordName.setAttribute("type", "text");
    }
  });

  iconShow[0].addEventListener("click", function () {
    iconShow[0].classList.remove("active");
    iconHidden[0].classList.remove("active");
    passwordName.removeAttribute("type");
    passwordName.setAttribute("type", "password");
  });

  iconHidden[1].addEventListener("click", function () {
    iconShow[1].classList.add("active");
    iconHidden[1].classList.add("active");
    if (AgainNAme.getAttribute("type") === "password") {
      AgainNAme.removeAttribute("type");
      AgainNAme.setAttribute("type", "text");
    }
  });

  iconShow[1].addEventListener("click", function () {
    iconShow[1].classList.remove("active");
    iconHidden[1].classList.remove("active");
    AgainNAme.removeAttribute("type");
    AgainNAme.setAttribute("type", "password");
  });
};

myFunc();