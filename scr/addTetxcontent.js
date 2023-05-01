import { KEYBOARD } from "./keyboard";
import { mode } from "./changeLangAndCaps";

const textarea = document.querySelector(".textarea");


export function addTextContent (e, index) {
  textarea.focus();

  KEYBOARD.forEach((el) => {
    if(el.code === index && index === "Tab"){
      e.preventDefault();
      textarea.value  += "\t";
    }

    if (el.code === index && index === "Enter") {
      e.preventDefault();
      textarea.value  += "\n";
    }

    if (el.code === index && index === "Backspace") {
      e.preventDefault();
      textarea.value  = textarea.value.slice(0, textarea.value.length - 1);
    }

    if (el.code ===index && el.output === "true") {
      e.preventDefault();
      if (!mode.isCapslock && mode.russianFlag === "false" && !mode.isShift) {
        textarea.value  += el.english;
      }

      if (mode.isCapslock && mode.russianFlag === "false" && !mode.isShift) {
        textarea.value  += el.english_caps;
      }

      if (!mode.isCapslock && mode.russianFlag === "true" && !mode.isShift) {
        textarea.value += el.russian;
      }

      if (mode.isCapslock && mode.russianFlag === "true" && !mode.isShift) {
        textarea.value  += el.russian_caps;
      }

      if (!mode.isCapslock && mode.russianFlag === "false" && mode.isShift) {
        textarea.value  += el.english_shift;
      }

      if (mode.isCapslock && mode.russianFlag === "false" && mode.isShift) {
        textarea.value  += el.english;
      }

      if (!mode.isCapslock && mode.russianFlag === "true" && mode.isShift) {
        textarea.value  += el.russian_shift;
      }

      if (mode.isCapslock && mode.russianFlag === "true" && mode.isShift) {
        textarea.value  += el.russian;
      }
    }
  });
}

export function clickArrowNavigation(e){
  const index = e.target.parentElement.id || e.target.id;
 
  if(index !== 'ArrowLeft' && index !== 'ArrowRight' && index !== 'ArrowUp' && index !== 'ArrowDown') return;
  console.log(index);
   textarea.selectionStart = textarea.selectionStart - 1;
  //setTimeout(function(){textarea.focus()}, 100)
  //textarea.focus()
  console.log(textarea.value.length);
}