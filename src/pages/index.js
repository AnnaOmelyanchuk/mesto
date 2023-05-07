import './index.css';


const jobInput = document.querySelector('.popup__input_text_caption');
const nameInput = document.querySelector('.popup__input_text_name');
const linkInput = document.querySelector('.popup__input_img_link');
const imageNameInput = document.querySelector('.popup__input_img_name');
const openEditButton = document.querySelector('.profile__edit-button');
const openAddImageButton = document.querySelector('.profile__add-button');




import { initialCards as initialCards } from '../scripts/utils/cards.js';
import Section from '../scripts/components/section.js';
import { Card as Card } from '../scripts/components/card.js'
import { FormValidator as FormValidator, listElementsOfForm as listElementsOfForm } from '../scripts/components/FormValidator.js'
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import UserInfo from '../scripts/components/UserInfo.js';

const popupEdit = new PopupWithForm('.popup_edit', handleFormEditSubmit);
popupEdit.setEvenListeners();

const popupAdd = new PopupWithForm('.popup_add-image', handleFormAddSubmit);
popupAdd.setEvenListeners();


const popupImage = new PopupWithImage('.popup_image-viewer', { imageSelector: '.popup__image', captionSelector: '.popup__caption' });
popupImage.setEventListeners();

const displayUserInfo = new UserInfo({ nameSelector: '.profile__name', infoSelector: '.profile__caption' });


const initialCardsSection = new Section(
  {
    items: initialCards.reverse(),
    renderer: (item) => {
      const card = new Card(item, '#cardImage', handleCardClick);
      const cardElement = card.generateCard();
      initialCardsSection.addItem(cardElement);
    }
  }, '.photo-grid__list');

initialCardsSection.renderElements();

const addCard = new Section({
  items: [{}],
  renderer: (item) => {
    item = { link: linkInput.value, name: imageNameInput.value };
    const card = new Card(item, '#cardImage', handleCardClick);
    const cardElement = card.generateCard();
    addCard.addItem(cardElement);
  }
}, '.photo-grid__list');


function feelUpInput() {
  nameInput.value = displayUserInfo.getUserInfo().name;
  jobInput.value = displayUserInfo.getUserInfo().info;
}

//отправка формы редактирования
function handleFormEditSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  displayUserInfo.setUserInfo({ name: nameInput.value, info: jobInput.value });
  popupEdit.close();
}

function handleCardClick(data) {
  popupImage.open(data);
}

//отправка формы добавления
function handleFormAddSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  addCard.renderElements();
  evt.target.reset();
  popupAdd.close();
}


openEditButton.addEventListener('click', () => {
  popupEdit.open(),
    feelUpInput(),
    formValidatorEdit.resetValidation()
});


openAddImageButton.addEventListener('click', () => {
  popupAdd.open(),
    formValidatorAdd.resetValidation();
});

const formValidatorAdd = new FormValidator(listElementsOfForm, '.popup__form_add');
formValidatorAdd.enableValidation();

const formValidatorEdit = new FormValidator(listElementsOfForm, '.popup__form_edit');
formValidatorEdit.enableValidation();
