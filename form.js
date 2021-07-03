"use strict";
console.log("it works");
//Select the form fields and add the submit event listener

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector("form");
  const buttonSend = document.querySelector("button");
  const firstName = document.querySelector("#name");
  const lastName = document.querySelector("#lastname");
  const email = document.querySelector("#email");
  const message = document.querySelector("#message");

  //alerts
  const nameAlert = document.querySelector("#firstname + .alert");
  const lastNameAlert = document.querySelector("#lastname + .alert");
  const emailAlert = document.querySelector("#email + .alert");
  const messageAlert = document.querySelector("#message + .alert");

  let sender = {};

  //don't validate form in html
  contactForm.setAttribute("novalidate", true);

  buttonSend.onClick = (event) => {
    //name validation
    if (firstName == "") {
      event.preventDefault(); //to prevent the form from submitting once the submit button is clicked.
      nameAlert.innerHTML = "Please enter your first name.";
      nameAlert.classList.remove("hidden");
    } else {
      nameAlert.classList.add("hidden");
      sender.firstName.value = firstName.value;
    }

    //lastname validation
    if (lastName.value === "") {
      event.PreventDefault();
      lastNameAlert.innerHTML = "Please enter your lastname.";
      lastNameAlert.classList.remove("hidden");
    } else {
      lastNameAlert.classList.add("hidden");
      sender.lastName.value = lastName.value;
    }

    //email validation
    if (email.value === "") {
      event.PreventDefault();
      emailAlert.innerHTML = "Please enter your email.";
      emailAlert.classList.remove("hidden");
    } else if (
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(
        email.value
      ) !== true
    ) {
      eventPreventDefault();
      emailAlert.innerHTML = "Please enter a valid email.";
      emailAlert.classList.remove("hidden");
    } else {
      emailAlert.classList.add("hidden");
      sender.email = email.value;
    }

    //message vaildation
    if (message.value === "") {
      event.PreventDefault();
      messageAlert.innerHTML = "Please type a message.";
      messageAlert.classList.remove("hidden");
    } else {
      emailAlert.classList.add("hidden");
      sender.message = message.value;
    }
  };
});
