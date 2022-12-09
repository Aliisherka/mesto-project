function showInputError (formElm, inputElm, errorMessage, settings) {
    const errorElm = formElm.querySelector(`.${inputElm.id}-error`);
  
    inputElm.classList.add(settings.inputErrorClass); //popup__item_type_error
  
    errorElm.textContent = errorMessage;
}

function hideInputError (formElm, inputElm, settings) {
    const errorElm = formElm.querySelector(`.${inputElm.id}-error`);
  
    inputElm.classList.remove(settings.inputErrorClass); //popup__item_type_error
  
    errorElm.textContent = '';
}

function isValid (formElm, inputElm, settings) {
    if (inputElm.validity.patternMismatch) {
      inputElm.setCustomValidity(inputElm.dataset.errorMessage);
    } else {
      inputElm.setCustomValidity('');
    }
  
    if (!inputElm.validity.valid) {
      showInputError(formElm, inputElm, inputElm.validationMessage, settings);
    } else {
      hideInputError(formElm, inputElm, settings);
    }
}

function hasInvalidInput (inputList) {
    return inputList.some((inputElm) => {
      return !inputElm.validity.valid;
    });
}

function toggleButtonState (inputList, btn, settings) {
    if (hasInvalidInput(inputList)) {
      btn.setAttribute('disabled', true);
      btn.classList.add(settings.inactiveButtonClass); //submit-button_type_error
    } else {
      btn.removeAttribute('disabled');
      btn.classList.remove(settings.inactiveButtonClass); //submit-button_type_error
    }
}

function setEventListeners (formElm, settings) {
    const inputList = Array.from(formElm.querySelectorAll(settings.inputSelector)); //'.popup__item'
    const submitBtn = document.querySelectorAll(settings.submitButtonSelector); //'.submit-button'
    const submitBtnAdd = document.querySelector('#submit-btn-add');
  
    toggleButtonState(inputList, submitBtnAdd, settings);
  
    inputList.forEach((inputElm) => {
      inputElm.addEventListener('input', () => {
        isValid(formElm, inputElm, settings)
  
        submitBtn.forEach((item) => {
          toggleButtonState(inputList, item, settings);
        });
      });
    });
}

export function enableValidation (settings) {
    const formList = Array.from(document.querySelectorAll(settings.formSelector)); //'.form'
  
    formList.forEach((formElm) => {
      setEventListeners(formElm, settings);
    });
}