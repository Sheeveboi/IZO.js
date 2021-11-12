const rq = require('./izo_apiRequestHandler');
const system = require('./izo_System');

module.exports = {
	Client,
	Endpoint
}
function Endpoint(user, pass) {
	return {
		hostname: 'localhost',
		port: 80,
		method: 'POST',
		path: "/api",
		headers: {
			'Username': user,
			'Password': pass
		}
	}
}
//the object that this is creating
function Client(user, pass) {
	this.user = user;
	this.pass = pass;
	
	this.systems = [];
	this.uid = 0
	//^^ these two attributes need to be updated via the makeAPIcall function on init
	
	
	this.fetch_member = async () => {
		console.log("test");
	}
	
	
	this.testSend = async () => {
		try {
			var response = JSON.parse(await rq.makeAPIcall(Endpoint(this.user, this.pass), {'method' : 'connect'}));
			console.log(response);
		} catch(err) {
			console.log(err);
		}
	}
}