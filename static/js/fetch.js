function get(){

	let config = {}
	config.method = "GET"
	config.headers = {'Content-Type': 'application/json', 'Accept': 'application/json'}
	console.log("starting fetch")
	fetch("http://127.0.0.1:5001/getlist")
	.then(function(response){
		console.log(response)
		return response.json()
	})
	.catch (error => console.error('Error: ', error))
	.then(function(myJson) {
		document.getElementById("foo").innerHTML = myJson.list
	})
}

