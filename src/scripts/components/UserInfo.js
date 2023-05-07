export default class UserInfo {
  constructor({ nameSelector, infoSelector }) {
    this._nameSelector = nameSelector;
    this._infoSelector = infoSelector;
  }
  getUserInfo() {
    this.userName = document.querySelector(this._nameSelector).textContent;
    this.userInfo = document.querySelector(this._infoSelector).textContent;
    return { name: this.userName, info: this.userInfo }
  }
  setUserInfo({ name, info }) {
    document.querySelector(this._nameSelector).textContent = name;
    document.querySelector(this._infoSelector).textContent = info;
  }

}
