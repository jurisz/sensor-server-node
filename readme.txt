
simple post to save data in ${user.home}/sensor-data/data.txt file
one row one json of data

post sample


http://localhost:3000/sensor/save/green-house-1-small 
Accept: */*
Content-Type: application/json

[{"name": "vv", "value": 3.0}, {"name": "temp1", "value": 17.3}]}
