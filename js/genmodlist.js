loadJSON('../assets/modlist.json')
.then(json => {
    const modlist = json;
    htmloutput = '<!-- The following is automatically generated -->\n';

    modlist.forEach(({ name, link, author, authorLink, downloads, logo, description, categories }) => {
        htmloutput += `<div class="panel mod-panel">\n<div class="panel-header text-center columns"><div class="column col-3"><img src="${logo}" alt="Logo" class="mod-logo"></div><div class="column col-9 text-left"><div class="panel-title h5 mt-10">${name}</div><div class="panel-subtitle">by <a href="${authorLink}">${author}</a></div></div></div><div class="panel-body"><div class="accordion"><input type="checkbox" id="accordion-mod-${++uniqueaccid}" name="accordion-checkbox" hidden><label class="accordion-header" for="accordion-mod-${uniqueaccid}"><div class="divider text-left" data-content="Click to view more"></div> </label><div class="accordion-body text-left"><p style="margin-bottom:inherit">${description}</p><p class="text-small">Downloads: ${formatNumber(downloads)}</p><div class="line-space-small"></div><div class="text-center">${(() => { let output = ''; categories.forEach(category => { output += `<label class="chip">${category.name}</label>\n` }); return output })()}</div></div></div></div><div class="panel-footer"><a href="${link}" class="btn btn-primary btn-block">View on CurseForge</a></div></div>\n`
    });

    htmloutput += '<!-- This is the end of automatic generation -->\n';
    switch (document.readyState) {
        case 'complete':
        case 'interactive': 
            loadModlist();
            break;
        case 'loading':
            window.addEventListener('DOMContentLoaded', loadModlist);
            break;
        default:
            console.error('document.readyState is none of the following values: "complete", "interactive", "loading"');
            break;
    }
})
.catch(err => {
    console.error(err);
});

var htmloutput,
    uniqueaccid = 0;

function formatNumber(n) {
    let suffix = ['', 'k', 'm', 'b', 't'],
        index = Math.max(
            0,
            Math.min(
                suffix.length - 1,
                Math.floor(
                    n == 0 ?
                        0 : Math.log10(
                            Math.abs(n)
                        ) / 3
                )
            )
        );

    return `${Math.floor(n / 10 ** (3 * index))}${suffix[index]}`;
}

function loadJSON(path) {
    return new Promise((resolve, reject) => {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    reject(xhr);
                }
            }
        };
        xhr.open("GET", path, true);
        xhr.send();
    });
}

function loadModlist() {
    const modlistNode = document.querySelector('#mod-list');
    modlistNode.innerHTML = htmloutput;
    return modlistNode;
}