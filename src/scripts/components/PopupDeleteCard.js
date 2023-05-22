import Popup from "./Popup.js";
export default class PopupDeleteCard extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._inputList = Array.from(this._popup.querySelectorAll(`input`));
    this._inputValues = {};
  }

  setEventListeners() {
    super.setEventListeners();
    this.form = this._popup.querySelector('.popup__form');
    this.form.addEventListener('submit', (e) => {
      this._handleFormSubmit({
        evt: e
      }),
        this.setTextOnSubmitBtn('Удаление...')
    }
    );
  }

  setTextOnSubmitBtn(text) {
    this.form.querySelector('.popup__save-btn').textContent = `${text}`;
  }

  close() {
    super.close();
    this.setTextOnSubmitBtn('Да');
  }

  getCard({ card, cardId }) {
    this.card = card;
    this.cardId = cardId;
  }

  cardId() {
    return this.cardId
  }

  deleteCard() {
    this.card.remove();
  }

}
