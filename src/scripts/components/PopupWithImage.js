import Popup from "./popup.js";
export default class PopupWithImage extends Popup {
  constructor(popupSelector, { imageSelector, captionSelector }) {
    super(popupSelector);
    this._imageSelector = imageSelector;
    this._captionSelector = captionSelector;
  }

  open(data) {
    super.open();
    const viewImage = this._popup.querySelector(this._imageSelector);
    const viewImageCaption = this._popup.querySelector(this._captionSelector);
    viewImage.src = data.link;
    viewImage.alt = data.name;
    viewImageCaption.textContent = data.name;
  };
}

