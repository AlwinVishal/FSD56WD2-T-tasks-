let XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();
xhr.open('GET', "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function () {
    JSON.parse(xhr.responseText).forEach(element => {
            console.log(element.flag);
        })
}
  