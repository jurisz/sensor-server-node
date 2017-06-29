var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	res.send('Sensor route');
});


router.post('/save/:name', function(req, res) {
	var senderName = req.params.name;
	var ip = req.ip;
	var sensorData = req.body;
	var time = new Date().toISOString();
	
	var resultToStore = {
		'eventTime' : time,
		'ip': ip,
		'name': senderName,
		'data': sensorData
	};
	
	res.json(resultToStore);
	
	//TODO write to file
});

module.exports = router;