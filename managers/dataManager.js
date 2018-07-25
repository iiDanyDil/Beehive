

class DataManager {

	constructor() {

		this.bees = [];
		this.currentBee = null;
		this.user = new Bee(100, 'Daniel Mendez', 'Dils', 'ejemplo@hotmail.com', '71277171',
			new Address('cartago', new Geo(0.0, 0.0), 'calle eguayabos', '100', '100/1000'));

		this.bees.push(this.user);

	}

	setCurrentBee(bee) {
		this.currentBee = bee;
		console.log(this.currentBee);
	}

	addPostToBee(post) {
		this.bees.forEach(function (bee) {
			if (bee.id == post.userId) {
				bee.posts.push(post);
				return;
			}
		});
	}

	addCommentToPost(comment) {
		this.bees.forEach(function (bee) {
			bee.posts.forEach(function (post) {
				if (post.id == comment.postId) {
					post.comments.push(comment);
					return;
				}
			});
		});
	}
}