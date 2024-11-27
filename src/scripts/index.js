//? PEXELS API

const apiKey = ""

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
    htmlImg.src = randomPhoto.img

    const authorLink = document.querySelector('#authorLink')
    authorLink.href = randomPhoto.ownerUrl
    authorLink.textContent = randomPhoto.ownerName

    const photoLink = document.querySelector('#photoLink')
    photoLink.href = randomPhoto.imgUrl
}

function getQuote(quotesArray) {
    const randomIndex = Math.floor(Math.random() * imagesArray.length)
    const randomQuote = quotesArray[randomIndex]

    const htmlQuote = document.querySelector('#quote')
    htmlQuote.textContent = randomQuote.quote

    const htmlQuoteAuthor = document.querySelector('#quoteAuthor')
    htmlQuoteAuthor.textContent = randomQuote.author
}

function changeCard() {
    getPhoto(imagesArray)
    getQuote(quotesArray)
}

function downloadCard() {
    const card = document.querySelector('#card');
    domtoimage.toBlob(card)
        .then(blob => {
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'quote_card.png';
            link.click();
        })
        .catch(error => {
            console.error('Error saving image:', error);
        });
}

changeCard()

document.querySelector('#btn').addEventListener('click', changeCard)
document.querySelector('#downloadBtn').addEventListener('click', downloadCard);
