'use strict';

const events = require('./caps');



events.on('light', squint);
events.on('light', yawn);
events.on('light', openEyes);
events.on('light', laugh);

function laugh(payload){
  if(payload.brightness<= 10){
    console.log('your mom');
  }
}
function openEyes(payload){
  if(payload.brightness<= 50){
    console.log('''your dad');
  }
}
function yawn(payload){
  if(payload.brightness <= 90){
    console.log('shit yeah');
  }
}

function squint(payload){
  if(payload.brightness >= 100){
    console.log('fuck off');
  }
}

events.emit('light', {brightness: 100});


