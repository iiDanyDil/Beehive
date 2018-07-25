

class DataManager {

	constructor() {

		this.bees = [];
		this.currentBee = null;
		this.user = new Bee (100, 'Daniel Mendez', 'Dils', 'ejemplo@hotmail.com', '71277171', 
		 new Address('cartago', new Geo (0.0,0.0),'calle eguayabos', '100', '100/1000'));

		this.bees.push(this.user);
		
	}
	setCurrentBee(bee){
		this.currentBee = bee;
		console.log(this.currentBee);
	}

}