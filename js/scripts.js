function initialize() {
  var mapOptions = {
    center: { lat: 40.006711, lng: -105.263623},
    zoom: 19
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);