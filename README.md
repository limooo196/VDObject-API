# VDObject-API
This is Node JS application that is a web-server that handles certain objects with various HTTP request that connects with MySQL database. 

To run this application : 
- adjust the .env files to match your database
- npm install
- nodemon app.js

Current functionality :
- GET Method : Endpoint:/object (Get everything from database)
- GET Method : Endpoint:/object/:keyId (Get latest value based on keyId) 
- GET Method : Endpoint:/object/:keyId?timestamp=[timeId] (Get value based on keyId and return the latest before the timeId)
- POST Method : Endpoint:/object, Body:JSON:("keyId" : "value") (Insert keyId and its value into the database) 

All timestamps are based on UNIX UTC timezone
