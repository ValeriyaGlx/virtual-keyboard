import { KEYBOARD } from "./keyboard";
import { mode } from "./changeLangAndCaps";

const textarea = document.querySelector(".textarea");

function getValue (value) {
  const cursor = textarea.selectionStart;

  textarea.value =
    textarea.value.slice(0, textarea.selectionStart) +
    value +
    textarea.value.slice(textarea.selectionStart);

  textarea.selectionStart = cursor + 1;
  textarea.selectionEnd = cursor + 1;
};

  function deleteValue (btn) {
    if(btn === "Backspace" &&  textarea.selectionStart===0) {return};

  const cursor = textarea.selectionStart;
  const value = btn === "Delete" ? cursor : cursor - 1;
  textarea.value =
    textarea.value.slice(0, value) + textarea.value.slice(value + 1);

  textarea.selectionStart = value;
  textarea.selectionEnd = value;
};

export function addTextContent(e, index) {
  textarea.focus();

  KEYBOARD.forEach((el) => {
    if (el.code === index && index === "Tab") {
      e.preventDefault();
      getValue("\t");
    }

    if (el.code === index && index === "Enter") {
      e.preventDefault();
      getValue("\n");
    }

    if (el.code === index && index === "Backspace") {
      e.preventDefault();
      deleteValue("Backspace");
    }

    if (el.code === index && index === "Delete") {
      e.preventDefault();
      deleteValue("Delete");
    }

    if (el.code === index && el.output === "true") {
      e.preventDefault();
      if (!mode.isCapslock && mode.russianFlag === "false" && !mode.isShift) {
        getValue(el.english);
      }

      if (mode.isCapslock && mode.russianFlag === "false" && !mode.isShift) {
        getValue(el.english_caps);
      }

      if (!mode.isCapslock && mode.russianFlag === "true" && !mode.isShift) {
        getValue(el.russian);
      }

      if (mode.isCapslock && mode.russianFlag === "true" && !mode.isShift) {
        getValue(el.russian_caps);
      }

      if (!mode.isCapslock && mode.russianFlag === "false" && mode.isShift) {
        getValue(el.english_shift);
      }

      if (mode.isCapslock && mode.russianFlag === "false" && mode.isShift) {
        getValue(el.english_shift);
      }

      if (!mode.isCapslock && mode.russianFlag === "true" && mode.isShift) {
        getValue(el.russian_shift);
      }

      if (mode.isCapslock && mode.russianFlag === "true" && mode.isShift) {
        getValue(el.russian_shift);
      }
    }
  });
}

export function clickArrowNavigation(e) {
  const index = e.target.parentElement.id || e.target.id;

  if (
    index !== "ArrowLeft" &&
    index !== "ArrowRight" &&
    index !== "ArrowUp" &&
    index !== "ArrowDown"
  )
    return;
  if (index === "ArrowLeft") {
    getValue("◄");
  }

  if (index === "ArrowRight") {
    getValue("►");
  }

  if (index === "ArrowUp") {
    getValue("▲");
  }

  if (index === "ArrowDown") {
    getValue("▼");
  }
}

