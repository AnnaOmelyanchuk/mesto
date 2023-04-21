const popupImage = document.querySelector('.popup_image-viewer');
const popupsArr = Array.from(document.querySelectorAll(`.popup`));
const profileName = document.querySelector('.profile__name');
const profileCaption = document.querySelector('.profile__caption');
const jobInput = document.querySelector('.popup__input_text_caption');
const nameInput = document.querySelector('.popup__input_text_name');
const linkInput = document.querySelector('.popup__input_img_link');
const imageNameInput = document.querySelector('.popup__input_img_name');
const openEditButton = document.querySelector('.profile__edit-button'); // кнопка открытия для формы редактирования
const openAddImageButton = document.querySelector('.profile__add-button'); // кнопка открытия для формы довавления изображения
const popupEdit = document.querySelector('.popup_edit');
const popupAddImage = document.querySelector('.popup_add-image');
const formEditElement = document.querySelector('.popup__form_edit');
const formAddElement = document.querySelector('.popup__form_add');
const viewImage = document.querySelector('.popup__image');
const viewImageCaption = document.querySelector('.popup__caption');

import {Card as Card} from './card.js'
import {FormValidator as FormValidator, listElementsOfForm as listElementsOfForm} from './FormValidator.js'

function feelUpInput() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileCaption.textContent;
}

//отправка формы редактирования
function handleFormEditSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  profileName.textContent = nameInput.value;
  profileCaption.textContent = jobInput.value;
  closePopup(popupEdit);
}


//отправка формы добавления
function handleFormAddSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  const card = new Card({ link: linkInput.value, name: imageNameInput.value }, '.photo-grid__item');
  const cardElement = card.generateCard();
  document.querySelector('.photo-grid__list').prepend(cardElement);
  evt.target.reset();
  closePopup(popupAddImage);
}


function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener('keydown', closeByEscape); //<== навесили  обработчик ==
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener('keydown', closeByEscape); // <== удалили обработчик ==
}

openEditButton.addEventListener('click', () => { openPopup(popupEdit), feelUpInput() });
openAddImageButton.addEventListener('click', () => {
  openPopup(popupAddImage);
  const popupSave = popupAddImage.querySelector('.popup__save-btn');
  popupSave.setAttribute('disabled', 'true');
  popupSave.classList.add('popup__save-btn_state_inactive');
});

popupsArr.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    }
    if (evt.target.classList.contains('popup__close-btn')) {
      closePopup(popup);
    }
  })
})

formEditElement.addEventListener('submit', handleFormEditSubmit);
formAddElement.addEventListener('submit', handleFormAddSubmit);


function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened') //нашли открытый попап
    closePopup(openedPopup);
  }
}

initialCards.reverse().forEach((element) => {
  const card = new Card(element, '.photo-grid__item');
  const cardElement = card.generateCard();
  document.querySelector('.photo-grid__list').prepend(cardElement);
})


const formValidatorAdd = new FormValidator(listElementsOfForm, '.popup__form_add');
formValidatorAdd.enableValidation();

const formValidatorEdit = new FormValidator(listElementsOfForm, '.popup__form_edit');
formValidatorEdit.enableValidation();
