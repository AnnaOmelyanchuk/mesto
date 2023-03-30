const cardImage = document.querySelector('#cardImage').content.querySelector('.photo-grid__item'); //  шаблон и  разметка карточки
const photoGridList = document.querySelector('.photo-grid__list'); //место вставки темплейта
const popupImage = document.querySelector('.popup_image-viewer');

const profileName = document.querySelector('.profile__name');
const profileCaption = document.querySelector('.profile__caption');
const jobInput = document.querySelector('.popup__input_text_caption');
const nameInput = document.querySelector('.popup__input_text_name');
const linkInput = document.querySelector('.popup__input_img_link');
const imageNameInput = document.querySelector('.popup__input_img_name');
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


//создать карточки
function createNewCard(infoCard) {
  const cardImageTemplate = cardImage.cloneNode(true);   //копирование разметки шаблона
  const imageElement = cardImageTemplate.querySelector('.photo-grid__image');
  const captionElement = cardImageTemplate.querySelector('.photo-grid__caption');
  imageElement.src = infoCard.link;
  imageElement.alt = infoCard.name;
  captionElement.textContent = infoCard.name;

  cardImageTemplate.querySelector('.photo-grid__caption-image').addEventListener('click', (e) =>
    e.target.classList.toggle('photo-grid__caption-image_background_active'))            //target — ссылка на объект, которым было инициировано событие

  cardImageTemplate.querySelector('.photo-grid__button-delete').addEventListener('click', () =>
    deleteImageCard(cardImageTemplate));

  imageElement.addEventListener('click', () => chooseImage(infoCard));

  return cardImageTemplate;  //Функция createNewCard должна только возвращать карточку
}



//удалить карточки
function deleteImageCard(card) {
  card.remove();
}

initialCards.reverse().forEach((element) => {
  photoGridList.prepend(createNewCard(element));
})



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
  photoGridList.prepend(createNewCard({ link: linkInput.value, name: imageNameInput.value }));
  closePopup(popupAddImage);
}


function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

function chooseImage(infoCard) {
  openPopup(popupImage);
  viewImage.src = infoCard.link;
  viewImage.alt = infoCard.name;
  viewImageCaption.textContent = infoCard.name;
}

openEditButton.addEventListener('click', () => { openPopup(popupEdit), feelUpInput() });
openAddImageButton.addEventListener('click', () => openPopup(popupAddImage));

closeEditButton.addEventListener('click', () => closePopup(popupEdit));
closeAddImageButton.addEventListener('click', () => closePopup(popupAddImage));
closeImageViewer.addEventListener('click', () => closePopup(popupImageViewer));

formEditElement.addEventListener('submit', handleFormEditSubmit);
formAddElement.addEventListener('submit', handleFormAddSubmit);


//закрываем от оверлей
const closeOverlayPopupList = Array.from(document.querySelectorAll(`.popup`));
closeOverlayPopupList.forEach((popup) => {
  popup.addEventListener('click', () => closePopup(popup),
    popup.querySelector('.popup__reletive-block').addEventListener('click', (e) => e.stopPropagation()));
});

//закрываем от esc
const closeEscPopupList = Array.from(document.querySelectorAll(`.popup`));
closeOverlayPopupList.forEach((popup) => {
  addEventListener('keydown', (e) => { if (e.key === "Escape") closePopup(popup) });
});
