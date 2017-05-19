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

$(document).ready(function () {
  $(".main-info").hide().delay(500).slideDown(1500);

  document.getElementById("totalTrips").style.backgroundColor= "#d9e1e8";

  var jamaicaImg = ['img/j5.jpg', 'img/j4.png', 'img/j7.png', 'img/j6.png']; //, 'img/j1.png', 'img/j2.png', 'img/j3.png', 'img/j8.png']; previous larger array of images
  var portlandImg = ['img/p5.png', 'img/p6.png', 'img/p2.jpeg', 'img/p8.png']; //'img/p1.png', 'img/p7.png', 'img/p3.jpeg', 'img/p4.png'];
  var philadelphiaImg = ['img/h5.png','img/h3.png', 'img/h7.png', 'img/h8.png']; //'img/h1.png', 'img/h2.png', 'img/h6.png', 'img/h4.png'];

  function css (name) {
    $('#' + name).children("img").css({
        "width": "21vw",
        "margin": "auto 5vh",
        "padding": "2vh 0"
    });
  }

  function cssMedium (name) {
    if ($(window).width() < 780){
      $('#' + name).children("img").css({
          "width": "35vw",
          "margin": "auto",
          "padding": "0"
      });
    }
  }

  function cssSmall (name) {
    if ($(window).width() < 420){
      $('#' + name).children("img").css({
          "width": "85vw",
          "margin": "auto",
          "padding": "2vh auto"
      });
    }
  }

  var display="";
  var link = "";
  var idName= "";

  function imagesChange(link, imageArr, display, idName){
    $(link).one('click', function(e){
      e.preventDefault();
      for (var i = 0; i<imageArr.length; i++) {
        var img = $('<img >', {
          src: imageArr[i]
        });
        img.appendTo($(display));
       }
       css(idName);
       cssMedium(idName);
       cssSmall(idName);
    });
  }

  imagesChange(".jamaica", jamaicaImg, "#jamaica", "jamaica");
  imagesChange(".portland", portlandImg, "#portland", "portland");
  imagesChange(".philadelphia", philadelphiaImg, "#philadelphia", "philadelphia");

  // $(".philadelphia").one('click', function(e){
  //   e.preventDefault();
  //   for (var i = 0; i<philadelphiaImg.length; i++) {
  //     var img = $('<img >', {
  //       class: "img-responsive",
  //       src: philadelphiaImg[i]
  //     });
  //     img.appendTo($("#philadelphia"));
  //    }
  //    css("philadelphia");
  //    cssSmall("philadelphia");
  // });
  //
  // $(".portland").one('click', function(e){
  //   e.preventDefault();
  //   for (var i = 0; i<portlandImg.length; i++) {
  //     var img = $('<img >', {
  //       class: "img-responsive",
  //       src: portlandImg[i]
  //     });
  //     img.appendTo($("#portland"));
  //    }
  //    css("portland");
  //    cssSmall("portland");
  // });

  $("#jamaica,#portland,#philadelphia").css({
    display: "-webkit-box",
    "display": "-webkit-flex",
    "display": "-ms-flexbox",
    "display": "flex",
    "-webkit-flex-wrap": "wrap",
    "-ms-flex-wrap": "wrap",
    "flex-wrap": "wrap",
    "justify-content": "space-around"
  });

  // cycling through images array //
  var imgArray = [
    'html5.png',
    'css.png',
    'js.png',
    'jquery.jpg',
    'bootstrap.png',
    'rails.png',
    'gulp.png',
    'sass.png',
    'git.png'];

  function displayImg() {
    var i = 0;
    setInterval(function() {
      $('.images').attr("src", "img/" + imgArray[i]);
      i++;
      if (i >= imgArray.length) i = 0;
    }, 1200);
  }
  displayImg();


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

  var i = 0;
  forms[i].noValidate = true;
  forms[i].addEventListener('submit', function(e) {
    //Prevent submission if checkValidity on the form returns false.
    if (!e.target.checkValidity()) {
        e.preventDefault();
        alert('Please fill out the form. Thank you!');
    }
  i++;
  }, false);
  });
