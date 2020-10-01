'use strict';


const events = require('./caps')
//.driver doesnt export anything so i can just require it
require('./driver');
require('./events');
setInterval(()=>{
  let brightness = Math.ceil(Math.random()* 100);
  events.emit('light', {brightness});
}, 2000);



/*
5 small servers
Api server
event listening service that controls everything
driver
store
monitor

*/
