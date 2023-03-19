const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const photoGridList = document.querySelector('.photo-grid__list');

photoGridList.querySelectorAll('li').forEach(function (value, i) {  // отображаем на странице
  const cardImageTemplate = document.querySelector('#cardImage').content;
  const cardImageElement = cardImageTemplate.querySelector("img").cloneNode(true);
  photoGridList.children[i].prepend(cardImageElement);
});



photoGridList.querySelectorAll("img").forEach(function (value, i) {  // присваиваем ссылки на изображения из initialCards
    value.src = initialCards[i].link;
    value.alt = initialCards[i].name;
});

photoGridList.querySelectorAll(".photo-grid__caption").forEach(function (value, i) {  // присваиваем имена из initialCards
  value.textContent = initialCards[i].name;
});
