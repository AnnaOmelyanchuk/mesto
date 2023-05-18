export default class UserAvatar {
  constructor({ imgSelector }) {
    this._userImgNode = document.querySelector(imgSelector);
  }

  setAvatar(link) {
    this._userImgNode.src = link;
  }

}
