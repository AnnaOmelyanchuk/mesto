import './index.css';
const openEditButton = document.querySelector('.profile__edit-button');
const openAddImageButton = document.querySelector('.profile__add-button');
const dataAdd = { link: '', name: '' };
const formValidators = {};


import { initialCards as initialCards } from '../scripts/utils/Cards.js';
import Section from '../scripts/components/Section.js';
import { Card as Card } from '../scripts/components/Card.js'
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
      initialCardsSection.addItem(createCard(item));
    }
  }, '.photo-grid__list');

initialCardsSection.renderElements();

const addCard = new Section({
  items: [dataAdd],
  renderer: (item) => {
    addCard.addItem(createCard(item));
  }
}, '.photo-grid__list');


function fillUpInputEditForm() {
  const { info, name } = displayUserInfo.getUserInfo();
  popupEdit.setInputValues([name, info]);
}

//отправка формы редактирования
function handleFormEditSubmit(evt, data) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  displayUserInfo.setUserInfo({ name: data[0], info: data[1] });
  popupEdit.close();
}

function handleCardClick(data) {
  popupImage.open(data);
}

function createCard(item) {
  const card = new Card(item, '#cardImage', handleCardClick);
  const cardElement = card.generateCard();
  return cardElement
}

//отправка формы добавления
function handleFormAddSubmit(evt, data) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  dataAdd.name = data[0];
  dataAdd.link = data[1];
  addCard.renderElements();
  popupAdd.close();
}


openEditButton.addEventListener('click', () => {
  popupEdit.open(),
    fillUpInputEditForm(),
    formValidators.bioEdit.resetValidation()
});

/////////////////////////
openAddImageButton.addEventListener('click', () => {
  popupAdd.open(),
    formValidators.placeAdd.resetValidation();
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

