import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popupSelector, { imageSelector, captionSelector }) {
    super(popupSelector);
    this._imageSelector = imageSelector;
    this._captionSelector = captionSelector;
    this._viewImage = this._popup.querySelector(this._imageSelector);
    this._viewImageCaption = this._popup.querySelector(this._captionSelector);
  }

  open(data) {
    super.open();
    this._viewImage.src = data.link;
    this._viewImage.alt = data.name;
    this._viewImageCaption.textContent = data.name;
  };
}

