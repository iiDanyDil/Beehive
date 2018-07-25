class CommentsComponent extends Component {

	constructor(model, parent, dataManager) {

		super(model, parent, dataManager);

		this.container.className = 'commentsComponent';



		//crear elementos

		this.body = document.createElement('p');
		this.email = document.createElement('p');
		this.id = document.createElement('p');
		this.name = document.createElement('p');
		this.postId = document.createElement('p');
		


		//Agegar elementos

		this.container.appendChild(this.body);
		this.container.appendChild(this.email);
		this.container.appendChild(this.id);
		this.container.appendChild(this.name);
		this.container.appendChild(this.postId); 
	


		//llenar elementos

		this.body.innerText = this.model.body;
		this.email.innerText = this.model.email;
		this.id.innerText = this.model.id;
		this.name.innerText = this.model.name;
		this.postId.innerText = this.model.postId;
		



		
	}

	postBtnClick(e){
		this.dataManager.setCurrentBee(this.model);
	}

}