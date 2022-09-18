const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3d106353eemshbcb555c0c0e7baap1dbb65jsn4607d39eeff3',
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
	}
};

fetch('https://api-football-v1.p.rapidapi.com/v3/players?id=276&season=2020', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));