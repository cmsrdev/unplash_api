import './footer.scss';

const footerTemplate = () => {
    return `
        <h3>Copyright &#169 2025 - cmsr.dev</h3>
    `;
};

const createFooter = () => {
    const $footer = document.querySelector('footer');
    $footer.innerHTML = footerTemplate();
};
export default createFooter;