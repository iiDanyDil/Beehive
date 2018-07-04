

window.addEventListener('load', init, false);

function init() {
	
	var bees;
	

	//Initialize variables


	bees = [];
	

	//Program Logic


	requestUsersData();
	

	function requestUsersData() {
		var request = new XMLHttpRequest();
		request.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
		request.onreadystatechange = requestUsersDataCompleted;
		request.send();
	}

	function requestUsersDataCompleted(e) {
		var request = e.target;
		
		if (request.readyState == XMLHttpRequest.DONE) {
			if (request.status == 200) {

				var data = JSON.parse(request.responseText);
				
				for (var key in data) {

					
					var bee = new Bee(data[key].id, data[key].name, data[key].username, data[key].email);
					var beeTwo = new Bee(data[0].id, data[0].name, data[0].username, data[0].email);
					

					bees.push(bee);
					

					console.log(bee);
					
    				document.getElementById("userUno").innerHTML = beeTwo.name + ' <br>' +  beeTwo.username + ' <br>' +  beeTwo.email;
    				document.getElementById("userDos").innerHTML = data[1].name + ' <br>' +  data[1].username + ' <br>' +  data[1].email;
    				document.getElementById("userTres").innerHTML = data[2].name + ' <br>' +  data[2].username + ' <br>' +  data[2].email;




				}

				
			}
			else {
				console.log('Server Error');
			}
		}
	}
}