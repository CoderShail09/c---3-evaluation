// Store the wallet amount to your local storage with key "amount"

function wallet() {
    let arr = []
let amount = document.getElementById("amount").value
arr.push(+amount)
console.log(arr);

amount = localStorage.getItem("amount");

localStorage.setItem("amount",JSON.stringify(arr))
showMoney(arr)


}

function  showMoney(arr){
    let paisa = document.getElementById("wallet");
    paisa.textContent = "Balance"   + arr[0]
}