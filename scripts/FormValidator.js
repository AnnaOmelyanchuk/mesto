
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
    this._form = document.querySelector(`${this._formSelector}`);
     this._form.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    this._setEventListeners(this._form);
  };

  _setEventListeners(form) {
    this._inputList = Array.from(form.querySelectorAll(`${this._inputSelector}`));
    this._buttonElement = form.querySelector(`${this._submitButtonSelector}`);
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
    this._hideInputError(inputElement.closest('div').querySelector('.popup__error-caption_place_name')) //<==очищаем ошибки ==
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
    return  inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _checkInputValidity(inputElement) {
    this._errorCaption = inputElement.closest('div').querySelector('.popup__error-caption_place_name');
    if (!inputElement.validity.valid) {
      if (inputElement.value != 0) {
        this._showInputError(this._errorCaption, `Минимальное количество символов 2. Длина текста сейчас: ${inputElement.value.length} символ.`);
      }
      else {
        this._showInputError(this._errorCaption, `Вы пропустили это поле`);
      }
      if (inputElement.validity.typeMismatch) {
        this._showInputError(this._errorCaption, `Введите адрес сайта.`);
      }
    }
    else {
      this._hideInputError(this._errorCaption);
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


