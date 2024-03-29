import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._inputList = Array.from(this._popup.querySelectorAll(`input`));
    this._inputValues = {};
  }

  _getInputValues() {
    this._inputList.forEach((formElement) => {
      this._formName = formElement.getAttribute('name');
      this._inputValues[this._formName] = formElement.value;
    });
    return this._inputValues
  }

  setEventListeners() {
    super.setEventListeners();
    this.form = this._popup.querySelector('.popup__form');
    this.form.addEventListener('submit', (e) => {
      this._handleFormSubmit({
        evt: e,
        data: this._getInputValues()
      }),
        this.setTextOnSubmitBtn('Сохранение...')
    }
    );
  }

  setInputValues(data) {
    this._inputList.forEach((input, index) => {
      input.value = data[index];
    });
  }

  setTextOnSubmitBtn(text) {
    this.form.querySelector('.popup__save-btn').textContent = `${text}`;
  }

  close() {
    super.close();
    this.setTextOnSubmitBtn('Сохранение');
    this.form.reset();
  }
}
