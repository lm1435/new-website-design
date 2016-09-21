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
<<<<<<< HEAD
  
});
 
=======

});
>>>>>>> b622b14cfa97b25b5f1379147f72c54d5c256501
