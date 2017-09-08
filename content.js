'use strict'
const blacklisted = [
    "google.",
    "youtube.",
    "chromium.org"
]

const git = '.git/logs/HEAD'
const currentUrl = [document.location.origin, document.location.pathname].join('')

if (!blacklisted.some(domain => (currentUrl.indexOf(domain) > -1) ? domain : null)) {
    const found = fetch(currentUrl + git).then(response => {
        if (response && response.status === 200) {
            console.warn('[ChromeBugBountyHelper] server returned 200 OK for ' + currentUrl + git)
        }
    }).catch(err => {
        console.error(err)
    })
}