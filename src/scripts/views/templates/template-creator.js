import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto) => `
    <h1 class="resto__title">${resto.name}</h1>
    <img class="resto__poster" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" />
    <div class="resto__info">
        <h3>Information</h3>
        <h4>City</h4>
        <p>${resto.city}</p>
        <h4>Address</h4>
        <p>${resto.address}</p>
        <h4>Rating</h4>
        <p>${resto.rating}</p>
    </div>
`;

const createRestoItemTemplate = (resto) => `
    <div class="resto-item">
        <div class="resto-item__header">
            <img class="resto-item__header__poster" alt="${resto.name}"
                src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}">
            <div class="resto-item__header__rating">
                <p>⭐️<span class="resto-item__header__rating__score">${resto.rating}</span></p>
            </div>
        </div>
        <div class="resto-item__content">
            <h3><a href="${`/#/detail/${resto.id}`}">${resto.name}</a></h3>
            <p>${resto.description}</p>
        </div>
    </div>
`;

export {
  createRestoDetailTemplate,
  createRestoItemTemplate,
};