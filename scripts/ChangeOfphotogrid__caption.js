let currentConditionArray = [0, 0, 0, 0, 0, 0];


function photogrid__captionCunt() { //cunt index
  if (onclickTarget.classList[0] == 'photo-grid__caption-image') {

    let li = onclickTarget.parentElement;
    let nodes = Array.from(li.closest('ul').children);
    let index = nodes.indexOf(onclickTarget.parentElement.parentElement);
    currentConditionArray.length = nodes.length; //если добавяться картинки

    return index;
  }
}

function photogrid__captionEvent() {
  if (onclickTarget.classList[0] == 'photo-grid__caption-image')

    if (currentConditionArray[photogrid__captionCunt()] == 0) {
      onclickTarget.classList.add("photo-grid__caption-image_background_active");
      onclickTarget.classList.remove("photo-grid__caption-image_background_disabled");
      currentConditionArray[photogrid__captionCunt()] = 1;
    }
    else {
      onclickTarget.classList.remove("photo-grid__caption-image_background_active");
      onclickTarget.classList.add("photo-grid__caption-image_background_disabled");
      currentConditionArray[photogrid__captionCunt()] = 0;
    }
}

let onclickTarget;
document.addEventListener("click", event => onclickTarget = event.target);
document.addEventListener("click", event => photogrid__captionEvent());


