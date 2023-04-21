
const listElementsOfForm = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-btn',
  inactiveButtonClass: 'popup__save-btn_state_inactive',
  inputErrorClass: '.popup__error-caption_place_name',
  errorClass: '.popup__error_visible'
}

class FormValidator {
  constructor (listElementsOfForm, formSelector)  {
    this._inputSelector = listElementsOfForm.inputSelector;
    this._submitButtonSelector = listElementsOfForm.submitButtonSelector;
    this._inactiveButtonClass = listElementsOfForm.inactiveButtonClass;
    this._inputErrorClass = listElementsOfForm.inputErrorClass;
    this._formSelector = formSelector;
  }

  enableValidation() {
    const form = document.querySelector(`${this._formSelector}`);
      form.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    this._setEventListeners(form);
  };

  _setEventListeners(form) {
    const inputList = Array.from(form.querySelectorAll(`${this._inputSelector}`));
    const buttonElement = form.querySelector(`${this._submitButtonSelector}`);
    this._toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  };


  _toggleButtonState(inputList, buttonElement) {

    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(`${this._inactiveButtonClass}`);
      buttonElement.setAttribute('disabled', 'true');
    } else {
      buttonElement.classList.remove(`${this._inactiveButtonClass}`);
      buttonElement.removeAttribute('disabled');
    }
  }


  _hasInvalidInput(inputList) {
    return  inputList.some(function(inputElement)  {
      return !inputElement.validity.valid;
    });
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      if (inputElement.value != 0) {
        this._showInputError(inputElement.nextElementSibling, `Минимальное количество символов 2. Длина текста сейчас: ${inputElement.value.length} символ.`);
      }
      else {
        this._showInputError(inputElement.nextElementSibling, `Вы пропустили это поле`);
      }
      if (inputElement.validity.typeMismatch) {
        this._showInputError(inputElement.nextElementSibling, `Введите адрес сайта.`);
      }
    }
    else {
      this._hideInputError(inputElement.nextElementSibling);
    }
  };

  _showInputError = (errorElement, errorMessage) => {
    errorElement.setAttribute('erorMessage', `${errorMessage}`);
  };

  _hideInputError = (errorElement) => {
    errorElement.setAttribute('erorMessage', '');
  };

}

export {FormValidator, listElementsOfForm};


