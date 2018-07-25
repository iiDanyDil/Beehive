

window.addEventListener('load', init, false);

function init() {
	
	var dataManager = new DataManager();
	var navManager  = new NavManager(dataManager);
	

	//Program Logic


	requestUsersData();
	requestUsersPosts();
	requestUsersComments();
	requestUsersAlbum();
	requestUsersPhotos();
	requestUsersTodos();
	

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

					var beeData = data[key];

					var addressData = data[key].address;

					var geo = new Geo(addressData.geo.lat, addressData.geo.lng);
					
					var address = new Address(addressData.city, geo, addressData.street, addressData.suite, addressData.zipcode);

					var bee = new Bee(beeData.id, beeData.name, beeData.username, beeData.email, beeData.phone, 

					new Address(addressData.city, new Geo (addressData.geo.lat, addressData.geo.lng),

					addressData.street, addressData.suite, addressData.zipcode ));

					dataManager.bees.push(bee);

					

				}

				navManager.showBees();
			}
			else {
				console.log('Server Error');
			}
		}
	}

	function requestUsersPosts() {
		var request = new XMLHttpRequest();
		request.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
		request.onreadystatechange = requestUsersPostsCompleted;
		request.send();
	}

	function requestUsersPostsCompleted(e) {
		var request = e.target;
		
		if (request.readyState == XMLHttpRequest.DONE) {
			if (request.status == 200) {

				var data = JSON.parse(request.responseText);
				
				for (var key in data) {

				var beePosts = data[key];


				var posts = new Posts(beePosts.body, beePosts.id, beePosts.title, beePosts.userId);
					
				dataManager.bees.push(posts);

					

				}
				//--navManager.showPosts();
				
			}
			else {
				console.log('Server Error');
			}
		}
	}

	function requestUsersComments() {
		var request = new XMLHttpRequest();
		request.open('GET', 'https://jsonplaceholder.typicode.com/comments', true);
		request.onreadystatechange = requestUsersCommentsCompleted;
		request.send();
	}

	function requestUsersCommentsCompleted(e) {
		var request = e.target;
		
		if (request.readyState == XMLHttpRequest.DONE) {
			if (request.status == 200) {

				var data = JSON.parse(request.responseText);
				
				for (var key in data) {

				var beeComments = data[key];


				var comment = new Comments(beeComments.body, beeComments.email, beeComments.id, beeComments.name, beeComments.postId);
					
				dataManager.bees.push(beeComments);


				}

				//--navManager.showComments();
			}
			else {
				console.log('Server Error');
			}
		}
	}

	function requestUsersAlbum() {
		var request = new XMLHttpRequest();
		request.open('GET', 'https://jsonplaceholder.typicode.com/albums', true);
		request.onreadystatechange = requestUsersAlbumCompleted;
		request.send();
	}

	function requestUsersPhotos() {
		var request = new XMLHttpRequest();
		request.open('GET', 'https://jsonplaceholder.typicode.com/photos', true);
		request.onreadystatechange = requestUsersAlbumCompleted;
		request.send();
	}

	function requestUsersTodos() {
		var request = new XMLHttpRequest();
		request.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
		request.onreadystatechange = requestUsersTodosCompleted;
		request.send();
	}


	function requestUsersTodosCompleted(e) {
		var request = e.target;
		
		if (request.readyState == XMLHttpRequest.DONE) {
			if (request.status == 200) {

				var data = JSON.parse(request.responseText);
				
				for (var key in data) {

				

					

				}

				
			}
			else {
				console.log('Server Error');
			}
		}
	}


	function requestUsersPhotosCompleted(e) {
		var request = e.target;
		
		if (request.readyState == XMLHttpRequest.DONE) {
			if (request.status == 200) {

				var data = JSON.parse(request.responseText);
				
				for (var key in data) {

				

					

				}

				
			}
			else {
				console.log('Server Error');
			}
		}
	}

	function requestUsersAlbumCompleted(e) {
		var request = e.target;
		
		if (request.readyState == XMLHttpRequest.DONE) {
			if (request.status == 200) {

				var data = JSON.parse(request.responseText);
				
				for (var key in data) {

				

					

				}

				
			}
			else {
				console.log('Server Error');
			}
		}
	}



	

	
}