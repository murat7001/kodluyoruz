let myName = document.querySelector('#myName');
let myClock = document.querySelector('#myClock');
let day = document.querySelector('.text2');

let name = prompt("What is your name?");
myName.innerHTML = `${name}`;



function showTime() {
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    myClock.innerHTML = `${time}`;

    function getDayName(date = new Date(), locale = 'tr') {
        return date.toLocaleDateString(locale, {weekday: 'long'});
      }
    myClock.innerHTML = `${time}` + ' ' + `${getDayName()}`;
}

setInterval(showTime,1000);

