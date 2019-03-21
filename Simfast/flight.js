var c = document.getElementById('myCanvas');
var ctx = c.getContext('2d');
var image = document.getElementById('source');

//ctx.drawImage(image, 10,10,150,180);//,21,20,87,104);

function init(){
  window.requestAnimationFrame(draw);
}

var flight = {
  callSign: 'A45',
  heading: 'A20',
  speed: 470,
  altitude: 500,
  planeType: 'Boeing',
  fixPair: 'VC,AL',
  origin:' VC',
  startCoordinate:{
    latitude: -471,
    longitude: 200,
  },
  endCoordinate: {
    latitude: 100,
    longitude: 98
  },
  currentCoordinate:{
    latitude: 230,
    longitude: 190
  }
}

function draw(){
  yPos = yPos - 1;
  if(yPos - 0){
  }
}
