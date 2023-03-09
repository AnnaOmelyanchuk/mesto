let nameInput = document.querySelector('.popup__input_text_name');
let jobInput = document.querySelector('.popup__input_text_caption');
let profileName = document.querySelector('.profile__name');
let profileCaption = document.querySelector('.profile__caption');
const editButton = document.querySelector('button');
const closeButton = document.querySelector('.popup__close-btn');
const formElement = document.querySelector('.popup__form');

function openForm() {
  document.querySelector(".popup").classList.add("popup_opened");
  nameInput.value = profileName.textContent;
  jobInput.value = profileCaption.textContent;
}

function closeForm() {
  document.querySelector(".popup").classList.remove("popup_opened");
}



function handleFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.

  profileName.textContent = nameInput.value;
  profileCaption.textContent = jobInput.value;
  closeForm();
}


formElement.addEventListener('submit', handleFormSubmit);
editButton.addEventListener("click", event => openForm());
closeButton.addEventListener("click", event => closeForm());

