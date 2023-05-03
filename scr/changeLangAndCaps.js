import { KEYBOARD, SPANS } from './keyboard';

class Mode {
  constructor() {
    this.russianFlag = localStorage.getItem('russianFlag') || 'false';
    this.isCapslock = false;
    this.isShift = false;
  }
}

export const mode = new Mode();

const mainSumbol = document.querySelectorAll('.main-symbol');
const spans = document.querySelectorAll('.symbol');

function addModes() {
  if (!mode.isCapslock && mode.russianFlag === 'false') {
    mainSumbol.forEach((el, ind) => {
      const a = el;
      a.innerText = KEYBOARD[ind].english;
    });

    spans.forEach((el, ind) => {
      const a = el;
      a.innerText = SPANS[ind].english;
    });
  }

  if (mode.isCapslock && mode.russianFlag === 'false') {
    mainSumbol.forEach((el, ind) => {
      const a = el;
      a.textContent = KEYBOARD[ind].english_caps;
    });

    spans.forEach((el, ind) => {
      const a = el;
      a.innerText = SPANS[ind].english;
    });
  }

  if (mode.isCapslock && mode.russianFlag === 'true') {
    mainSumbol.forEach((el, ind) => {
      const a = el;
      a.textContent = KEYBOARD[ind].russian_caps;
    });

    spans.forEach((el, ind) => {
      const a = el;
      a.innerText = SPANS[ind].russian;
    });
  }

  if (!mode.isCapslock && mode.russianFlag === 'true') {
    mainSumbol.forEach((el, ind) => {
      const a = el;
      a.textContent = KEYBOARD[ind].russian;
    });

    spans.forEach((el, ind) => {
      const a = el;
      a.innerText = SPANS[ind].russian;
    });
  }
}

export function changeLanguage() {
  const combination = [];

  function addCombination(e) {
    combination.push(e.code);

    if (
      combination.length === 2
      && combination.indexOf('ShiftLeft') !== -1
      && combination.indexOf('AltLeft') !== -1
    ) {
      if (mode.russianFlag === 'false') {
        mode.russianFlag = 'true';
      } else {
        mode.russianFlag = 'false';
      }

      addModes();
    }
  }

  function stopCombination() {
    if (combination.length === 0) return;
    combination.length = 0;
  }

  // Save in a local storage

  function setLocalStorage() {
    localStorage.setItem('russianFlag', mode.russianFlag);
  }

  function getLocalStorage() {
    if (localStorage.getItem('russianFlag')) {
      mode.russianFlag = localStorage.getItem('russianFlag');
    }

    if (localStorage.getItem('russianFlag') === 'true') {
      mainSumbol.forEach((el, ind) => {
        const a = el;
        a.textContent = KEYBOARD[ind].russian;
      });

      spans.forEach((el, ind) => {
        const a = el;
        a.innerText = SPANS[ind].russian;
      });
    }
  }

  document.addEventListener('keydown', addCombination);
  document.addEventListener('keyup', stopCombination);
  window.addEventListener('beforeunload', setLocalStorage);
  window.addEventListener('load', getLocalStorage);
}

export function addCupslock(e) {
  if (e.code !== 'CapsLock') return;
  mode.isCapslock = !mode.isCapslock;

  addModes();
}

export function addShift(e) {
  if (e.code !== 'ShiftRight' && e.code !== 'ShiftLeft') return;
  mode.isShift = true;
}

export function remoteShift(e) {
  if (e.code !== 'ShiftRight' && e.code !== 'ShiftLeft') return;
  mode.isShift = false;
}

export function addToggleCapsLock(e) {
  const ind = e.target.parentElement.id || e.target.id;
  const button = document.querySelector(`button[id="${ind}"]`);

  if (ind !== 'CapsLock') return;

  if (ind === 'CapsLock') {
    button.classList.toggle('push');
    if (mode.isCapslock === true) {
      mode.isCapslock = false;
    } else {
      mode.isCapslock = true;
    }
    addModes();
  }
}
