(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,n){if("object"!==t(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var n=function(){function t(e){var n=e.baseUrl,r=e.cardUrl,o=e.avatarUrl,i=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.baseUrl=n,this.cardUrl=r,this.avatarUrl=o,this.headers=i}var n,r;return n=t,(r=[{key:"getUserInformationMe",value:function(){return fetch(this.baseUrl,{headers:{authorization:this.headers.authorization}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"getInitialCardsSection",value:function(){return fetch(this.cardUrl,{headers:{authorization:this.headers.authorization}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"setUserNameAbout",value:function(t){return fetch(this.baseUrl,{method:"PATCH",headers:{authorization:this.headers.authorization,"Content-Type":"application/json"},body:JSON.stringify({name:t.name,about:t.about})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"setUserAvatar",value:function(t){return fetch(this.avatarUrl,{method:"PATCH",headers:{authorization:this.headers.authorization,"Content-Type":"application/json"},body:JSON.stringify({avatar:t.avatar})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"deleteCard",value:function(t){return fetch("".concat(this.cardUrl,"/").concat(t),{method:"DELETE",headers:{authorization:this.headers.authorization,"Content-Type":"application/json"}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"postCardNameLink",value:function(t){return fetch(this.cardUrl,{method:"POST",headers:{authorization:this.headers.authorization,"Content-Type":"application/json"},body:JSON.stringify({name:t.name,link:t.link})}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"deleteLike",value:function(t){return fetch("".concat(this.cardUrl,"/").concat(t.cardId,"/likes"),{method:"DELETE",headers:{authorization:this.headers.authorization,"Content-Type":"application/json"}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}},{key:"putLike",value:function(t){return fetch("".concat(this.cardUrl,"/").concat(t.cardId,"/likes"),{method:"PUT",headers:{authorization:this.headers.authorization,"Content-Type":"application/json"}}).then((function(t){return t.ok?t.json():Promise.reject("Ошибка: ".concat(t.status))}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function r(t){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},r(t)}function o(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==r(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,"string");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===r(i)?i:String(i)),o)}var i}var i=function(){function t(e,n){var r=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=r,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderElements",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&o(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==a(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===a(o)?o:String(o)),r)}var o}var c=function(){function t(e,n,r,o,i,a){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.data=e,this._templateSelector=n,this._handleCardClick=r,this._handleCardDelete=o,this.userId=i,this.changeLike=a}var e,n;return e=t,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".photo-grid__item").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this.likeButton=this._element.querySelector(".photo-grid__caption-image"),this.quantityLike=this._element.querySelector(".photo-grid__quantity-like"),this._cardImage=this._element.querySelector(".photo-grid__image"),this._cardImage.src=this.data.link,this._cardImage.alt=this.data.name,this._element.querySelector(".photo-grid__caption").textContent=this.data.name,this._processingLikes(),this._setEventListeners(),this._element}},{key:"_processingLikes",value:function(){var t=this;this.quantityLike.textContent=this.data.likes.length,this.userId===this.data.owner._id&&(this._element.querySelector(".photo-grid__button-delete").style.display="block"),this.data.likes.forEach((function(e){e._id===t.userId&&t.likeButton.classList.add("photo-grid__caption-image_background_active")}))}},{key:"_setEventListeners",value:function(){var t=this;this._element.querySelector(".photo-grid__caption-image").addEventListener("click",(function(e){return t._toggleLike(e)})),this.userId===this.data.owner._id&&this._element.querySelector(".photo-grid__button-delete").addEventListener("click",(function(){return t._handleCardDelete({card:t._element,cardId:t.data._id})})),this._cardImage.addEventListener("click",(function(){return t._handleCardClick(t.data)}))}},{key:"_toggleLike",value:function(t){this.likeButton.classList.contains("photo-grid__caption-image_background_active")?this.changeLike(!0,{cardId:this.data._id,quantityLike:this.quantityLike},(function(){t.target.classList.toggle("photo-grid__caption-image_background_active")})):this.changeLike(!1,{cardId:this.data._id,quantityLike:this.quantityLike},(function(){t.target.classList.toggle("photo-grid__caption-image_background_active")}))}}])&&u(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function s(t){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function l(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,p(r.key),r)}}function f(t,e,n){return(e=p(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t){var e=function(t,e){if("object"!==s(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===s(e)?e:String(e)}var y=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,"_showInputError",(function(t,e){t.setAttribute("erorMessage","".concat(e))})),f(this,"_hideInputError",(function(t,e){t.setAttribute("erorMessage",""),e.classList.remove("".concat(r._errorClass))})),this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._form=n}var e,n;return e=t,(n=[{key:"enableValidation",value:function(){this._form.addEventListener("submit",(function(t){t.preventDefault()})),this._setEventListeners()}},{key:"_setEventListeners",value:function(){var t=this;this._inputList=Array.from(this._form.querySelectorAll("".concat(this._inputSelector))),this._buttonElement=this._form.querySelector("".concat(this._submitButtonSelector)),this._toggleButtonState(this._inputList,this._buttonElement),this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState(t._inputList,t._buttonElement)}))}))}},{key:"resetValidation",value:function(){var t=this;this._toggleButtonState(this._inputList,this._buttonElement),this._inputList.forEach((function(e){t._hideInputError(e.closest("div").querySelector("".concat(t._inputErrorClass)),e)}))}},{key:"_toggleButtonState",value:function(t,e){this._hasInvalidInput(t)?(e.classList.add("".concat(this._inactiveButtonClass)),e.setAttribute("disabled","true")):(e.classList.remove("".concat(this._inactiveButtonClass)),e.removeAttribute("disabled"))}},{key:"_hasInvalidInput",value:function(t){return t.some((function(t){return!t.validity.valid}))}},{key:"_checkInputValidity",value:function(t){this._errorCaption=t.closest("div").querySelector("".concat(this._inputErrorClass)),t.validity.valid?this._hideInputError(this._errorCaption,t):(t.value,this._showInputError(this._errorCaption,t.validationMessage),t.classList.add("".concat(this._errorClass)),t.validity.typeMismatch&&(this._showInputError(this._errorCaption,t.validationMessage),t.classList.add("".concat(this._errorClass))))}}])&&l(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function d(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==h(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===h(o)?o:String(o)),r)}var o}var v=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}var e,n;return e=t,(n=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){e.target.classList.contains("popup_opened")&&t.close(),e.target.classList.contains("popup__close-btn")&&t.close()}))}}])&&d(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==m(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==m(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===m(o)?o:String(o)),r)}var o}function _(){return _="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=S(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},_.apply(this,arguments)}function g(t,e){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},g(t,e)}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},S(t)}var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&g(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=S(r);if(o){var n=S(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===m(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t,e){var n,r=e.imageSelector,o=e.captionSelector;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._imageSelector=r,n._captionSelector=o,n._viewImage=n._popup.querySelector(n._imageSelector),n._viewImageCaption=n._popup.querySelector(n._captionSelector),n}return e=a,(n=[{key:"open",value:function(t){_(S(a.prototype),"open",this).call(this),this._viewImage.src=t.link,this._viewImage.alt=t.name,this._viewImageCaption.textContent=t.name}}])&&b(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(v);function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function j(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==k(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===k(o)?o:String(o)),r)}var o}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=O(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},E.apply(this,arguments)}function P(t,e){return P=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},P(t,e)}function O(t){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},O(t)}var C=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&P(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=O(r);if(o){var n=O(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===k(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._handleFormSubmit=e,n._inputList=Array.from(n._popup.querySelectorAll("input")),n._inputValues={},n}return e=a,(n=[{key:"_getInputValues",value:function(){var t=this;return this._inputList.forEach((function(e){t._formName=e.getAttribute("name"),t._inputValues[t._formName]=e.value})),this._inputValues}},{key:"setEventListeners",value:function(){var t=this;E(O(a.prototype),"setEventListeners",this).call(this),this.form=this._popup.querySelector(".popup__form"),this.form.addEventListener("submit",(function(e){t._handleFormSubmit({evt:e,data:t._getInputValues()}),t.setTextOnSubmitBtn("Сохранение...")}))}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e,n){e.value=t[n]}))}},{key:"setTextOnSubmitBtn",value:function(t){this.form.querySelector(".popup__save-btn").textContent="".concat(t)}},{key:"close",value:function(){E(O(a.prototype),"close",this).call(this),this.setTextOnSubmitBtn("Сохранение"),this.form.reset()}}])&&j(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(v);function L(t){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},L(t)}function I(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==L(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==L(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===L(o)?o:String(o)),r)}var o}var T=function(){function t(e){var n=e.nameSelector,r=e.infoSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userNameNode=document.querySelector(n),this._userInfoNode=document.querySelector(r)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return this.userName=this._userNameNode.textContent,this.userInfo=this._userInfoNode.textContent,{name:this.userName,info:this.userInfo}}},{key:"setUserInfo",value:function(t){var e=t.name,n=t.about;this._userNameNode.textContent=e,this._userInfoNode.textContent=n}}])&&I(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function q(t){return q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},q(t)}function U(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==q(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==q(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===q(o)?o:String(o)),r)}var o}var B=function(){function t(e){var n=e.imgSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userImgNode=document.querySelector(n)}var e,n;return e=t,(n=[{key:"setAvatar",value:function(t){this._userImgNode.src=t}}])&&U(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function R(t){return R="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},R(t)}function A(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==R(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==R(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key),"symbol"===R(o)?o:String(o)),r)}var o}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=z(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},x.apply(this,arguments)}function N(t,e){return N=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},N(t,e)}function z(t){return z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},z(t)}var V,D=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&N(t,e)}(a,t);var e,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=z(r);if(o){var n=z(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return function(t,e){if(e&&("object"===R(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,t)});function a(t,e){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,t))._handleFormSubmit=e,n._inputList=Array.from(n._popup.querySelectorAll("input")),n._inputValues={},n}return e=a,(n=[{key:"setEventListeners",value:function(){var t=this;x(z(a.prototype),"setEventListeners",this).call(this),this.form=this._popup.querySelector(".popup__form"),this.form.addEventListener("submit",(function(e){t._handleFormSubmit({evt:e}),t.setTextOnSubmitBtn("Удаление...")}))}},{key:"setTextOnSubmitBtn",value:function(t){this.form.querySelector(".popup__save-btn").textContent="".concat(t)}},{key:"close",value:function(){x(z(a.prototype),"close",this).call(this),this.setTextOnSubmitBtn("Да")}},{key:"getCard",value:function(t){var e=t.card,n=t.cardId;this.card=e,this.cardId=n}},{key:"cardId",value:function(){return this.cardId}},{key:"deleteCard",value:function(){this.card.remove()}}])&&A(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),a}(v);function M(t){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},M(t)}function F(t,e,n){return(e=function(t){var e=function(t,e){if("object"!==M(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==M(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===M(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var J=document.querySelector(".profile__edit-button"),H=document.querySelector(".profile__add-button"),G=document.querySelector(".profile__avatar"),K={},Q=0,W=new n((F(V={baseUrl:"https://nomoreparties.co/v1/cohort-66/users/me",cardUrl:"https://mesto.nomoreparties.co/v1/cohort-66/cards",avatarUrl:"https://mesto.nomoreparties.co/v1/cohort-66/users/me/avatar"},"baseUrl","https://nomoreparties.co/v1/cohort-66/users/me"),F(V,"headers",{authorization:"96a78f06-11d7-4e34-a9b2-cad17675fa32"}),V));Promise.all([W.getUserInformationMe(),W.getInitialCardsSection()]).then((function(t){Q=t[0]._id,ot.renderElements(t[1]),nt.setUserInfo(t[0]),rt.setAvatar(t[0].avatar)})).catch((function(t){return console.log("Ошибка.....: ".concat(t))}));var X=new C(".popup_edit",(function(t){var e=t.evt,n=t.data;e.preventDefault(),W.setUserNameAbout(n).then((function(t){nt.setUserInfo(t),X.close()})).catch((function(t){return console.log("Ошибка.....: ".concat(t))}))}));X.setEventListeners();var Y=new C(".popup_add-image",(function(t){var e=t.evt,n=t.data;e.preventDefault(),W.postCardNameLink(n).then((function(t){ot.renderElements([t]),Y.close()})).catch((function(t){return console.log("Ошибка.....: ".concat(t))}))}));Y.setEventListeners();var Z=new C(".popup_edit-avatar",(function(t){var e=t.evt,n=t.data;e.preventDefault(),W.setUserAvatar(n).then((function(t){rt.setAvatar(t.avatar),Z.close()})).catch((function(t){return console.log("Ошибка.....: ".concat(t))}))}));Z.setEventListeners();var $=new D(".popup_confirm",(function(t){t.evt.preventDefault(),W.deleteCard($.cardId).then((function(t){$.deleteCard(),$.close()})).catch((function(t){return console.log("Ошибка.....: ".concat(t))}))}));$.setEventListeners();var tt=new w(".popup_image-viewer",{imageSelector:".popup__image",captionSelector:".popup__caption"});tt.setEventListeners();var et,nt=new T({nameSelector:".profile__name",infoSelector:".profile__caption"}),rt=new B({imgSelector:".profile__avatar-img"}),ot=new i({renderer:function(t){ot.addItem(function(t){return new c(t,"#cardImage",it,at,Q,ut).generateCard()}(t))}},".photo-grid__list");function it(t){tt.open(t)}function at(t){var e=t.card,n=t.cardId;$.open(),$.getCard({card:e,cardId:n})}function ut(t,e,n){t?W.deleteLike(e).then((function(t){e.quantityLike.textContent=t.likes.length,n()})).catch((function(t){return console.log("Ошибка.....: ".concat(t))})):W.putLike(e).then((function(t){e.quantityLike.textContent=t.likes.length,n()})).catch((function(t){return console.log("Ошибка.....: ".concat(t))}))}J.addEventListener("click",(function(){var t,e,n;X.open(),e=(t=nt.getUserInfo()).info,n=t.name,X.setInputValues([n,e]),K.bioEdit.resetValidation()})),H.addEventListener("click",(function(){Y.open(),K.placeAdd.resetValidation()})),G.addEventListener("click",(function(){Z.open(),K.editAvatar.resetValidation()})),et={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-btn",inactiveButtonClass:"popup__save-btn_state_inactive",inputErrorClass:".popup__error-caption_place_name",errorClass:"popup__input_type_error"},Array.from(document.querySelectorAll(et.formSelector)).forEach((function(t){var e=new y(et,t),n=t.getAttribute("name");K[n]=e,e.enableValidation()}))})();