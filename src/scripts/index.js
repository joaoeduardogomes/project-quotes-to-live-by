//? PIMAGES OBJECT:

const imagesArray = [
    {
        img: "https://images.unsplash.com/photo-1707007694363-b8afb46ed639?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imgUrl: "https://unsplash.com/pt-br/fotografias/um-corpo-de-agua-com-uma-rocha-no-meio-dele-SD2QJjsktqo",
        ownerName: "Phill Brown",
        ownerUrl: "https://unsplash.com/pt-br/@phillbrown"
    },
    {
        img: "https://plus.unsplash.com/premium_photo-1677347335105-1bd16607a25e?q=80&w=2567&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imgUrl: "https://unsplash.com/pt-br/fotografias/o-sol-esta-se-pondo-sobre-uma-colina-gramada-UtBZXP5szPs",
        ownerName: "Ales Krivec",
        ownerUrl: "https://unsplash.com/pt-br/@aleskrivec"
    },
    {
        img: "https://images.unsplash.com/photo-1707007939503-601df6e27e58?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imgUrl: "https://unsplash.com/pt-br/fotografias/uma-praia-com-um-afloramento-rochoso-no-meio-do-oceano-r-RVV4u6hKY",
        ownerName: "Phill Brown",
        ownerUrl: "https://unsplash.com/pt-br/@phillbrown"
    },
    {
        img: "https://images.unsplash.com/photo-1682685797229-b2930538da47?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imgUrl: "https://unsplash.com/pt-br/fotografias/uma-pessoa-em-pe-no-topo-de-uma-colina-arenosa-GoLWB4p8JXw",
        ownerName: "NEOM",
        ownerUrl: "https://unsplash.com/pt-br/@neom"
    },
    {
        img: "https://plus.unsplash.com/premium_photo-1691434474131-01f982a2dab1?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imgUrl: "https://unsplash.com/pt-br/fotografias/uma-passarela-de-madeira-que-leva-a-um-vale-com-montanhas-ao-fundo-nkbhdSVUQDg",
        ownerName: "Hans Isaacson",
        ownerUrl: "https://unsplash.com/pt-br/@hans_isaacson"
    },
    {
        img: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imgUrl: "https://unsplash.com/pt-br/fotografias/uma-pessoa-em-pe-no-topo-de-uma-colina-rochosa-gOqBe7ropxM",
        ownerName: "NEOM",
        ownerUrl: "https://unsplash.com/pt-br/@neom"
    },
    {
        img: "https://plus.unsplash.com/premium_photo-1676496046656-cdad44276497?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imgUrl: "https://unsplash.com/pt-br/fotografias/um-campo-verde-com-arvores-e-colinas-ondulantes-ao-fundo-BdmuEHYEVzQ",
        ownerName: "Sylwia Bartyzel",
        ownerUrl: "https://unsplash.com/pt-br/@sylwiabartyzel"
    },
    {
        img: "https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imgUrl: "https://unsplash.com/pt-br/fotografias/um-homem-parado-no-meio-de-um-deserto-3qBi6HWZMeg",
        ownerName: "NEOM",
        ownerUrl: "https://unsplash.com/pt-br/@neom"
    },
    {
        img: "https://images.unsplash.com/photo-1522747776116-64ee03be1dad?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imgUrl: "https://unsplash.com/pt-br/fotografias/campo-de-grama-verde-com-fumaca-JKbyACnTvuE",
        ownerName: "Vivek Kumar",
        ownerUrl: "https://unsplash.com/pt-br/@qriusv"
    },
    {
        img: "https://images.unsplash.com/photo-1604009452666-c47b63f6de34?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imgUrl: "https://unsplash.com/pt-br/fotografias/arvores-verdes-perto-do-lago-sob-o-ceu-azul-durante-o-dia-UUCXgoXMThs",
        ownerName: "Vidar Nordli-Mathisen",
        ownerUrl: "https://unsplash.com/pt-br/@vidarnm"
    },
    {
        img: "https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=1503&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imgUrl: "https://unsplash.com/pt-br/fotografias/fotografia-de-paisagem-de-montanhas-twukN12EN7c",
        ownerName: "Simon Berger",
        ownerUrl: "https://unsplash.com/pt-br/@8moments"
    },
    {
        img: "https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imgUrl: "https://unsplash.com/pt-br/fotografias/folha-da-palmeira-perto-do-corpo-de-agua-FbN2z3bEaSs",
        ownerName: "OC Gonzalez",
        ownerUrl: "https://unsplash.com/pt-br/@ocvisual"
    },
    {
        img: "https://images.unsplash.com/photo-1681566800800-b7af0ebfb17e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imgUrl: "https://unsplash.com/pt-br/fotografias/um-casal-de-mulheres-sentadas-no-topo-de-um-penhasco-PsHzjZl8yTY",
        ownerName: "tabitha turner",
        ownerUrl: "https://unsplash.com/pt-br/@tabithaturnervisuals"
    },
    {
        img: "https://images.unsplash.com/photo-1682686581264-c47e25e61d95?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imgUrl: "https://unsplash.com/pt-br/fotografias/uma-pessoa-em-pe-no-topo-de-uma-duna-de-areia-aWHKsYkbCi8",
        ownerName: "NEOM",
        ownerUrl: "https://unsplash.com/pt-br/@neom"
    },
    {
        img: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imgUrl: "https://unsplash.com/pt-br/fotografias/grama-verde-e-montanha-rochosa-cinza-durante-o-dia-hOhlYhAiizc",
        ownerName: "Daniela Kokina",
        ownerUrl: "https://unsplash.com/pt-br/@danielakokina"
    },
    {
        img: "https://images.unsplash.com/photo-1707007663952-bdee8551e5a4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imgUrl: "https://unsplash.com/pt-br/fotografias/um-close-up-de-uma-planta-verde-com-muitas-folhas-G_cByBGxB2E",
        ownerName: "Phill Brown",
        ownerUrl: "https://unsplash.com/pt-br/@phillbrown"
    },
    {
        img: "https://images.unsplash.com/photo-1682685797828-d3b2561deef4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imgUrl: "https://unsplash.com/pt-br/fotografias/uma-pessoa-em-pe-no-meio-de-um-canion-a-noite-0rvKw0fDiHk",
        ownerName: "NEOM",
        ownerUrl: "https://unsplash.com/pt-br/@neom"
    },
    {
        img: "https://images.unsplash.com/photo-1682686579688-c2ba945eda0e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imgUrl: "https://unsplash.com/pt-br/fotografias/um-par-de-pessoas-em-pe-no-topo-de-uma-montanha-0SUho_B0nus",
        ownerName: "NEOM",
        ownerUrl: "https://unsplash.com/pt-br/@neom"
    }
]

function getPhoto(imagesArray) {
    const randomIndex = Math.floor(Math.random() * imagesArray.length)
    const randomPhoto = imagesArray[randomIndex]

    const htmlImg = document.querySelector('#cardImg')
    htmlImg.src = randomPhoto.img

    const authorLink = document.querySelector('#authorLink')
    authorLink.href = randomPhoto.ownerUrl
    authorLink.textContent = randomPhoto.ownerName

    const photoLink = document.querySelector('#photoLink')
    photoLink.href = randomPhoto.imgUrl
}


//? QUOTES API:
function getQuote() {
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
}


//? CALL BOTH FUNCTIONS:
function changeCard() {
    getPhoto(imagesArray)
    getQuote()
}

changeCard()

document.querySelector('#btn').addEventListener('click', changeCard)