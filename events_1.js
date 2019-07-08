var events = require('events');

var eventEmitter = new events.EventEmitter();

//create an event handler as follows

var connectHandler = function connected(){
           console.log('connection succesfull');
             //fire the data received event
           eventEmitter.emit('data_recieved');
}
//bind connection event with the handler
eventEmitter.on('connection',connectHandler);

//bind the data recieved event  with the ananymous function
eventEmitter.on('data_recieved',function(){
     console.log("data receieved successfull");
});

eventEmitter.emit('connection');

console.log("program ended");
