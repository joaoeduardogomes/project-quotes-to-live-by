//? PEXELS API

const apiKey = "UjdZyv0AR6XPoWDdXkMNDUz7276hABuWCY0GKl3SvZ961c4m4lQQ5ecZ"

const query = 'scenery'

const pexelsUrl = `https://api.pexels.com/v1/search?query=${query}&orientation=square&per_page=50`

fetch(pexelsUrl, {
    headers: {
        Authorization: `Bearer ${apiKey}`
    }
})
    .then(resp => {
        return resp.json()
    })
    .then(data => {
        //console.log(data)
        getPhoto(data)
})

function getPhoto(data) {
    const randomIndex = Math.floor(Math.random() * data.photos.length)
    const randomPhoto = data.photos[randomIndex]

    const htmlImg = document.querySelector('#cardImg')
    htmlImg.src = randomPhoto.src.large
    htmlImg.alt = randomPhoto.alt

    const authorLink = document.querySelector('#authorLink')
    authorLink.href = randomPhoto.photographer_url
    authorLink.textContent = randomPhoto.photographer

    const photoLink = document.querySelector('#photoLink')
    photoLink.href = randomPhoto.url
}


//? QUOTES API
const quotesUrl = "https://api.quotable.io/quotes/random"

fetch(quotesUrl)
    .then(resp => {
        return resp.json()
    })
    .then(data => {
        //console.log(data)
        const quote = document.querySelector('#quote')
        const author = document.querySelector('#quoteAuthor')
        quote.textContent = data[0].content
        author.textContent = data[0].author
    })