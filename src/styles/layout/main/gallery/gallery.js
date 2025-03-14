import './gallery.scss';
import mainTemplate from '../main';
import searchPhotos from '../../../../api/api';

const cardsTemplates = (card) => {
    return `
        <li class='card_container'>
            <div class='background_container' style='background-image: url(${card.urls.regular})'>
                <div class='camera_icon_container'>
                    <a href='#'>
                        <img class='camera_icon' alt='Camera Icon' src='./assets/gallery/icon_camera.png'/>
                        <p>+${card.user.total_photos}</p>
                    </a>
                </div>
                <div class='heart_icon_container'>
                    <a href='#'>
                        <img class='heart_icon' alt='Heart Icon' src='./assets/gallery/emoji_heavy_black_heart.png'/>
                        <p>${card.likes}</p>
                    </a>
                </div>
                <div class='photographer_img_container'>
                    <a href='${card.user.links.html}' target='_blank'>
                        <img class='photographer_img' alt='Photographer Image' src='${card.user.profile_image.large}' style='border: 4px solid ${card.color}'/>
                    </a>
                </div>
                <a class='link' href='${card.urls.full}' target='_blank'>Visitar</a>
            </div>
            <div class='info'>
                <p>${card.user.name}</p>
                <div class='date'>
                    <a href='#'>
                        <img class='upload_icon' alt='Upload Icon' src='./assets/gallery/icon_upload_share.png'/>
                    </a>
                    <p>${card.created_at.split('T')[0].replaceAll('-', '/')}</p>
                </div>
            </div>
        </li>
    `;
};

const printCards = (cards) => {
    const $main = document.querySelector('main');
    $main.innerHTML = mainTemplate();
    const $gallery = document.querySelector('#gallery');
    $gallery.innerHTML = '';
    for (const card of cards) {
        $gallery.innerHTML += cardsTemplates(card);
    };
};

const printErrorCards = (cards) => {
    const $main = document.querySelector('main');
    $main.innerHTML = `
        <h2 class='error_paragrahp'>Hemos tenido problemas en tu busqueda, te mostramos resultados de gatos.Intenta buscar otra cosa</h2>
        <div id='grid_container'>
            <ul id='gallery'></ul>
        </div>
    `;
    const $gallery = document.querySelector('#gallery');
    $gallery.innerHTML = '';
    for (const card of cards) {
        $gallery.innerHTML += cardsTemplates(card);
    };
};

const inputEvent = async () => {
    const $input = document.querySelector('#search_input');
    const $button = document.querySelector('#search_btn');

    const printHtmlTemplate = async () =>{
        const images = await searchPhotos($input.value);
        printCards(images.response.results);

        if(images.response.total === 0){
            const images = await searchPhotos('cat');
            printErrorCards(images.response.results);
        }
        $input.value = '';
    }
    
    $button.addEventListener('click', printHtmlTemplate);
    $input.addEventListener('keydown', (e) => {
        if(e.key === 'Enter'){
            printHtmlTemplate();
        }
    });
};

const createMain = async () => {
    const $main = document.querySelector('main');
    $main.innerHTML = mainTemplate(), inputEvent();

    const images = await searchPhotos('dog');
    printCards(images.response.results);
};
export default createMain