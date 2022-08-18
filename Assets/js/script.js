//Get elements
const myApp = document.getElementById('app');


buildCard("This is a test", "/assets/placeholder.jpg", "This is description placeholder")
buildCard("This is a placeholder", "/assets/placeholder.jpg", "This is description placeholder")
buildCard("This is a placeholder", "/assets/placeholder.jpg", "This is description placeholder")

function buildCard(cardHeadline, cardUrl, cardDescription) {
    //Create elements
const newH1 = document.createElement('h1');
const firstFigure = document.createElement("figure")
const galleryTitle = document.createElement("h2")
const galleryImg = document.createElement("img")
galleryImg.src = cardUrl
const imgDescription = document.createElement("p")

//Add text
galleryTitle.textContent = cardHeadline
imgDescription.textContent = cardDescription

//Img style
galleryImg.style.width = "20%"

//Appends
myApp.appendChild(newH1);
myApp.appendChild(firstFigure)
firstFigure.appendChild(galleryTitle)
firstFigure.appendChild(galleryImg)
firstFigure.appendChild(imgDescription)   
}