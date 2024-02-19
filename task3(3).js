let XMLHttpRequest = require('xhr2');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://restcountries.com/v3.1/all');
xhr.send();
xhr.onload = function () {
    JSON.parse(xhr.responseText).forEach(element => {
        data={name:element.name.common,
            region:element.region,
            sub_region:element.subregion,
            populations:element.population}
        console.log(data)
    });
}

