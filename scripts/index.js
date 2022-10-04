const popupEditPofile = document.querySelector('#edit-profile'); // открытие/закрытие попап редактирования
const profileEditButton = document.querySelector('.edit-button');
const popupCloseButton = document.querySelector('.close-button');
const popupAddPlace = document.querySelector('#add-place'); // попап добавление карточки
const profileAddButton = document.querySelector('.add-button');
const popupCloseAddButton = document.querySelector('#closeButton');
const formElement = document.querySelector('.form'); //форма редактирования профиля
const nameInput = formElement.querySelector('#name');
const jobInput = formElement.querySelector('#information');
const profileName = document.querySelector('.profile__name'); //инфо профиля
const profileJob = document.querySelector('.profile__text');
const sectionElements = document.querySelector('.elements'); //место карточек
const formAdd = document.querySelector('#form-add'); //форма карточек
const placeNameInput = document.querySelector('#placeName');
const linkInput = document.querySelector('#link');
const popupOpenImage = document.querySelector('#open-image'); //открытие/закрытие попап с картинками
const popupCloseImage = document.querySelector('#close-image');
const imagePopup = document.querySelector('#image-popup');
const textImagePopup = document.querySelector('#textImage-popup');
const elementTemplate = document.querySelector('#elementTemplate').content;


function openPopup(item) {
  item.classList.add('popup_opened');
} 

function closePopup(item) {
  item.classList.remove('popup_opened');
} 

profileEditButton.addEventListener('click', function () {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupEditPofile);
}); 

popupCloseButton.addEventListener('click', function() {
  closePopup(popupEditPofile);
});

profileAddButton.addEventListener('click', function() {
    openPopup(popupAddPlace);
});

popupCloseAddButton.addEventListener('click', function() {
    closePopup(popupAddPlace);
});

function handleSubmitProfileForm (evt) {
  evt.preventDefault(); 

  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;

  closePopup(popupEditPofile);
}

formElement.addEventListener('submit', handleSubmitProfileForm);

function addCard(link, place) {
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


initialCards.forEach(function (elm) {
  sectionElements.append(addCard(elm.link, elm.place, elm.place));
});

popupCloseImage.addEventListener('click', function(){
  closePopup(popupOpenImage);
});

function hadnleSubmitCardForm (evt) {
evt.preventDefault(); 

sectionElements.prepend(addCard(linkInput.value, placeNameInput.value));
closePopup(popupAddPlace);
}

formAdd.addEventListener('submit', hadnleSubmitCardForm);

popupCloseImage.addEventListener('click', function(){
  closePopup(popupOpenImage);
});
    
