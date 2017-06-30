var express = require('express');
var fs = require('fs');
var router = express.Router();

const SENSOR_FILE = "/home/juris/sensor-data/data.txt";

router.get('/', function (req, res) {
	res.send('Sensor route');
});

router.post('/save/:name', function (req, res) {
	var senderName = req.params.name;
	var ip = req.ip;
	var sensorData = req.body;
	var time = new Date().toISOString();

	var resultToStore = {
		'eventTime': time,
		'ip': ip,
		'name': senderName,
		'data': sensorData
	};

	fs.appendFile(SENSOR_FILE, '\n' + JSON.stringify(resultToStore), function (err) {
		if (err) {
			console.error("error on writing file:" + err);
		}
	});

	res.json(resultToStore);

});

router.post('/clean-file', function (req, res) {
	console.log('Deleting sensor data file');
	fs.unlink(SENSOR_FILE);
	res.sendStatus(201);
});

router.get('/download', function (req, res) {
	res.sendFile(SENSOR_FILE);
});

module.exports = router;