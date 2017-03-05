// Map API //
var map;

function initMap(){
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 30.257927,
      lng: -97.742520
    },
    zoom: 14,
    mapTypeControl: false,
    disableDoubleClickZoom: true,
    scrollwheel: false,
    disableDefaultUI: true,
    draggable: false,
    styles: [{
      elementType: 'geometry',
      stylers: [{
        color: '#242f3e'
      }]
    }, {
      elementType: 'labels.text.stroke',
      stylers: [{
        color: '#242f3e'
      }]
    }, {
      elementType: 'labels.text.fill',
      stylers: [{
        color: '#746855'
      }]
    }, {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{
        color: '#38414e'
      }]
    }, {
      featureType: "road",
      elementType: "labels",
      stylers: [{
        visibility: "off"
      }]
    }, {
      featureType: "poi",
      elementType: "labels",
      stylers: [{
        visibility: "off"
      }]
    }, {
      featureType: "transit",
      elementType: "all",
      stylers: [{
        visibility: "off"
      }]
    }, {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{
        color: '#746855'
      }]
    }, {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{
        color: '#1f2835'
      }]
    }, {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{
        color: '#17263c'
      }]
    }, {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [{
        color: '#17263c'
      }]
    }]
  });
}

function hide (id) {
  $("#" + id).toggle();
}

var jamaicaImg = ['img/j1.png', 'img/j2.png', 'img/j3.png', 'img/j4.png', 'img/j5.png', 'img/j6.png', 'img/j8.png', 'img/j7.png'];


$(".jamaica").one('click', function(e){
  e.preventDefault();
  for (var i = 0; i<jamaicaImg.length; i++) {
    var img = $('<img >', {
      class: "img-responsive col-xs-6 col-md-3",
      src: jamaicaImg[i]
    });
    img.appendTo($("#jamaica"));
   }
   console.log($("#jamaica").outerHeight());
 });

// $(".philadelphia").on('click', function(){
//
// });
// $(".portland").on('click', function(){
//
// });

$(document).ready(function () {
  $(".main-info").hide().slideDown(1500);
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
  imgArray[4].src = 'img/bootstrap.png';
  imgArray[5] = new Image();
  imgArray[5].src = 'img/rails.png';
  imgArray[6] = new Image();
  imgArray[6].src = 'img/gulp.png';
  imgArray[7] = new Image();
  imgArray[7].src = 'img/sass.png';
  imgArray[8] = new Image();
  imgArray[8].src = 'img/git.png';

  function displayImg(arr) {
    var i = 0;
    setInterval(function() {
      $('.images').html(arr[i]);
      i++;
      if (i >= imgArray.length) i = 0;
    }, 1200);
  }
  displayImg(imgArray);


  //smooth scrolling//
  var $root = $('html, body');
  $('.navbar-nav a').click(function() {
    var href = $.attr(this, 'href');
    $root.animate({
      scrollTop: $(href).offset().top
    }, 500, function() {
      window.location.hash = href;
    });
    return false;
  });
  // formspree protection from spam //
  var contactform = document.getElementById('contactform');
  contactform.setAttribute('action', 'https://formspree.io/' + 'luis' +
    'meza01' + '@' + 'gmail' + '.' + 'com');

  var forms = document.getElementsByTagName('form');
  for (var i = 0; i < forms.length; i++) {
    forms[i].noValidate = true;

    forms[i].addEventListener('submit', function(event) {
        //Prevent submission if checkValidity on the form returns false.
        if (!event.target.checkValidity()) {
            event.preventDefault();
              alert('Please fill out the form. Thank you!');
        }
    }, false);
  }
});
