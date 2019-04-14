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
      
  // marker, positioned at istanbul
  var marker = new google.maps.Marker({position: ist, map: map});


}

// do I still need the function loaded as below??
google.maps.event.addDomListener(window, "load", initMap);