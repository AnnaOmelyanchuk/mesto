let nameInput = document.querySelector('.popup__input_text_name');
let jobInput = document.querySelector('.popup__input_text_caption');
let profileName = document.querySelector('.profile__name');
let profileCaption = document.querySelector('.profile__caption');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');
const closeButton = document.querySelector('.popup__close-btn'); // кнопка закрытия для форм
const closeButtonPopupImage = document.querySelector('.popup-image__close-btn'); // кнопка закрытия картинок
const deleteButton = document.querySelector('.photo-grid__button-delete');
const formElement = document.querySelector('.popup__form');
let determinantOfFuntion = null; //переменная узнать какой попап открыт
let onclickDelete; //переменная какая именно кнопка удаляет


function openFormEdit() {
  document.querySelector(".popup").classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  jobInput.value = profileCaption.textContent;
  determinantOfFuntion = "openFormEdit";
}

function openFormAdd() {
  document.querySelector(".popup").classList.add("popup_opened");
  nameInput.value = null;
  jobInput.value = null;
  nameInput.placeholder = "Название";
  jobInput.placeholder = "Ссылка на картинку";
  determinantOfFuntion = "openFormAdd";
}

function openPopupImage() {
  document.querySelector(".popup-image").classList.add("popup-image_opened");
  const nodes = Array.from(onclickDelete.parentElement.closest('ul').children); // массив всех детей ul
  const index = nodes.indexOf(onclickDelete.parentElement); // индекс img
  const listItem = document.querySelector('.photo-grid__list').querySelectorAll('img')[index]; // что будем показывать
  document.querySelector('.popup-image__image').src = listItem.src;
  const captionImage = document.querySelector('.photo-grid__list').querySelectorAll('.photo-grid__caption')[index]; // что будем показывать
  document.querySelector('.popup-image__caption').textContent = captionImage.textContent; // подпись под картинкой

}

function closeForm() {
  document.querySelector(".popup").classList.remove("popup_opened");
}

function closePopupImage() {
  document.querySelector(".popup-image").classList.remove("popup-image_opened");

}


function handleFormSubmit(evt) {
  if (determinantOfFuntion == "openFormEdit") {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    profileName.textContent = nameInput.value;
    profileCaption.textContent = jobInput.value;
    closeForm();
  }
}

function handleFormAddSubmit(evt) {
  if (determinantOfFuntion == "openFormAdd") {
    evt.preventDefault();
    photoGridList.firstChild.before(photoGridList.firstElementChild.cloneNode(true)); // вставляем node
    let newElement = photoGridList.firstElementChild; // наш новый элемент
    newElement.querySelector('img').src = jobInput.value;
    newElement.querySelector('.photo-grid__caption').textContent = nameInput.value;
    newElement.querySelector('.photo-grid__caption-image').classList.remove("photo-grid__caption-image_background_active");
    currentConditionArray.unshift(0); //изменяем массив, в котором храниться инфа о лайках (like.js)
    closeForm();
  }
}

function deleteImageCard() {
  const nodes = Array.from(onclickDelete.parentElement.closest('ul').children); // массив всех детей ul
  const index = nodes.indexOf(onclickDelete.parentElement); // индекс li
  const listItem = document.querySelector('.photo-grid__list').querySelectorAll('li')[index]; // что будем удалять
  listItem.remove();
  if (index == 0) {
    currentConditionArray.splice(index, 1); //изменяем массив, в котором храниться инфа о лайках (like.js)
  }
  else {
    currentConditionArray.splice(index, index); //изменяем массив, в котором храниться инфа о лайках (like.js)
  }
}

//вызовы функций

formElement.addEventListener('submit', handleFormSubmit);
formElement.addEventListener('submit', handleFormAddSubmit);
editButton.addEventListener("click", event => openFormEdit());
closeButton.addEventListener("click", event => closeForm());
closeButtonPopupImage.addEventListener("click", event => closePopupImage());
addButton.addEventListener("click", event => openFormAdd());

//удаление карты с изображением
document.addEventListener("click", event => {
  if (event.target.classList[0] == 'photo-grid__button-delete') {
    onclickDelete = event.target;
    deleteImageCard();
  }
});

//открытие попап изображения
document.addEventListener("click", event => {
  if (event.target.classList[0] == 'photo-grid__image') {
    onclickDelete = event.target;
    openPopupImage();
  }
});
