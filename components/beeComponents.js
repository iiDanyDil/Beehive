class BeeComponent extends Component {

	constructor(model, parent, dataManager) {

		super(model, parent, dataManager);

		this.container.className = 'beeComponent';



		//crear elementos

		this.title = document.createElement('h1');
		this.userName = document.createElement('p');
		this.email = document.createElement('p');
		this.phone = document.createElement('p');
		this.city = document.createElement('p');
		this.posts = document.createElement('p');
		this.photos = document.createElement('p');
		this.todos = document.createElement('p');
		this.postsBtn = document.createElement('button');
		this.albumBtn = document.createElement('button');
		this.todosBtn = document.createElement('button');


		//Agegar elementos

		this.container.appendChild(this.title);
		this.container.appendChild(this.userName);
		this.container.appendChild(this.email);
		this.container.appendChild(this.phone);
		this.container.appendChild(this.city); 
		this.container.appendChild(this.posts);
		this.container.appendChild(this.photos);
		this.container.appendChild(this.todos);
		this.container.appendChild(this.postsBtn);
		this.container.appendChild(this.albumBtn);
		this.container.appendChild(this.todosBtn);


		//llenar elementos

		this.title.innerText = this.model.name;
		this.userName.innerText = this.model.username;
		this.email.innerText = this.model.email;
		this.phone.innerText = this.model.phone;
		this.city.innerText = this.model.city;
		//this.posts.innerText = 'Posts:' + this.model.posts.length;
		this.photos.innerText = 'Photos: 0';
		this.todos.innerText = 'Todos:' + this.model.todos.length;
		this.postsBtn.innerText = 'POSTS';
		this.albumBtn.innerText = 'ALBUM';
		this.todosBtn.innerText = 'TODOS';

		this.postsBtn.onclick = this.postBtnClick.bind(this);


		
	}

	postBtnClick(e){
		this.dataManager.setCurrentBee(this.model);
	}

}