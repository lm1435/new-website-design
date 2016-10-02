$(document).ready(function(){

//smooth scrolling//

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

// formspree protection from spam //

var contactform = document.getElementById('contactform');
  contactform.setAttribute('action', '//formspree.io/' + 'luis' + 'meza01' + '@' + 'gmail' + '.' + 'com');
});

// cycling through images array //

var imgArray = new Array();

imgArray[0] = new Image();
imgArray[0].src = 'img/html5.png';

imgArray[1] = new Image();
imgArray[1].src = 'img/css.png';

imgArray[2] = new Image();
imgArray[2].src = 'img/js.png';

imgArray[3] = new Image();
imgArray[3].src = 'img/jquery.jpg';

imgArray[4] = new Image();
imgArray[4].src = 'img/rails.png';

function displayImg(arr){
    $('.images').html(arr[0]);
    var i = 1;
    setInterval(
        function(){
            $('.images').html(arr[i]);
            i++;
            if(i >= imgArray.length) i = 0;
        },1500);
}

displayImg(imgArray);

// Map API //

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

// animate .main-info/.circle in/.button //
