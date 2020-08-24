window.addEventListener('DOMContentLoaded', () => {
    document.body.onscroll = () => {
        document.querySelector('.main-arrow').classList.add('hide');
        document.body.onscroll = null;
    };
});