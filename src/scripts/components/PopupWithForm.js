import Popup from "./popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    this._inputList = Array.from(this._popup.querySelectorAll(`input`));
    this._InputValues = this._inputList.map(inputElement => inputElement = inputElement.value);
  }

  setEvenListeners() {
    super.setEventListeners();
    this.form = this._popup.querySelector('.popup__form');
    this.form.addEventListener('submit', this._handleFormSubmit);
  }

  close() {
    super.close();
    this._getInputValues();
    this._inputList.forEach((inputElement) => {
      inputElement.value = '';
    });

  }
}
