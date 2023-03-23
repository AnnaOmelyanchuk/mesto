const cardImage = document.querySelector('#cardImage'); // темплейт
const photoGridList = document.querySelector('.photo-grid__list'); //место вставки темплейта



//создать карточки
function createNewCard(newCard) {
  const cardImageTemplate = newCard.content;
  const cardImageElement = cardImageTemplate.children[0].cloneNode(true);
  photoGridList.prepend(cardImageElement);

  cardImageElement.querySelector('.photo-grid__caption-image').addEventListener('click', () =>
    cardImageElement.querySelector('.photo-grid__caption-image').classList.toggle('photo-grid__caption-image_background_active'))

  cardImageElement.querySelector('.photo-grid__button-delete').addEventListener('click', () =>
    deleteImageCard(cardImageElement.querySelector('.photo-grid__button-delete')));

  cardImageElement.querySelector('.photo-grid__image').addEventListener('click', () => { openPopup(popupImageViewer); chooseImage(cardImageElement.querySelector('.photo-grid__image')) });
}



//удалить карточки
function deleteImageCard(button) {
  button.closest('li').remove();
}

//инициация
initialCards.reverse().forEach((element) => {
  templateCurrent = cardImage;
  templateCurrent.content.querySelector('img').src = element.link;
  templateCurrent.content.querySelector('img').alt = element.name;
  templateCurrent.content.querySelector('.photo-grid__caption').textContent = element.name;
  createNewCard(templateCurrent);
})

let profileName = document.querySelector('.profile__name');
let profileCaption = document.querySelector('.profile__caption');
let jobInput = document.querySelector('.popup__input_text_caption');
let nameInput = document.querySelector('.popup__input_text_name');
let linkInput = document.querySelector('.popup__input_img_link');
let imageNameInput = document.querySelector('.popup__input_img_name');

const closeEditButton = document.querySelector('.popup__close-btn_edit'); // кнопка закрытия для формы редактирования
const closeAddImageButton = document.querySelector('.popup__close-btn_add-image'); // кнопка закрытия для формы довавления изображения
const closeImageViewer = document.querySelector('.popup__close-btn_image-viewer'); // закрыть для просмотра изображения
const openEditButton = document.querySelector('.profile__edit-button'); // кнопка открытия для формы редактирования
const openAddImageButton = document.querySelector('.profile__add-button'); // кнопка открытия для формы довавления изображения
const popupEdit = document.querySelector('.popup_edit');
const popupAddImage = document.querySelector('.popup_add-image');
const popupImageViewer = document.querySelector('.popup_image-viewer');
const formEditElement = document.querySelector('.popup__form_edit');
const formAddElement = document.querySelector('.popup__form_add');
const viewImage = document.querySelector('.popup__image');
const viewImageCaption = document.querySelector('.popup__caption');

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
  templateCurrent = cardImage;
  templateCurrent.content.querySelector('img').src = linkInput.value;
  templateCurrent.content.querySelector('img').alt = imageNameInput.value;
  templateCurrent.content.querySelector('.photo-grid__caption').textContent = imageNameInput.value;
  createNewCard(templateCurrent);
  closePopup(popupAddImage);
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

function chooseImage(img) {
  viewImage.src = img.src;
  viewImage.alt = img.alt;
  viewImageCaption.textContent = img.alt;
}

openEditButton.addEventListener('click', () => openPopup(popupEdit), feelUpInput());
openAddImageButton.addEventListener('click', () => openPopup(popupAddImage));

closeEditButton.addEventListener('click', () => closePopup(popupEdit));
closeAddImageButton.addEventListener('click', () => closePopup(popupAddImage));
closeImageViewer.addEventListener('click', () => closePopup(popupImageViewer));

formEditElement.addEventListener('submit', handleFormEditSubmit);
formAddElement.addEventListener('submit', handleFormAddSubmit);


