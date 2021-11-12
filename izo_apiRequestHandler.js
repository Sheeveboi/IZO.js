const http = require('http');
module.exports = {
	makeAPIcall
}

async function makeAPIcall(endpoint, post_request) {
	return new Promise((resolve, reject) => {
		var fixed_endpoint = endpoint;
		var query = new URLSearchParams(post_request).toString();
		fixed_endpoint['path'] = "/api/" + query
		var req = http.request(endpoint, res => {
			if (res.statusCode == 504) {
				throw new Error("504: " + res.headers['errmsg']);
			} else if (res.statusCode == 200) {
				res.on('data',(d) => {
					resolve(d.toString('utf8'));
				})
			}
		})
		req.write("send");
		req.end();
	})
}