'use strict'

const git = '.git/logs/HEAD'
const found = fetch(window.location + git).then(response => {
    if (response && response.status === 200) {
        alert(git + ' folder found: ' + window.location + git)
    }
}).catch(err => {
    console.error(err)
})