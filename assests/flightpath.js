var animLoop = false,
    animIndex = 0,
	planePath = false,
	trailPath = false;


var places = {
	"PA"	:[39.8744, -75.2424],
	"NY"	:[40.6413, -73.7781],
	"DT"  :[42.2162, -83.3554],
	"MIA"	:[25.7959, -80.2871],
	"CA"	:[33.9416, -118.4085]
};


function initMap() {
	var options = {
	zoom: 7,
	center: new google.maps.LatLng(41.2033,-77.1945),
	styles: [
	{
	"elementType": "geometry",
	"stylers": [
	{
	"color": "#212121"
	}
	]
	},
	{
	"elementType": "labels.icon",
	"stylers": [
	{
	"visibility": "off"
	}
	]
	},
	{
	"elementType": "labels.text.fill",
	"stylers": [
	{
	"color": "#757575"
	}
	]
	},
	{
	"elementType": "labels.text.stroke",
	"stylers": [
	{
	"color": "#212121"
	}
	]
	},
	{
	"featureType": "administrative",
	"elementType": "geometry",
	"stylers": [
	{
	"color": "#757575"
	},
	{
	"visibility": "off"
	}
	]
	},
	{
	"featureType": "administrative.country",
	"elementType": "labels.text.fill",
	"stylers": [
	{
	"color": "#9e9e9e"
	}
	]
	},
	{
	"featureType": "administrative.land_parcel",
	"stylers": [
	{
	"visibility": "off"
	}
	]
	},
	{
	"featureType": "administrative.locality",
	"elementType": "labels.text.fill",
	"stylers": [
	{
	"color": "#bdbdbd"
	}
	]
	},
	{
	"featureType": "administrative.neighborhood",
	"stylers": [
	{
	"visibility": "off"
	}
	]
	},
	{
	"featureType": "poi",
	"stylers": [
	{
	"visibility": "off"
	}
	]
	},
	{
	"featureType": "poi",
	"elementType": "labels.text",
	"stylers": [
	{
	"visibility": "off"
	}
	]
	},
	{
	"featureType": "poi",
	"elementType": "labels.text.fill",
	"stylers": [
	{
	"color": "#757575"
	}
	]
	},
	{
	"featureType": "poi.park",
	"elementType": "geometry",
	"stylers": [
	{
	"color": "#181818"
	}
	]
	},
	{
	"featureType": "poi.park",
	"elementType": "labels.text.fill",
	"stylers": [
	{
	"color": "#616161"
	}
	]
	},
	{
	"featureType": "poi.park",
	"elementType": "labels.text.stroke",
	"stylers": [
	{
	"color": "#1b1b1b"
	}
	]
	},
	{
	"featureType": "road",
	"stylers": [
	{
	"visibility": "off"
	}
	]
	},
	{
	"featureType": "road",
	"elementType": "geometry.fill",
	"stylers": [
	{
	"color": "#2c2c2c"
	}
	]
	},
	{
	"featureType": "road",
	"elementType": "labels",
	"stylers": [
	{
	"visibility": "off"
	}
	]
	},
	{
	"featureType": "road",
	"elementType": "labels.icon",
	"stylers": [
	{
	"visibility": "off"
	}
	]
	},
	{
	"featureType": "road",
	"elementType": "labels.text.fill",
	"stylers": [
	{
	"color": "#8a8a8a"
	}
	]
	},
	{
	"featureType": "road.arterial",
	"elementType": "geometry",
	"stylers": [
	{
	"color": "#373737"
	}
	]
	},
	{
	"featureType": "road.highway",
	"elementType": "geometry",
	"stylers": [
	{
	"color": "#3c3c3c"
	}
	]
	},
	{
	"featureType": "road.highway.controlled_access",
	"elementType": "geometry",
	"stylers": [
	{
	"color": "#4e4e4e"
	}
	]
	},
	{
	"featureType": "road.local",
	"elementType": "labels.text.fill",
	"stylers": [
	{
	"color": "#616161"
	}
	]
	},
	{
	"featureType": "transit",
	"stylers": [
	{
	"visibility": "off"
	}
	]
	},
	{
	"featureType": "transit",
	"elementType": "labels.text.fill",
	"stylers": [
	{
	"color": "#757575"
	}
	]
	},
	{
	"featureType": "water",
	"elementType": "geometry",
	"stylers": [
	{
	"color": "#000000"
	}
	]
	},
	{
	"featureType": "water",
	"elementType": "labels.text",
	"stylers": [
	{
	"visibility": "off"
	}
	]
	},
	{
	"featureType": "water",
	"elementType": "labels.text.fill",
	"stylers": [
	{
	"color": "#3d3d3d"
	}
	]
	}
	]
	};
	mapObject	=	new google.maps.Map(document.getElementById('map'), options);
}

