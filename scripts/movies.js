// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

const APIKEY = '661f82b8';

const url = 'https://www.omdbapi.com/?apikey=661f82b8&s=';
var amount = localStorage.getItem('amount') || 0;
var wallet = document.getElementById('wallet');
wallet.innerText = amount;


const fetchFun = () =>{
    var x;
    return () => {
        clearTimeout(x);
        x =setTimeout(()=> {
            var searchInput = document.getElementById('search').value;
            fetch(url+searchInput).then(res => res.json()).then(res => {
                console.log(res);
                displayData(res.Search)
            })
        },1000)
    }
    
}
const searchFun = fetchFun();

const displayData = (data) => {
    var movies = document.getElementById('movies');
    movies.innerHTML = null;
    console.log(data)
    data.map((e, index) => {
        var div = document.createElement('div');
        div.setAttribute('class','card');
        var img = document.createElement('img');
        img.src = e.Poster;
        var p = document.createElement('p');
        p.innerText = e.Title;
        var button = document.createElement('button');
        button.textContent = 'Book now'
        button.setAttribute('class', 'book_now');
        button.addEventListener('click', ()=>{
            bookNowFun(e);
        })
        div.append(img,p,button)
        movies.append(div);
    })
    
}

const bookNowFun = (e) => {
    console.log(e);
    localStorage.setItem('movie', JSON.stringify(e));
    window.location.href = 'checkout.html';
}