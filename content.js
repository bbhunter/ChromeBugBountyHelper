'use strict'

const git = '.git/logs/HEAD'
const found = fetch(document.domain + git).then(response => {
    if (response && response.status === 200) {
        alert(git + ' folder found: ' + document.domain + git)
    }
}).catch(err => {
    console.error(err)
})