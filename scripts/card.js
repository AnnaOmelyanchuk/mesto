 class Card {
  constructor(data, templateSelector, handleCardClick) {
    this.data = data;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.photo-grid__item')
      .cloneNode(true);
    return cardElement;
  }


  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.photo-grid__image');
    this._cardImage.src = this.data.link;
    this._cardImage.alt = this.data.name;
    this._element.querySelector('.photo-grid__caption').textContent = this.data.name;
    this._setEventListeners();
    return this._element;
  }


  _setEventListeners() {
    this._element.querySelector('.photo-grid__caption-image').addEventListener('click', (e) => this._toggleLike(e))

    this._element.querySelector('.photo-grid__button-delete').addEventListener('click', () => this._deleteImageCard(this._element));

    this._element.querySelector('.photo-grid__image').addEventListener('click', () => this._handleCardClick(this.data));
  }

  _toggleLike(element) {
    element.target.classList.toggle('photo-grid__caption-image_background_active');
  }

  _deleteImageCard(card) {
  card.remove();
}

}

export {Card};

