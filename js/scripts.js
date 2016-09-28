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
  var contactform = document.getElementById('contactform');
    contactform.setAttribute('action', '//formspree.io/' + 'luis' + 'meza01' + '@' + 'gmail' + '.' + 'com');
});



