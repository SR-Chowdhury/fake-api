# EXPL:first_quarter_moon:RE SUPER:star2: W:last_quarter_moon:RLD 
# Create Fake API using JSON server + faker.js

**First use this webpack-boilerpalte do the follwoing things**

_run_

	npm install
_then_
	
	npm start
	
**Then isntall npm JSON-Server**

	sudo npm i -g json-server
_**[N.B. If your are using Ubuntu than you should add sudo before npm i -g json-server]**_

**Then isntall Faker.js**
_run_

	npm i -D faker

**---------------------------------------------------------------------------------------------------------------------------**

**create a fakeAPI.json file**

	{
	    "posts": [
	      {
		"id": 1,
		"title": "json-server",
		"author": "typicode"
	      }
	    ],
	    "comments": [
	      {
		"id": 1,
		"body": "some comment",
		"postId": 1
	      }
	    ],
	    "profile": {
	      "name": "typicode"
	    }
	}
	
_Then run in terminal-_

	json-server --watch fakeAPI.json
	
_Here we go, now you can see in terminal that you have a url, click ``ctrl + click`` That's it. you got your local fake API data_

**---------------------------------------------------------------------------------------------------------------------------**

**But you need more API data then what?**

**just create a fakeAPI.js file**

	const faker = require('faker');

	const data = {
	    user: [],
	    address: []
	}

	for (let i = 0; i<50; i++) {
	    data.user.push({
		first_name: faker.name.firstName(),
		last_name: faker.name.lastName()
	    });
	}
	for (let i = 0; i<50; i++) {
	    data.address.push({
		zipCode: faker.address.zipCode(),
		city: faker.address.city()
	    });
	}

	module.exports = () => data;
		
_Then run in terminal-_

	json-server fakeAPI.js
	
_Here we go, now you can see in terminal that you have three url, click ``ctrl + click`` That's it. you got your local fake API data_

# EXPL:first_quarter_moon:RE SUPER:star2: W:last_quarter_moon:RLD 
