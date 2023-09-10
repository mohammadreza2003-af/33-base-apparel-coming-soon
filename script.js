"use strict";

const input = document.querySelector(".input-email");
const btnSubmit = document.querySelector(".btn-submit");
const lable = document.querySelector(".lable-e");

btnSubmit.addEventListener("click", function () {
  const value = input.value.toLowerCase();
  const email = value.toLowerCase().split(" ").join("");
  const user = email.slice(0, email.indexOf("@"));
  const gmail = email.slice(email.indexOf("@"));
  const full = [user, gmail];
  console.log(full);
  const emailPattern = /^[a-zA-Z0-9._-]/;
  console.log(emailPattern.test(full[0]), full[1] === "@gmail.com");
  if (
    (emailPattern.test(full[0]) && full[1] === "@gmail.com") ||
    full[1] === "@email.com"
  ) {
    lable.classList.remove("ac-error");
    input.value = "";
  } else {
    lable.classList.add("ac-error");
  }
});
