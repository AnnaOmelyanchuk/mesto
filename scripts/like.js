let currentConditionArray = [];
let onclickTarget;

function photogrid__captionCunt() {                                   //cunt index
  if (onclickTarget.classList[0] == 'photo-grid__caption-image') {
    let li = onclickTarget.parentElement;
    let nodes = Array.from(li.closest('ul').children); // массив всех детей ul
    let index = nodes.indexOf(onclickTarget.parentElement.parentElement); // индекс li
    currentConditionArray.length = nodes.length; //длинна массива
    for (let i = 0; i < currentConditionArray.length; i++) {
      if (currentConditionArray[i] == undefined) currentConditionArray[i] = 0;
  }
    return index;
  }
}

function photogrid__captionEvent() {
  photogrid__captionCunt();
  if (onclickTarget.classList[0] == 'photo-grid__caption-image')

    if (currentConditionArray[photogrid__captionCunt()] == 0) {
      onclickTarget.classList.add("photo-grid__caption-image_background_active");
      currentConditionArray[photogrid__captionCunt()] = 1;
    }
    else {
      onclickTarget.classList.remove("photo-grid__caption-image_background_active");
      currentConditionArray[photogrid__captionCunt()] = 0;
    }
}

document.addEventListener("click", event => onclickTarget = event.target);
document.addEventListener("click", event => photogrid__captionEvent());

