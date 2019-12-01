// answer scrapper
let res = {};
let cur = undefined;
let isPrevH3 = false;
document.querySelector('.post-single-content .thecontent').childNodes.forEach(e => {
    if (e.tagName == 'H3') {
        if (isPrevH3) {
            cur += ' ' + e.innerText;
        } else {
            cur = parseInt(e.innerText) == NaN ? e.innerText : e.innerText.split(' ').slice(1).join(' ').trim();
        }
        isPrevH3 = true;
    }
    else if (e.tagName == 'P') {
        cur = cur.replace(/[^\w]|[\r\n]/gi, '');
        if (cur) {
            if (isPrevH3) {
                res[cur] = [];
            }
            let answers = e.getElementsByTagName('span');
            for (let i = 0; i < answers.length; i++) {
                res[cur].push(answers[i].innerText.replace(/[^\w]|[\r\n]/gi, ''));
            }
        }
        isPrevH3 = false;
    }
});