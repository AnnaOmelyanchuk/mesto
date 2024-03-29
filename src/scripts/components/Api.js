export default class Api {
  constructor({ baseUrl, cardUrl, avatarUrl, headers, }) {
    this.baseUrl = baseUrl;
    this.cardUrl = cardUrl;
    this.avatarUrl = avatarUrl;
    this.headers = headers;
  }

  getUserInformationMe() {
    return fetch(this.baseUrl, {
      headers: {
        authorization: this.headers.authorization
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }


  getInitialCardsSection() {
    return fetch(this.cardUrl, {
      headers: {
        authorization: this.headers.authorization,
      }
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  setUserNameAbout(data) {
    return fetch(this.baseUrl, {
      method: 'PATCH',
      headers: {
        authorization: this.headers.authorization,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        about: data.about
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  setUserAvatar(data) {
    return fetch(this.avatarUrl, {
      method: 'PATCH',
      headers: {
        authorization: this.headers.authorization,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: data.avatar
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  deleteCard(cardId) {
    return fetch(`${this.cardUrl}/${cardId}`, {
      method: 'DELETE',
      headers: {
        authorization: this.headers.authorization,
        'Content-Type': 'application/json'
      },
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  postCardNameLink(data) {
    return fetch(this.cardUrl, {
      method: 'POST',
      headers: {
        authorization: this.headers.authorization,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: data.name,
        link: data.link
      })
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  deleteLike(data) {
    return fetch(`${this.cardUrl}/${data.cardId}/likes`, {
      method: 'DELETE',
      headers: {
        authorization: this.headers.authorization,
        'Content-Type': 'application/json'
      },
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }

  putLike(data) {
    return fetch(`${this.cardUrl}/${data.cardId}/likes`, {
      method: 'PUT',
      headers: {
        authorization: this.headers.authorization,
        'Content-Type': 'application/json'
      },
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
      });
  }
}
