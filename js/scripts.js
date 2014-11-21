// Global Variables

//Custom markers based on data types
var customIcons = {
    park: {
    icon: 'http://labs.google.com/ridefinder/images/mm_20_blue.png'
      },
    friendly: {
    icon: 'http://labs.google.com/ridefinder/images/mm_20_red.png'
      }
    };

var map;
var initOpts = {
    center: { lat: 40.006711, lng: -105.263623},
    mapTypeId: 'roadmap',
    zoom: 12
                };


// Called on site intial load
function initialize() {
  map = new google.maps.Map(document.getElementById('map-canvas'), initOpts);
            
    var infoWindow = new google.maps.InfoWindow;
       
      // populate locations from database using XML
      downloadUrl("../php/mapsXML.php", function(data) {
        var xml = data.responseXML;
        var markers = xml.documentElement.getElementsByTagName("marker");
        for (var i = 0; i < markers.length; i++) {
          var name = markers[i].getAttribute("name");
          var address = markers[i].getAttribute("address");
          var type = markers[i].getAttribute("type");
          var point = new google.maps.LatLng(
              parseFloat(markers[i].getAttribute("lat")),
              parseFloat(markers[i].getAttribute("lng")));
          var html = "<b>" + name + "</b> <br/>" + address;
          var icon = customIcons[type] || {};
          var places = new google.maps.Marker({
            map: map,
            position: point,
            icon: icon.icon
          });
          bindInfoWindow(places, map, infoWindow, html);
        }
      });
 
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
/*      google.maps.event.addListener(marker, 'click', function() {
        map.setZoom(18);
        map.setCenter(marker.getPosition());
      });*/
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
/*    var options = {
      map: map,
      position: new google.maps.LatLng(40.006711,-105.263623),
      content: content
    };*/
/*    var infowindow = new google.maps.InfoWindow(options);
    map.setCenter(options.position);*/
  }
  
  // FUNC001: display search bar and tie to database

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

// create infowindow from xml and html 
function bindInfoWindow(marker, map, infoWindow, html) {
      google.maps.event.addListener(marker, 'click', function() {
        infoWindow.setContent(html);
        infoWindow.open(map, marker);
      });
    }

    function downloadUrl(url, callback) {
      var request = window.ActiveXObject ?
          new ActiveXObject('Microsoft.XMLHTTP') :
          new XMLHttpRequest;

      request.onreadystatechange = function() {
        if (request.readyState == 4) {
          request.onreadystatechange = doNothing;
          callback(request, request.status);
        }
      };

      request.open('GET', url, true);
      request.send(null);
    }

    function doNothing() {}


// NONF001: return map center and zoom to inital values (should be a FUNC requirement, but left for consistency with GitHub)

function loadWithInitOpts() {
  map.setCenter(initOpts.center);
  map.setZoom(initOpts.zoom);
}

google.maps.event.addDomListener(window, 'load', initialize);