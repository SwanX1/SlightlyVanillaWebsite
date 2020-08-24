window.addEventListener('DOMContentLoaded', () => {
    document.body.onscroll = () => {
        document.querySelector('.main-arrow').classList.add('hide-opacity');
        document.body.onscroll = null;
    };
});