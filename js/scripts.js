// Global Variables

//Custom markers based on data types - FUNC006
var customIcons = {
    park: {
    icon: '../img/park.png',
    name: 'Dog Parks'
      },
    restaurant: {
    icon: '../img/restaurant.png',
    name: 'Restaurants'
      },
    trail: {
    icon: '../img/trail.png',
    name: 'Trails'
      },
store: {
    icon: '../img/store.png',
    name: 'Stores'
      },
    vet: {
    icon: '../img/vet.png',
    name: 'Veterinarians'
      },
    hotel: {
    icon: '../img/hotel.png',
    name: 'Hotels'
      }
    };


var map;
var initOpts = {
    center: { lat: 40.006711, lng: -105.263623},
    mapTypeId: 'roadmap',
    styles: [{featureType:"administrative",stylers:[{visibility:"off"}]},{featureType:"poi",stylers:[{visibility:"simplified"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"simplified"}]},{featureType:"water",stylers:[{visibility:"simplified"}]},{featureType:"transit",stylers:[{visibility:"simplified"}]},{featureType:"landscape",stylers:[{visibility:"simplified"}]},{featureType:"road.highway",stylers:[{visibility:"off"}]},{featureType:"road.local",stylers:[{visibility:"on"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{visibility:"on"}]},{featureType:"water",stylers:[{color:"#84afa3"},{lightness:52}]},{stylers:[{saturation:-17},{gamma:0.36}]},{featureType:"transit.line",elementType:"geometry",stylers:[{color:"#3f518c"}]}],
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
          var html = "<b>" + name + "</b><br/>" + address;
          var icon = customIcons[type] || {};
          var places = new google.maps.Marker({
            map: map,
            position: point,
            icon: icon.icon
          });
          bindInfoWindow(places, map, infoWindow, html);
        }
      });
    
    // FUNC006: Add legend
var legend = document.getElementById('legend');
for (var key in customIcons) {
  var type = customIcons[key];
  var name = type.name;
  var icon = type.icon;
  var div = document.createElement('div');
  div.innerHTML = '<img src="' + icon + '"> ' + name;
  /*var div2 = document.createElement('div');
div.innerHTML = '<img src="../img/myloc.png">' + 'You are here';
legend.appendChild(div2);*/
  legend.appendChild(div);
}

map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(
  document.getElementById('legend'));
 
  // Pre-function requirement: find user's location using HTML5 and handle error
  
  // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var image = '../img/myloc.png';
      var marker = new google.maps.Marker({
        position: pos,
        map: map,
        icon: image,
        title: 'You are here!'
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
    }
 var infowindow = new google.maps.InfoWindow(options);
    map.setCenter(options.position);
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


// FUNC002: Animate scrolling between sections

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
