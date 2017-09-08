'use strict'
const blacklisted = [
    "google."
]

const git = '.git/logs/HEAD'
const currentUrl = document.location.href

if (!blacklisted.some(domain => (currentUrl.indexOf(domain) > -1) ? domain : null)) {
    const found = fetch(document.location.href + git).then(response => {
        if (response && response.status === 200) {
            alert(git + ' folder found: ' + document.location.href + git)
        }
    }).catch(err => {
        console.error(err)
    })
}