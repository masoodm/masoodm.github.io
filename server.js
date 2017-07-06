var express = require ('express');
var app = express();

app.use(express.static(__dirname));
app.use('/bower_components', express.static(__dirname+'/bower_components'));
app.use('/node_modules', express.static(__dirname+'/node_modules'));



var server = app.listen(process.env.PORT || 8080, function () {
		var port = server.address().port;
		console.log("App now running on port", port);
	});