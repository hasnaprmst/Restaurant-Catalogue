import UrlParser from '../../routes/url-parser';
import TheRestoDbSource from '../../data/therestodb-source';
import { createRestoDetailTemplate } from '../templates/template-creator';

const Detail = {
  async render() {
    return `
          <div id="resto" class="resto"></div>
          `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await TheRestoDbSource.detailResto(url.id);
    const restoContainer = document.querySelector('#resto');
    restoContainer.innerHTML = createRestoDetailTemplate(resto);

    // FavButtonInitiator.init({
    //   favButtonContainer: document.querySelector('#likeButtonContainer'),
    //   resto: {
    //     id: resto.id,
    //     name: resto.name,
    //     description: resto.description,
    //     pictureId: resto.pictureId,
    //     rating: resto.rating,
    //   },
    // });
  },
};

export default Detail;
