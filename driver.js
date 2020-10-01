'use strict';

const events = require('./caps')


events.on('light', squint);
events.on('light', yawn);
events.on('light', openEyes);
events.on('light', laugh);

function laugh(payload){
  if(payload.brightness<= 10){
    console.log('stay in bed');
  }
}
function openEyes(payload){
  if(payload.brightness<= 50){
    console.log('turn off alarm');
  }
}
function yawn(payload){
  if(payload.brightness <= 90){
    console.log('im yawning');
  }
}

function squint(payload){
  if(payload.brightness >= 100){
    console.log('wake the fuck up');
  }
}
