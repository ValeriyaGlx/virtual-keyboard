import { KEYBOARD } from "./keyboard";
import { mode } from "./changeLangAndCaps";

const textarea = document.querySelector(".textarea");

export function addTextContent(e) {
  textarea.focus();

  KEYBOARD.forEach((el) => {
    if (el.code === e.code && el.code === "Enter") {
      e.preventDefault();
      textarea.value  += "\n";
    }

    if (el.code === e.code && el.code === "Backspace") {
      e.preventDefault();
      textarea.value  = textarea.value.slice(0, textarea.value .length - 1);
    }

    if (el.code === e.code && el.output === "true") {
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

export function clickTextContent(e) {
  const ind = e.target.parentElement.id || e.target.id;
  textarea.focus();

  if (ind === "CapsLock") return;

  KEYBOARD.forEach((el) => {
    if (el.code === ind && ind === "Enter") {
      textarea.value  += "\n";
    }

    if (el.code === ind && ind === "Backspace") {
      textarea.value  = textarea.value.slice(0, str.length - 1);
    }

    if (el.code === ind && el.output === "true") {
      if (!mode.isCapslock && mode.russianFlag === "false" && !mode.isShift) {
        textarea.value += el.english;
      }

      if (mode.isCapslock && mode.russianFlag === "false" && !mode.isShift) {
        textarea.value += el.english_caps;
      }

      if (!mode.isCapslock && mode.russianFlag === "true" && !mode.isShift) {
        textarea.value += el.russian;
      }

      if (mode.isCapslock && mode.russianFlag === "true" && !mode.isShift) {
        textarea.value += el.russian_caps;
      }

      if (!mode.isCapslock && mode.russianFlag === "false" && mode.isShift) {
        textarea.value += el.english_shift;
      }

      if (mode.isCapslock && mode.russianFlag === "false" && mode.isShift) {
        textarea.value += el.english;
      }

      if (!mode.isCapslock && mode.russianFlag === "true" && mode.isShift) {
        textarea.value += el.russian_shift;
      }

      if (mode.isCapslock && mode.russianFlag === "true" && mode.isShift) {
        textarea.value += el.russian;
      }
    }
  });
}
