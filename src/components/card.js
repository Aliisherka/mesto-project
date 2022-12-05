import { openPopup, closePopup } from './modal.js'

const imagePopup = document.querySelector('#image-popup');
const textImagePopup = document.querySelector('#textImage-popup');

const placeNameInput = document.querySelector('#placeName');
const linkInput = document.querySelector('#link');
export const sectionElements = document.querySelector('.elements'); //место карточек
export const popupAddPlace = document.querySelector('#add-place'); // попап добавление карточки
export const popupOpenImage = document.querySelector('#open-image'); //попап с картинками



export const initialCards = [
    {
      place: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      place: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      place: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      place: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      place: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      place: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

export const elementTemplate = document.querySelector('#elementTemplate').content;


export function addCard(link, place) {
  const elementCard = elementTemplate.querySelector('.element').cloneNode(true);
  const elementImage = elementCard.querySelector('.element__image');

  elementCard.querySelector('.button-like').addEventListener('click', function(evt){
    evt.target.classList.toggle('button-like_active');
  });

  elementCard.querySelector('.trash-button').addEventListener('click', function(){
    elementCard.remove();
  });

  elementImage.addEventListener('click', function(){
    imagePopup.src = link; 
    textImagePopup.textContent = place;
    openPopup(popupOpenImage);
  });

  elementImage.src = link;
  elementCard.querySelector('.element__text').textContent = place;
  elementImage.alt = place;

  return elementCard;
}

export function hadnleSubmitCardForm (evt) {
  evt.preventDefault(); 
  
  sectionElements.prepend(addCard(linkInput.value, placeNameInput.value));
  closePopup(popupAddPlace);
}
