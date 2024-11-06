//? PEXELS API

async function fetchPexelsData(query) {
    const url = `/.netlify/functions/get-pexels?query=${query}&orientation=square&per_page=50`;
    const response = await fetch(url);
    return await response.json();
}

const query = 'scenery';

fetchPexelsData(query)
    .then(data => {
        getPhoto(data);
    })
    .catch(error => {
        console.error('Error fetching Pexels data:', error);
    });

function getPhoto(data) {
    const randomIndex = Math.floor(Math.random() * data.photos.length);
    const randomPhoto = data.photos[randomIndex];

    const htmlImg = document.querySelector('#cardImg');
    htmlImg.src = randomPhoto.src.large;
    htmlImg.alt = randomPhoto.alt;

    const authorLink = document.querySelector('#authorLink');
    authorLink.href = randomPhoto.photographer_url;
    authorLink.textContent = randomPhoto.photographer;

    const photoLink = document.querySelector('#photoLink');
    photoLink.href = randomPhoto.url;
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