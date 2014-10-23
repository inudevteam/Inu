google.maps.event.addDomListener(window, 'load', loadScript);
window.onload = initialize;

function initialize() {
    var mapProp = {
        center: new google.maps.LatLng(40.0176, -105.2797),
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    loadScript;
    geoLocate();
}

// Add support for geolocation (FUNC001)

function geoLocate() {
    // Try HTML5 geolocation
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

            var infowindow = new google.maps.InfoWindow({
                map: map,
                position: pos,
                content: 'Location found using HTML5.'
            });

            map.setCenter(pos);
        }, function () {
            handleNoGeolocation(true);
        });
    } else {
        //Browser doesn 't support Geolocation
        handleNoGeolocation(false);
    }
}

function handleNoGeolocation(errorFlag) {
    if (errorFlag) {
        var content = 'Error: The Geolocation service failed.';
    } else {
        var content = 'Error: Your browser doesn\'t support geolocation.';
    }

    var options = {
        map: map,
        position: new google.maps.LatLng(40.0176, -105.2797),
        content: content
    };

    var infowindow = new google.maps.InfoWindow(options);
    map.setCenter(options.position);
}

// Adds support for asynchronous loading (NONF001)

function loadScript() {
    var script = document.createElement('script ');
    script.type = 'text / javascript ';
    script.src = 'https: //maps.googleapis.com/maps/api/js?v=3.exp&' + 'callback=initialize';
    document.body.appendChild(script);
}