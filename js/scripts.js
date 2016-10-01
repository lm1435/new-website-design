$(document).ready(function(){
//smooth scrolling
  var $root = $('html, body');
    $('.navbar-nav a').click(function() {
  var href = $.attr(this, 'href');
    $root.animate({
    scrollTop: $(href).offset().top
    }, 500, function () {
    window.location.hash = href;
  });
  return false;
});

// formspree protection from spam

var contactform = document.getElementById('contactform');
  contactform.setAttribute('action', '//formspree.io/' + 'luis' + 'meza01' + '@' + 'gmail' + '.' + 'com');
});



var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 30.257927, lng: -97.742520},
    zoom: 15,
    mapTypeControl: false,
    disableDoubleClickZoom: true,
    scrollwheel: false,
    disableDefaultUI: true,
    draggable: false,
    styles: [
      {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
      {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#38414e'}]
      },
      {
        featureType: "road",
        elementType: "labels",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "transit",
        elementType: "all",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#746855'}]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#1f2835'}]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#17263c'}]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#17263c'}]
      }
    ]
  });
}
