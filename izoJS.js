'use strict';

const rq = require('./izo_apiRequestHandler');
const client = require('./izo_Client');

module.exports = {
	connect
}

function connect(user,pass) {
	try {
		return new client.Client(user,pass);;
	} catch(err) {
		console.log(err);
	}
}
