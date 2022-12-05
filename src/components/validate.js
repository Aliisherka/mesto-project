function showInputError (formElm, inputElm, errorMessage) {
    const errorElm = formElm.querySelector(`.${inputElm.id}-error`);
  
    inputElm.classList.add('popup__item_type_error');
  
    errorElm.textContent = errorMessage;
}

function hideInputError (formElm, inputElm) {
    const errorElm = formElm.querySelector(`.${inputElm.id}-error`);
  
    inputElm.classList.remove('popup__item_type_error');
  
    errorElm.textContent = '';
}

function isValid (formElm, inputElm) {
    if (inputElm.validity.patternMismatch) {
      inputElm.setCustomValidity(inputElm.dataset.errorMessage);
    } else {
      inputElm.setCustomValidity('');
    }
  
    if (!inputElm.validity.valid) {
      showInputError(formElm, inputElm, inputElm.validationMessage);
    } else {
      hideInputError(formElm, inputElm);
    }
}

function hasInvalidInput (inputList) {
    return inputList.some((inputElm) => {
      return !inputElm.validity.valid;
    });
}

function toggleButtonState (inputList, btn) {
    if (hasInvalidInput(inputList)) {
      btn.setAttribute('disabled', true);
      btn.classList.add('submit-button_type_error');
    } else {
      btn.removeAttribute('disabled');
      btn.classList.remove('submit-button_type_error');
    }
}

function setEventListeners (formElm) {
    const inputList = Array.from(formElm.querySelectorAll('.popup__item'));
    const submitBtn = document.querySelectorAll('.submit-button');
    const submitBtnAdd = document.querySelector('#submit-btn-add');
  
    toggleButtonState(inputList, submitBtnAdd);
  
    inputList.forEach((inputElm) => {
      inputElm.addEventListener('input', () => {
        isValid(formElm, inputElm)
  
        submitBtn.forEach((item) => {
          toggleButtonState(inputList, item);
        });
      });
    });
}

export function enableValidation () {
    const formList = Array.from(document.querySelectorAll('.form'));
  
    formList.forEach((formElm) => {
      setEventListeners(formElm);
    });
}