const express = document.getElementsByClassName("textAlignCenterFooter")[0];
const buttonSubmite = document.getElementsByClassName("buttonSubmite")[0];
const brother = document.getElementsByClassName("forJavaScript")[0];
const buttonZurück = document.getElementsByClassName("buttonZurück")[0];
const startSeite = document.getElementsByClassName("startSeite")[0];

buttonSubmite.addEventListener("click", () => {
  brother.classList.remove("buttonNone");
  express.classList.add("buttonNone");
});
buttonZurück.addEventListener("click", () => {
  brother.classList.add("buttonNone");
  express.classList.remove("buttonNone");
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});
