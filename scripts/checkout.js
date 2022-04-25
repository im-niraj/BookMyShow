// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
var amount = localStorage.getItem('amount') || 0;
var wallet = document.getElementById('wallet');
wallet.innerText = amount;
var bookedMovie = JSON.parse(localStorage.getItem('movie'))|| [];
const desplayFun = (e) => {
    var movies = document.getElementById('movie');
    movies.innerHTML = null;
    var div = document.createElement('div');
    div.setAttribute('class','card');
    var img = document.createElement('img');
    img.src = e.Poster;
    var p = document.createElement('h1');
    p.innerText = e.Title;
    div.append(p,img)
    movies.append(div)
}
desplayFun(bookedMovie);
var buttonsub = document.getElementById('confirm');

buttonsub.addEventListener('click', ()=>{
    var seats = document.getElementById('number_of_seats').value;
    var amt = localStorage.getItem('amount') || 0;
    var noSeat = +seats*100;
    if(noSeat > +amt){
        alert('Insufficient Balance!');
    }
    else{
        var sum = Number(amt) -noSeat
        localStorage.setItem('amount', sum);
        wallet.innerText = sum;
        alert('Booking successful!');
    }
})