var planeSymbol	= {
	path: 'M22.1,15.1c0,0-1.4-1.3-3-3l0-1.9c0-0.2-0.2-0.4-0.4-0.4l-0.5,0c-0.2,0-0.4,0.2-0.4,0.4l0,0.7c-0.5-0.5-1.1-1.1-1.6-1.6l0-1.5c0-0.2-0.2-0.4-0.4-0.4l-0.4,0c-0.2,0-0.4,0.2-0.4,0.4l0,0.3c-1-0.9-1.8-1.7-2-1.9c-0.3-0.2-0.5-0.3-0.6-0.4l-0.3-3.8c0-0.2-0.3-0.9-1.1-0.9c-0.8,0-1.1,0.8-1.1,0.9L9.7,6.1C9.5,6.2,9.4,6.3,9.2,6.4c-0.3,0.2-1,0.9-2,1.9l0-0.3c0-0.2-0.2-0.4-0.4-0.4l-0.4,0C6.2,7.5,6,7.7,6,7.9l0,1.5c-0.5,0.5-1.1,1-1.6,1.6l0-0.7c0-0.2-0.2-0.4-0.4-0.4l-0.5,0c-0.2,0-0.4,0.2-0.4,0.4l0,1.9c-1.7,1.6-3,3-3,3c0,0.1,0,1.2,0,1.2s0.2,0.4,0.5,0.4s4.6-4.4,7.8-4.7c0.7,0,1.1-0.1,1.4,0l0.3,5.8l-2.5,2.2c0,0-0.2,1.1,0,1.1c0.2,0.1,0.6,0,0.7-0.2c0.1-0.2,0.6-0.2,1.4-0.4c0.2,0,0.4-0.1,0.5-0.2c0.1,0.2,0.2,0.4,0.7,0.4c0.5,0,0.6-0.2,0.7-0.4c0.1,0.1,0.3,0.1,0.5,0.2c0.8,0.2,1.3,0.2,1.4,0.4c0.1,0.2,0.6,0.3,0.7,0.2c0.2-0.1,0-1.1,0-1.1l-2.5-2.2l0.3-5.7c0.3-0.3,0.7-0.1,1.6-0.1c3.3,0.3,7.6,4.7,7.8,4.7c0.3,0,0.5-0.4,0.5-0.4S22,15.3,22.1,15.1z',
	fillColor: 'blue',
	fillOpacity: 1.5,
	scale: 0.8,
	anchor: new google.maps.Point(11, 11),
	strokeWeight: 0
};

function animate(startPoint, endPoint) {
	startPoint	=	places[startPoint],
	endPoint	=	places[endPoint];

	var sP =	new google.maps.LatLng(startPoint[0],startPoint[1]);
	var eP =	new google.maps.LatLng(endPoint[0],endPoint[1]);


planePath = new google.maps.Polyline({
	path: [sP, eP],
	strokeColor: '#0f0',
	strokeWeight: 0,
	icons: [{
	icon: planeSymbol,
	offset: '0%'
	}],
	map: mapObject,
	geodesic: true
});

trailPath = new google.maps.Polyline({
	path: [sP, sP],
	strokeColor: '#2eacd0',
	strokeWeight: 2,
	map: mapObject,
	geodesic: true
});

animLoop = window.requestAnimationFrame(function(){
	tick(sP, eP);
});
}


function tick(startPoint, endPoint) {
	animIndex+=0.2;


var nextPoint	=	google.maps.geometry.spherical.interpolate(startPoint,endPoint,animIndex/100);
	trailPath.setPath([startPoint, nextPoint]);


	planePath.icons[0].offset=Math.min(animIndex,100)+'%';
	planePath.setPath(planePath.getPath());


	mapObject.panTo(nextPoint);


	if(animIndex>=100) {
	window.cancelAnimationFrame(animLoop);
	animIndex = 0;
	}else{
	animLoop = window.requestAnimationFrame(function(){
	tick(startPoint, endPoint);
	});
	}
}

function go() {
	window.cancelAnimationFrame(animLoop);
	animIndex = 0;
	animate(
	document.getElementById('s_from').options[document.getElementById('s_from').selectedIndex].value,
	document.getElementById('s_to').options[document.getElementById('s_to').selectedIndex].value
	);
}

function getKey (e) {
		var location = e.location;
		var selector;
		if (location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
				selector = ['[data-key="' + e.keyCode + '-R"]']
		} else {
				var code = e.keyCode || e.which;
				selector = [
						'[data-key="' + code + '"]',
						'[data-char*="' + encodeURIComponent(String.fromCharCode(code)) + '"]'
				].join(',');
		}
		return document.querySelector(selector);
}
