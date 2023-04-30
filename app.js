import { KEYBOARD } from "./scr/keyboard";
import {
  changeLanguage,
  addCupslock,
  addShift,
  remoteShift,
} from "./scr/changeLangAndCaps";
import { addTextContent } from "./scr/addTetxcontent";

const buttons = document.querySelectorAll(".keyboard__input button");

buttons.forEach((el, ind) => {
  el.setAttribute("id", `${KEYBOARD[ind].code}`);
});

function addPushingStyle(e) {
  const button = document.querySelector(`button[id="${e.code}"]`);
  if (e.code === "CapsLock") {
    button.classList.toggle("push");
    return;
  }
  button.classList.add("push");
}

function addToggleCapsLock(e) {
  const ind = e.target.parentElement.id || e.target.id;
  const button = document.querySelector(`button[id="${ind}"]`);

  console.log(button);

  if (ind === "CapsLock") {
    button.classList.toggle("push");
  }
}

function deleteBorder(e) {
  if (e.code === "CapsLock") return;
  const button = document.querySelector(`button[id="${e.code}"]`);
  button.classList.remove("push");
}

document.body.addEventListener("keydown", addPushingStyle);
document.body.addEventListener("keydown", addCupslock);
document.body.addEventListener("keydown", addShift);
document.body.addEventListener("keydown", addTextContent);
buttons.forEach((el) => el.addEventListener("click", addToggleCapsLock));
window.addEventListener("keyup", remoteShift);
window.addEventListener("keyup", deleteBorder);
changeLanguage();
