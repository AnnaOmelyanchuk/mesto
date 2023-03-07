let onclickTargetPopup;
let nameInput;
let jobInput;


function openForm() {
  if (onclickTargetPopup.classList[0] == 'profile__edit-button') {
    document.querySelector(".popup").classList.add("popup_opened");
  }
}

function closeForm() {
  if (onclickTargetPopup.classList[0] == 'popup__close-btn')
    document.querySelector(".popup").classList.remove("popup_opened");
}



function handleFormSubmit(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.
  nameInput = document.querySelector('.popup__input-name');
  jobInput = document.querySelector('.popup__input-caption');
  document.querySelector('.profile__name').innerText = nameInput.value;
  document.querySelector('.profile__caption').innerText = jobInput.value;
  document.querySelector(".popup").classList.remove("popup_opened");
}


document.addEventListener('submit', handleFormSubmit);
document.addEventListener("click", event => { onclickTargetPopup = event.target; openForm(); closeForm() });

