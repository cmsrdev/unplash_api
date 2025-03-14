import './styles/global/style.scss';
import createHeader from './styles/layout/header/header';
import createMain from './styles/layout/main/gallery/gallery';
import createFooter from './styles/layout/footer/footer';

const $app = document.querySelector('#app');

const createBaseStructure = () => {
  const $header = document.createElement('header');
  $app.appendChild($header);
  const $main = document.createElement('main');
  $app.appendChild($main);
  const $footer = document.createElement('footer');
  $app.appendChild($footer);
};

createBaseStructure();
createHeader();
createMain();
createFooter();
