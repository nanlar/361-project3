/* Nilufer Anlar, istanbulmap.js */

// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

// my javascript for my map
function initMap(){ 

  // the location of Istanbul as obtained from Google Maps
  var istanbul = {lat: 41.015161, lng: 28.939397};

  // my map, centered at Istanbul
  var map = new google.maps.Map(document.getElementById("istmap"), {zoom: 10, center: istanbul});
      
  // positio the marker at istanbulanbul and add a title
  var marker = new google.maps.Marker({
    position: istanbul, 
    map: map, 
    title: "My Hometown Istanbul"
  });

  // add some text about the istanbul 
  var contentString = "<h3>Istanbul is the most populous city in Turkey and the country's economic, cultural and histanbuloric center.</h3>" + "<p>With a total population of around 15 million residents in its metropolitan area, it is also one of the world's most populous cities, ranking as the world's fourth largest city proper and the largest European city.</p>";
            
  var infowindow = new google.maps.InfoWindow({content: contentString});
  
  // show the infowindow contents when marker is clicked
  marker.addListener('click', function() {
          infowindow.open(map, marker);
        });

}

// have my map function loaded
google.maps.event.addDomListanbulener(window, "load", initMap);

