const editPofile = document.querySelector('#edit-profile');
const editButton = document.querySelector('.edit-button');
const closeButton = document.querySelector('.close-button');

function openPopup(item) {
  item.classList.add('popup_opened');
}

function closePopup(item) {
  item.classList.remove('popup_opened');
}

editButton.addEventListener('click', function () {
  openPopup(editPofile);
});

closeButton.addEventListener('click', function() {
  closePopup(editPofile);
});

const addPlace = document.querySelector('#add-place');
const addButton = document.querySelector('.add-button');
const closeAddButton = document.querySelector('#closeButton');

addButton.addEventListener('click', function() {
    openPopup(addPlace);
});

closeAddButton.addEventListener('click', function() {
    closePopup(addPlace);
});

const formElement = document.querySelector('.form');
const nameInput = formElement.querySelector('#name');
const jobInput = formElement.querySelector('#information');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__text');

function formSubmitHandler (evt) {
    evt.preventDefault(); 

    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
}

formElement.addEventListener('submit', formSubmitHandler);

nameInput.value = profileName.textContent;
jobInput.value = profileJob.textContent;

const sectionElements = document.querySelector('.elements');

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
    ];

const elementTemplate = document.querySelector('#elementTemplate').content;

initialCards.forEach(function (elm) {
  const elementCard = elementTemplate.querySelector('.element').cloneNode(true);

    elementCard.querySelector('.button-like').addEventListener('click', function(evt){
        evt.target.classList.toggle('button-like_active');
    });

    elementCard.querySelector('.element__text').textContent = elm.name;
    elementCard.querySelector('.element__image').src = elm.link; 
    sectionElements.append(elementCard);

    elementCard.querySelector('.trash-button').addEventListener('click', function(){
      elementCard.remove();
    });

    const openImage = document.querySelector('#open-image');
    const closeImage = document.querySelector('#close-image');
    elementCard.querySelector('.element__image').addEventListener('click', function(evt){
      document.querySelector('#image-popup').src = evt.target.getAttribute('src');
      document.querySelector('#textImage-popup').textContent = evt.target.nextElementSibling.firstElementChild.textContent;
      openPopup(openImage);
    });

   closeImage.addEventListener('click', function(){
      closePopup(openImage);
    });
});

const formAdd = document.querySelector('#form-add');
const placeNameInput = document.querySelector('#placeName');
const linkInput = document.querySelector('#link');

function formSubmitAdd (evt) {
  evt.preventDefault(); 
  const elementCard = elementTemplate.querySelector('.element').cloneNode(true);

  elementCard.querySelector('.element__text').textContent = placeNameInput.value;
  elementCard.querySelector('.element__image').src = linkInput.value

  elementCard.querySelector('.button-like').addEventListener('click', function(evt){
    evt.target.classList.toggle('button-like_active');
  });
  elementCard.querySelector('.trash-button').addEventListener('click', function(){
    elementCard.remove();
  });
  const openImage = document.querySelector('#open-image');
    const closeImage = document.querySelector('#close-image');
    elementCard.querySelector('.element__image').addEventListener('click', function(evt){
      document.querySelector('#image-popup').src = evt.target.getAttribute('src');
      document.querySelector('#textImage-popup').textContent = evt.target.nextElementSibling.firstElementChild.textContent;
      openPopup(openImage);
    });

   closeImage.addEventListener('click', function(){
      closePopup(openImage);
    });

  sectionElements.prepend(elementCard);
}

formAdd.addEventListener('submit', formSubmitAdd);

    
