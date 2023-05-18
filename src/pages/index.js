import './index.css';
const openEditButton = document.querySelector('.profile__edit-button');
const openAddImageButton = document.querySelector('.profile__add-button');
const openEditAvatarButton = document.querySelector('.profile__avatar');
const formValidators = {};
let userId = 0;
import Api from '../scripts/components/Api.js';
import Section from '../scripts/components/Section.js';
import { Card as Card } from '../scripts/components/Card.js'
import { FormValidator as FormValidator, listElementsOfForm as listElementsOfForm } from '../scripts/components/FormValidator.js'
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';
import UserAvatar from '../scripts/components/UserAvatar.js';


const api = new Api({
  baseUrl: 'https://nomoreparties.co/v1/cohort-66/users/me',
  cardUrl: 'https://mesto.nomoreparties.co/v1/cohort-66/cards',
  avatarUrl: `https://mesto.nomoreparties.co/v1/cohort-66/users/me/avatar`,
  baseUrl: 'https://nomoreparties.co/v1/cohort-66/users/me',
  headers: { authorization: '96a78f06-11d7-4e34-a9b2-cad17675fa32' }
});

api.getUserInformationMe().then(res => {
  userId = res._id;

  api.getInitialCardsSection().then(res => {
    initialCardsSection.renderElements(res);
  });
  displayUserInfo.setUserInfo(res);
  setUserAvatar.setAvatar(res.avatar);

});

const popupEdit = new PopupWithForm('.popup_edit', handleFormEditSubmit);
popupEdit.setEvenListeners();

const popupAdd = new PopupWithForm('.popup_add-image', handleFormAddSubmit);
popupAdd.setEvenListeners();

const popupEditAvatar = new PopupWithForm('.popup_edit-avatar', handleFormEditAvatarSubmit);
popupEditAvatar.setEvenListeners();

const popupConfirmDelete = new PopupWithForm('.popup_confirm', handleFormConfirmDelete);

const popupImage = new PopupWithImage('.popup_image-viewer', { imageSelector: '.popup__image', captionSelector: '.popup__caption' });
popupImage.setEventListeners();

const displayUserInfo = new UserInfo({ nameSelector: '.profile__name', infoSelector: '.profile__caption' });
const setUserAvatar = new UserAvatar({ imgSelector: '.profile__avatar-img' });

const initialCardsSection = new Section(
  {
    renderer: (item) => {
      initialCardsSection.addItem(createCard(item));
    }
  }, '.photo-grid__list');

function fillUpInputEditForm() {
  const { info, name } = displayUserInfo.getUserInfo();
  popupEdit.setInputValues([name, info]);
}

//отправка формы редактирования
function handleFormEditSubmit({ evt, data }) {
  evt.preventDefault();

  api.setUserNameAbout(data).then((res) => {
    displayUserInfo.setUserInfo(res);
    popupEdit.close();
  });
}

function handleFormEditAvatarSubmit({ evt, data }) {
  evt.preventDefault();

  api.setUserAvatar(data).then(res => {
    setUserAvatar.setAvatar(res.avatar);
    popupEditAvatar.close();
  });
}

function handleCardClick(data) {
  popupImage.open(data);
}

function createCard(item) {
  const card = new Card(item, '#cardImage', handleCardClick, handleCardDelete, userId, changeLike);
  const cardElement = card.generateCard();
  return cardElement
}

function handleCardDelete({ card, cardId }) {
  popupConfirmDelete.setEvenListeners(card, cardId);
  popupConfirmDelete.open()
}

function handleFormConfirmDelete({ evt, card, cardId }) {
  evt.preventDefault();

  api.deleteCard(cardId).then((res) => {
    card.remove();
    popupConfirmDelete.close();
  })

}


//отправка формы добавления
function handleFormAddSubmit({ evt, data }) {
  evt.preventDefault();
  popupAdd.setTextOnSubmitBtn('Сохранение...');

  api.postCardNameLink(data).then((res) => {
    initialCardsSection.renderElements([res]);
    popupAdd.close();
    popupAdd.setTextOnSubmitBtn('Сохранение');
  })

}

function changeLike(state, data) {
  if (state) {

    api.deleteLike(data).then(res => {
      data.quantityLike.textContent = res.likes.length;
    })
  }

  else {
    api.putLike(data).then(res => {
      data.quantityLike.textContent = res.likes.length;
    })

  }
}


openEditButton.addEventListener('click', () => {
  popupEdit.open(),
    fillUpInputEditForm(),
    formValidators.bioEdit.resetValidation()
});

openAddImageButton.addEventListener('click', () => {
  popupAdd.open(),
    formValidators.placeAdd.resetValidation();
});

openEditAvatarButton.addEventListener('click', () => {
  popupEditAvatar.open()
  formValidators.bioEdit.resetValidation()
});


const enableValidation = (listElementsOfForm) => {
  const formList = Array.from(document.querySelectorAll(listElementsOfForm.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(listElementsOfForm, formElement)
    const formName = formElement.getAttribute('name')
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(listElementsOfForm);

