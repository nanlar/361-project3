/* Nilufer Anlar, istmap.js */

// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

// my javascript for map
function initMap(){ 

  // the location of Istanbul as obtained from Google Maps
  var ist = {lat: 41.015161, lng: 28.939397};

  // the map, centered at Istanbul
  var map = new google.maps.Map(document.getElementById("istmap"), {zoom: 8, center: ist});
      
  // marker, positioned at istanbul with a title
  var marker = new google.maps.Marker({position: ist, map: map, title: "My Hometown Istanbul"});

  // NHA test area below 
  var contentString = "test1" + "test2";
            
  var infowindow = new google.maps.InfoWindow({content: contentString});

}

// have the function loaded
google.maps.event.addDomListener(window, "load", initMap);

