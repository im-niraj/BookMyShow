// Store the wallet amount to your local storage with key "amount"
var amount = localStorage.getItem('amount') || 0;
var wallet = document.getElementById('wallet');
wallet.innerText = amount;
function amountAdd(){
    var amount = localStorage.getItem('amount') || 0;
    var inputAmount = document.getElementById('amount').value;
    var sum = +amount + Number(inputAmount);
    wallet.innerText = sum;
    localStorage.setItem('amount', sum);
}