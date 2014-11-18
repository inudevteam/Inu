// Global Variables

var map;
var initOpts = {
    center: { lat: 40.006711, lng: -105.263623},
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

// Called on site intial load

function initialize() {
  map = new google.maps.Map(document.getElementById('map-canvas'), initOpts);
 
  // Pre-function requirement: find user's location using HTML5 and handle error
  
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
  
  // USER001: display search bar and tie to database

  // Create the search box and link it to the UI element.
  var input = document.getElementById('pac-input');
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
  var searchBox = new google.maps.places.SearchBox(input);

  // Bias the SearchBox results towards places that are within the bounds of the current map's viewport.
  google.maps.event.addListener(map, 'bounds_changed', function() {
    var bounds = map.getBounds();
    searchBox.setBounds(bounds);
  });
}

// FUNC001: return map center and zoom to inital values

function loadWithInitOpts() {
  map.setCenter(initOpts.center);
  map.setZoom(initOpts.zoom);
  map.setMapTypeId(initOpts.mapTypeId);
}

// Run initialize scripts on site load

google.maps.event.addDomListener(window, 'load', initialize);