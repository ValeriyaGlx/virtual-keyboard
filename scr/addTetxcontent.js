import { KEYBOARD } from "./keyboard";
import { mode } from "./changeLangAndCaps";


let str = "";
const textarea = document.querySelector(".textarea");

export function addTextContent(e) {
  KEYBOARD.forEach((el) => {
    if (el.code === e.code && el.code === "Enter") {
      str += "\n";
    }

    if (el.code === e.code && el.code === "Backspace") {
      str = str.slice(0, str.length - 1);
    }

    if (el.code === e.code && el.output === "true") {
      if (!mode.isCapslock && mode.russianFlag === "false" && !mode.isShift) {
        str += el.english;
      }

      if (mode.isCapslock && mode.russianFlag === "false" && !mode.isShift) {
        str += el.english_caps;
      }

      if (!mode.isCapslock && mode.russianFlag === "true" && !mode.isShift) {
        str += el.russian;
      }

      if (mode.isCapslock && mode.russianFlag === "true" && !mode.isShift) {
        str += el.russian_caps;
      }

      if (!mode.isCapslock && mode.russianFlag === "false" && mode.isShift) {
        str += el.english_shift;
      }

      if (mode.isCapslock && mode.russianFlag === "false" && mode.isShift) {
        str += el.english;
      }

      if (!mode.isCapslock && mode.russianFlag === "true" && mode.isShift) {
        str += el.russian_shift;
      }

      if (mode.isCapslock && mode.russianFlag === "true" && mode.isShift) {
        str += el.russian;
      }
    }
  });
  textarea.textContent = str;
}
