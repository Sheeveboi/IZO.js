const member = require('./izo_Member');
module.exports = {
	System
}

function System(json,endpoint) {
	this.avatar_url = json['avatar-url'];
	this.description = json['description'];
	this.creation_date = json['creation-date'];
	
	this.members = [];
	this.endpoint = endpoint;
	
	for (var mem in json) {
		if (typeof(data[mem]) == 'object') {
			this.members.push(new member.Member(json,endpoint,mem));
		}
	}
}