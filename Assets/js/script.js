//Get elements
const myApp = document.getElementById('app');


//Create elements
const newH1 = document.createElement('h1');
const firstFigure = document.createElement("figure")
const galleryTitle = document.createElement("h2")
const galleryImg = document.createElement("img")
galleryImg.src = "/assets/placeholder.jpg"
const imgDescription = document.createElement("p")


//Appends
myApp.appendChild(newH1);
myApp.appendChild(firstFigure)
firstFigure.appendChild(galleryTitle)
firstFigure.appendChild(galleryImg)
firstFigure.appendChild(imgDescription)


//Add text

newH1.textContent = "Hellow World"
galleryTitle.textContent = "Card title"
imgDescription.textContent = "Picture of a city -- Placeholder description"

//Img style
galleryImg.style.width = "30%"