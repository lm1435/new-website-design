
function initMap(){
  var map = new google.maps.Map(document.getElementById('map'), {
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

$(".main-info").hide();

$(document).ready(function () {

  $(".main-info").delay(500).slideDown(1500);

  (function(){
    var jamaicaImg = ['img/j5.jpg', 'img/j4.png', 'img/j7.png', 'img/j6.png'];
    var portlandImg = ['img/p5.png', 'img/p6.png', 'img/p2.jpeg', 'img/p8.png'];
    var philadelphiaImg = ['img/h5.png','img/h3.png', 'img/h7.png', 'img/h8.png'];

    function createVacationImages(link, arr, display){
      $(link).one('click', function(e){
        e.preventDefault();
        for (var i = 0; i<arr.length; i++) {
          var img = $('<img >', {
            src: arr[i],
            class: "img-responsive"
          });
          img.appendTo($(display));
         }
         cssVacationImages(display);
         $(display).hide();
      });
    }
    createVacationImages(".jamaica", jamaicaImg, "#jamaica");
    createVacationImages(".portland", portlandImg, "#portland");
    createVacationImages(".philadelphia", philadelphiaImg, "#philadelphia");

    $('.vacation').on('click', function(e){
      e.preventDefault();
      var target = $(this).data('for');
      $("#" + target).toggle();
    });
  })();

  function cssVacationImages (name) {

    $(name).children("img").css({
        "width": "20vw",
        "margin": "auto",
        "padding": "2em"
    });

    if ($(window).width() < 780){
      $(name).children("img").css({
          "width": "40vw",
          "padding": "0 0 1em 0"
      });
    }

    if ($(window).width() < 420){
      $(name).children("img").css({
          "width": "auto",
          "padding": "0 1em"
      });
    }
  }

  (function loopOfTechnology() {
    var imgArray = ['html5.png', 'css.png', 'js.png', 'jquery.jpg', 'bootstrap.png', 'rails.png', 'gulp.png', 'sass.png', 'git.png', 'json.png', 'github_logo.png', 'wordpress.png', 'angular.png'];
    var i = 0;
    setInterval(function() {
      $('.images').attr("src", "img/" + imgArray[i]);
      i++;
      if (i >= imgArray.length) i = 0;
    }, 1200);
  })();

  // formspree protection from spam //
  var contactform = document.getElementById('contactform');
  contactform.setAttribute('action', 'https://formspree.io/' + 'luis' +
    'meza01' + '@' + 'gmail' + '.' + 'com');

  });
