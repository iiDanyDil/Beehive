class PostComponent extends Component {

	constructor(model, parent, dataManager) {

		super(model, parent, dataManager);

		this.container.className = 'postComponent';



		//crear elementos

		this.body = document.createElement('p');
		this.id = document.createElement('p');
		this.title = document.createElement('p');
		this.userId = document.createElement('p');




		//Agegar elementos

		this.container.appendChild(this.body);
		this.container.appendChild(this.id);
		this.container.appendChild(this.title);
		this.container.appendChild(this.userId);




		//llenar elementos

		this.body.innerText = this.model.body;
		this.id.innerText = this.model.id;
		this.title.innerText = this.model.title;
		this.userId.innerText = this.model.userId;



	}

	postBtnClick(e) {
		this.dataManager.setCurrentBee(this.model);
	}

}