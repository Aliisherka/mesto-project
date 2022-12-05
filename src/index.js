import './pages/index.css';

import { enableValidation } from './components/validate.js'
enableValidation();

import { openPopup, closePopup } from './components/modal.js'

const popupEditPofile = document.querySelector('#edit-profile'); // попап редактирования

const formAdd = document.querySelector('#form-add'); //форма для добавления мест

const formElement = document.querySelector('.form'); //форма редактирования профиля
const nameInput = formElement.querySelector('#name');
const jobInput = formElement.querySelector('#information');
const profileName = document.querySelector('.profile__name'); //инфо профиля
const profileJob = document.querySelector('.profile__text');

const closeBtn = document.querySelectorAll('.close-button'); // кнопка закрытия
const profileEditButton = document.querySelector('.edit-button'); //кнопка изменения профиля
const profileAddButton = document.querySelector('.add-button'); //кнопка добавления мест

const popupOverlay = document.querySelectorAll('.popup__overlay'); //фон

closeBtn.forEach((item) => { //закрытие всех попап
  item.addEventListener('click', function() {
      closePopup(popupEditPofile);
      closePopup(popupAddPlace);
      closePopup(popupOpenImage);
    });
});

document.addEventListener('keydown', function (evt) { //закрытие через esc
  if (evt.key === 'Escape') {
    closePopup(popupEditPofile);
    closePopup(popupAddPlace);
    closePopup(popupOpenImage);
  }
});

popupOverlay.forEach((item) => {  //закрытие overlay
  item.addEventListener('click', function () {
    closePopup(popupEditPofile);
    closePopup(popupAddPlace);
    closePopup(popupOpenImage);
  });
});

profileEditButton.addEventListener('click', function () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupEditPofile);
}); 

profileAddButton.addEventListener('click', function() {
  openPopup(popupAddPlace);
});

function handleSubmitProfileForm (evt) {
  evt.preventDefault(); 

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  closePopup(popupEditPofile);
}

formElement.addEventListener('submit', handleSubmitProfileForm);


import { hadnleSubmitCardForm, initialCards, sectionElements, addCard, popupAddPlace, popupOpenImage } from './components/card.js'

initialCards.forEach(function (elm) {
  sectionElements.append(addCard(elm.link, elm.place, elm.place));
});

formAdd.addEventListener('submit', hadnleSubmitCardForm);