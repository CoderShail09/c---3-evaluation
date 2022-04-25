// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time


let myMovie = document.getElementById("movie")


let movie = localStorage.getItem("movie");

if(!movie){
    movie = [];
    localStorage.setItem("movie",JSON.stringify(movie))
}
else{
    movie = JSON.parse(movie)
}

console.log(movie)
showCart(movie)
function showCart(movie){
movie.forEach(function (el){

let div = document.createElement("div");

let image = document.createElement("img");
image.src = el.Poster

let name = document.createElement("h3");
name.innerText = el.Title

div.append(image,name)
myMovie.append(div)
})
}