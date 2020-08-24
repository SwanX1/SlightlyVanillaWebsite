window.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.main-arrow').classList.remove('hide-opacity');
    document.body.onscroll = () => {
        if (document.body.parentNode.scrollTop === 0) {
            document.querySelector('.main-arrow').classList.remove('hide-opacity');
        } else {
            document.querySelector('.main-arrow').classList.add('hide-opacity');
        }
    };
});