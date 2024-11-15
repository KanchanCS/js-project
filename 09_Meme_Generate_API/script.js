const generatebtn = document.querySelector('.btn')
const memeTitle = document.querySelector('.meme-title')
const memeImage = document.querySelector('.meme-image')
const authorOutput = document.querySelector('.author')

function getMeme() {
    fetch('https://meme-api.com/gimme/wholesomememes')
        .then(response => response.json())
        .then((data) => {
            const { author, title, url } = data
            memeTitle.innerText = title
            memeImage.src = url
            authorOutput.innerText =`Meme by: ${author}`
       
    })
}
getMeme()

generatebtn.addEventListener('click', () => {
    getMeme()
    
})