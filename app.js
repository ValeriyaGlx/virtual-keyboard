import { KEYBOARD } from "./scr/keyboard";
import {
  changeLanguage,
  addCupslock,
  addShift,
  remoteShift,
  addToggleCapsLock,
} from "./scr/changeLangAndCaps";
import { addTextContent, clickArrowNavigation } from "./scr/addTetxcontent";

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

function deleteBorder(e) {
  if (e.code === "CapsLock") return;
  const button = document.querySelector(`button[id="${e.code}"]`);
  button.classList.remove("push");
}

document.body.addEventListener("keydown", addPushingStyle);
document.body.addEventListener("keydown", addCupslock);
document.body.addEventListener("keydown", addShift);
window.addEventListener("keyup", remoteShift);
document.body.addEventListener("keydown", e => addTextContent(e, e.code));
buttons.forEach((el) => el.addEventListener("click", addToggleCapsLock));
buttons.forEach((el) => el.addEventListener("click", clickArrowNavigation));
buttons.forEach((el) => el.addEventListener("click", e => addTextContent(e, e.target.parentElement.id || e.target.id)));

window.addEventListener("keyup", deleteBorder);
changeLanguage();
