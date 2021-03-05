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

**-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_**

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
	
_Then run interminal-_

	json-server --watch fakeAPI.json
_Here we go, now you can see in terminal that you have a url where click ctrl + click. That's it. you got your local fake API data_
