window.addEventListener('DOMContentLoaded', () => {
    let onzeroscroll = false;
    let onmainscroll = false;
    let lastscroll = 0;
    document.querySelector('.main-arrow').classList.remove('hide-opacity');
    document.body.onscroll = e => {
        if (document.documentElement.scrollTop === 0) {
            onzeroscroll = true;
            document.querySelector('.main-arrow').classList.remove('hide-opacity');
        } else {
            if (onzeroscroll) {
                onzeroscroll = false;
                document.querySelector('.main-arrow').classList.add('hide-opacity');
                document.querySelector('#after-hero').scrollIntoView({ behavior: "smooth" });
            }
        }
        if (document.documentElement.scrollTop >= document.querySelector('#after-hero').offsetTop) {
            onmainscroll = true;
        } else {
            if (onmainscroll) {
                onmainscroll = false;
                if (document.documentElement.scrollTop <= lastscroll) {
                    document.body.scrollIntoView({ behavior: "smooth" });
                }
            }
        }
        lastscroll = document.documentElement.scrollTop;
    };
});