var request = superagent;
var API_URL = 'https://restcountries.eu/rest/v2/all';
var body = document.querySelector('body');

request
	.get(API_URL)
	.then(function(response){
		var countryCards = response.body;
		countryCards.forEach(function(cards){
			var divContainer = document.createElement('div');
			divContainer.className = 'country-card';
			document.querySelector('.countries-container').appendChild(divContainer);

            var img = document.createElement('img');
            img.className = 'country-flag';
            img.src = cards.flag;
            divContainer.appendChild(img);

            var h4 = document.createElement('h4');
            h4.className = 'country-name';
            h4.textContent = cards.name;
            divContainer.appendChild(h4);

            var p = document.createElement('p');
            p.className = 'country-capital';
            p.textContent = cards.capital;
            divContainer.appendChild(p);
		});
	});



