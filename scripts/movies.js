// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
var timerId;

let movie_div = document.getElementById("movies");


async function searchMovies(name){

   try {
    let url = `https://www.omdbapi.com/?s=${name}&apikey=5da03de0 `

    let res = await fetch(url);
    let data = await res.json()
    
  return data.Search

    

   } catch (error) {
   console.log(" error", error)
       
   }

     
}


async function appendMovie(even){
even.forEach(function (el){

let main = document.createElement("div")
let image = document.createElement("img")
image.src = el.Poster

let title = document.createElement("h3");
title.innerText = el.Title;

let btn = document.createElement("button");
btn.textContent = "Book now";

btn.addEventListener("click",function(event){
addMovie(el);
window.location.href = "checkout.html"
})

main.append(image,title,btn)
movie_div.append(main);

})




}




function debounce(func,delay){
    if(timerId){
clearTimeout(timerId)
    }


console.log("fired")

    timerId = setTimeout(function (){
        func()
    },delay)
}





async function main(){
let name = document.getElementById("search").value;

if(name.length <= 2){
    return false
}
  let my = await searchMovies(name)
  console.log("my", my);
  appendMovie(my)
}

function addMovie(el){
    let cart = [];
   movie = localStorage.getItem("movie");
   cart.push(el);
   localStorage.setItem("movie",JSON.stringify(cart))
   showMoney(cart)
}
function  showMoney(arr){
    let paisa = document.getElementById("wallet");
    paisa.textContent = "Balance"   + arr[0]
}