class Card {
  constructor(data, templateSelector, handleCardClick, handleCardDelete, userId, changeLike) {
    this.data = data;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this.userId = userId;
    this.changeLike = changeLike;
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
    this.likeButton = this._element.querySelector('.photo-grid__caption-image');
    this.quantityLike = this._element.querySelector('.photo-grid__quantity-like');
    this._cardImage = this._element.querySelector('.photo-grid__image');
    this._cardImage.src = this.data.link;
    this._cardImage.alt = this.data.name;
    this._element.querySelector('.photo-grid__caption').textContent = this.data.name;
    this._processingLikes();
    this._setEventListeners();
    return this._element;
  }

  _processingLikes() {
    this.quantityLike.textContent = this.data.likes.length;
    if (this.userId === this.data.owner._id) {
      this._element.querySelector('.photo-grid__button-delete').style.display = "block";
    }
    this.data.likes.forEach(likes => {
      if (likes._id === this.userId) {
        this.likeButton.classList.add('photo-grid__caption-image_background_active');
      }
    });
  }


  _setEventListeners() {
    this._element.querySelector('.photo-grid__caption-image').addEventListener('click', (e) => this._toggleLike(e))

    if (this.userId === this.data.owner._id) {
      this._element.querySelector('.photo-grid__button-delete').addEventListener('click', () => this._handleCardDelete({card: this._element, cardId: this.data._id}));
    }

    this._cardImage.addEventListener('click', () => this._handleCardClick(this.data));
  }

  _toggleLike(evt) {

    if (this.likeButton.classList.contains("photo-grid__caption-image_background_active")) {
      this.changeLike(true, {cardId: this.data._id, quantityLike: this.quantityLike });
    }
    else {
      this.changeLike(false, {cardId: this.data._id, quantityLike: this.quantityLike });
    }
    evt.target.classList.toggle('photo-grid__caption-image_background_active');
  }
}

export { Card };

