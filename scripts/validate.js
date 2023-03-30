const showInputError = (errorElement, errorMessage) => {
  errorElement.setAttribute('erorMessage', `${errorMessage}`);
};

const hideInputError = (errorElement) => {
  errorElement.setAttribute('erorMessage', '');
};

const checkInputValidity = (inputElement) => {
  if (!inputElement.validity.valid) {
    if (inputElement.value != 0) {
      showInputError(inputElement.nextElementSibling, `Минимальное количество символов 2. Длина текста сейчас: ${inputElement.value.length} символ.`);
    }
    else {
      showInputError(inputElement.nextElementSibling, `Вы пропустили это поле`);
    }
    if (inputElement.validity.typeMismatch) {
      showInputError(inputElement.nextElementSibling, `Введите адрес сайта.`);
    }
  }
  else {
    hideInputError(inputElement.nextElementSibling);
  }
};

const toggleButtonState = (inputList, buttonElement, arrValidationElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(`${arrValidationElement.inactiveButtonClass}`);
    buttonElement.setAttribute('disabled', 'true');
  } else {
    buttonElement.classList.remove(`${arrValidationElement.inactiveButtonClass}`);
    buttonElement.removeAttribute('disabled');
  }
}

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}



const setEventListeners = (form, arrValidationElement) => {

  const inputList = Array.from(form.querySelectorAll(`${arrValidationElement.inputSelector}`));
  const buttonElement = form.querySelector(`${arrValidationElement.submitButtonSelector}`);
  toggleButtonState(inputList, buttonElement, arrValidationElement);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(inputElement);
      toggleButtonState(inputList, buttonElement, arrValidationElement);
    });
  });
};




const enableValidation = (arrValidationElement) => {
  const formList = Array.from(document.querySelectorAll(`${arrValidationElement.formSelector}`));
  formList.forEach((form) => {
    form.addEventListener('submit', function (evt) {
      evt.preventDefault();
    });
    formList.forEach((form) => {
      setEventListeners(form, arrValidationElement);
    });
  });
};



enableValidation({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-btn',
  inactiveButtonClass: 'popup__save-btn_state_inactive',
  inputErrorClass: '.popup__error-caption_place_name',
  errorClass: '.popup__error_visible'
});


