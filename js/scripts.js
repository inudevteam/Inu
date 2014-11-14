var map;
var initOpts = {
    center: { lat: 40.006711, lng: -105.263623},
    zoom: 15
  };

function initialize() {
  map = new google.maps.Map(document.getElementById('map-canvas'), initOpts);

  // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      var marker = new google.maps.Marker({
        position: pos,
        map: map,
        title: 'Hello World!'
      })
      google.maps.event.addListener(marker, 'click', function() {
        map.setZoom(18);
        map.setCenter(marker.getPosition());
      });
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }
  
  // Handle HTML5 Geolocation failure
  function handleNoGeolocation(errorFlag) {
    if (errorFlag) {
      var content = 'Error: The Geolocation service failed.';
    } else {
      var content = 'Error: Your browser doesn\'t support geolocation.';
    }
    var options = {
      map: map,
      position: new google.maps.LatLng(40.006711,-105.263623),
      content: content
    };
    var infowindow = new google.maps.InfoWindow(options);
    map.setCenter(options.position);
  }
  
  // Use Inu logo as link to home state
  
  //google.maps.event.addDomListener(document.getElementById('navbar-brand'), 'click', function () {map.setCenter(initMapOptions.center); map.setZoom(initMapOptions.zoom);});
}

function loadWithInitOpts() {
  map.setCenter(initOpts.center);
  map.setZoom(initOpts.zoom);
}

google.maps.event.addDomListener(window, 'load', initialize);