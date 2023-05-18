export default class UserInfo {
  constructor({ nameSelector, infoSelector }) {
    this._userNameNode = document.querySelector(nameSelector);
    this._userInfoNode = document.querySelector(infoSelector);
  }
  getUserInfo() {
    this.userName = this._userNameNode.textContent;
    this.userInfo = this._userInfoNode.textContent;
    return { name: this.userName, info: this.userInfo }
  }
  setUserInfo({ name, about }) {
    this._userNameNode.textContent = name;
    this._userInfoNode.textContent = about;
  }

}
