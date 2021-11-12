const rq = require('./izo_apiRequestHandler');
module.exports = {
	Member
}

function Member(json,endpoint,key) {
	this.fronting = json['AUTO_FRONT'];
	this.enabled = json['ENABLE']['a'];
	this.disabled_guilds = json['ENABLE']['c'];
	this.privated = json['PRIVATE'];
	this.avatar_url = json['avatar-url'];
	this.creation_date = json['creation-date'];
	this.description = json['description'];
	this.name = json['name'];
	this.prefix = json['prefix'];
	this.pronouns = json['pronouns'];
	this.system = json['system'];
	
	this.endpoint = endpoint;
	this.key = key;
	
	this.get_disabled_guild_objects = async () => {
		var oup = await rq.makeAPICall(this.endpoint, {"method" : "get_disabled_guild_objects" , "member_key" : this.key, "system" : this.system, "id_list" : this.disabled_guilds});
		return oup;
	}
}