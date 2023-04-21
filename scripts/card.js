 class Card {
  constructor(data, templateSelector) {
    this.data = data;
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    }

    _getTemplate() {
    const cardElement = document
      .querySelector('#cardImage')
      .content
      .querySelector('.photo-grid__item')
      .cloneNode(true);
    return cardElement;
  }


  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.photo-grid__image').src = this._link;
    this._element.querySelector('.photo-grid__image').alt = this._name;
    this._element.querySelector('.photo-grid__caption').textContent = this._name;
    this._setEventListeners();
    return this._element;
  }


  _setEventListeners() {
    this._element.querySelector('.photo-grid__caption-image').addEventListener('click', (e) =>
      e.target.classList.toggle('photo-grid__caption-image_background_active'));

    this._element.querySelector('.photo-grid__button-delete').addEventListener('click', () =>
      this._deleteImageCard(this._element));

    this._element.querySelector('.photo-grid__image').addEventListener('click', () => chooseImage(this.data));
  }

  _deleteImageCard(card) {
  card.remove();
}

}

function chooseImage(infoCard) {
  const popupImage = document.querySelector('.popup_image-viewer');
  const viewImage = document.querySelector('.popup__image');
  const viewImageCaption = document.querySelector('.popup__caption');
  openPopup(popupImage);
  viewImage.src = infoCard.link;
  viewImage.alt = infoCard.name;
  viewImageCaption.textContent = infoCard.name;
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener('keydown', closeByEscape); //<== навесили  обработчик ==
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener('keydown', closeByEscape); // <== удалили обработчик ==
}

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened') //нашли открытый попап
    closePopup(openedPopup);
  }
}

export {Card};

