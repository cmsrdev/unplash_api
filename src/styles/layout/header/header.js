import './header.scss';

const headerTemplate = () => {
    return `
        <a id='main_logo' href='#'><img src='./logo_pinteres.png' alt='Pinterest Logo'/></a>
        <nav id='left_menu'>
            <ul>
                <li><a href='#'>Inicio</a></li>
                <li><a href='#'>Explorar</a></li>
                <li><a href='#'>Crear</a></li>
            </ul>
        </nav>
        <div id='search'>
            <input id='search_input' type='text' placeholder='Buscar'/>
            <button id='search_btn'><img src='./assets/header/search_logo.png' alt='Search Logo'/></button>
        </div>
        <nav id='right_menu'>
            <ul>
                <li><a href='#'><img src='./assets/header/icon_bell.png' alt='Bell Icon'/></a></li>
                <li><a href='#'><img src='./assets/header/icon_comment_dots.png' alt='Comment Icon'/></a></li>
                <li><a href='#'>D</a></li>
            </ul>
        </nav>
    `;
};

const createHeader = () => {
    const $header = document.querySelector('header');
    $header.innerHTML = headerTemplate();
};
export default createHeader;