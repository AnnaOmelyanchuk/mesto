
const listElementsOfForm = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-btn',
  inactiveButtonClass: 'popup__save-btn_state_inactive',
  inputErrorClass: '.popup__error-caption_place_name',
  errorClass: 'popup__input_type_error'

}

class FormValidator {
  constructor(listElementsOfForm, formSelector) {
    this._inputSelector = listElementsOfForm.inputSelector;
    this._submitButtonSelector = listElementsOfForm.submitButtonSelector;
    this._inactiveButtonClass = listElementsOfForm.inactiveButtonClass;
    this._inputErrorClass = listElementsOfForm.inputErrorClass;
    this._errorClass = listElementsOfForm.errorClass;
    this._form = formSelector;
  }

  enableValidation() {
    this._form.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    this._setEventListeners();
  };

  _setEventListeners() {
    this._inputList = Array.from(this._form.querySelectorAll(`${this._inputSelector}`));
    this._buttonElement = this._form.querySelector(`${this._submitButtonSelector}`);
    this._toggleButtonState(this._inputList, this._buttonElement);
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(this._inputList, this._buttonElement);
      });
    });
  };

  resetValidation() {
    this._toggleButtonState(this._inputList, this._buttonElement); //<== управляем кнопкой ==
    this._inputList.forEach((inputElement) => {
   //   inputElement.classList.remove(`${this._errorClass}`);
      this._hideInputError(inputElement.closest('div').querySelector(`${this._inputErrorClass}`), inputElement) //<==очищаем ошибки ==
    });
  }

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
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _checkInputValidity(inputElement) {
    this._errorCaption = inputElement.closest('div').querySelector(`${this._inputErrorClass}`);
    if (!inputElement.validity.valid) {
      if (inputElement.value != 0) {
        this._showInputError(this._errorCaption, inputElement.validationMessage);
        inputElement.classList.add(`${this._errorClass}`);
      }
      else {
        this._showInputError(this._errorCaption, inputElement.validationMessage);
        inputElement.classList.add(`${this._errorClass}`);
      }
      if (inputElement.validity.typeMismatch) {
        this._showInputError(this._errorCaption, inputElement.validationMessage);
        inputElement.classList.add(`${this._errorClass}`);
      }
    }
    else {
      this._hideInputError(this._errorCaption, inputElement);
    }
  };

  _showInputError = (errorElement, errorMessage) => {
    errorElement.setAttribute('erorMessage', `${errorMessage}`);
  };

  _hideInputError = (errorElement, inputElement) => {
    errorElement.setAttribute('erorMessage', '');
    inputElement.classList.remove(`${this._errorClass}`);
  };

}

export { FormValidator, listElementsOfForm };


