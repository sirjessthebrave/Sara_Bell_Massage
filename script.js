onload: opacity of the backgroun image fades slowly from black to the image

when the hero reaches the top of the page, nav switches to a static top bar that does not move as the rest of the page scrolls

3 main images: onhover: a grey box with light opacity takes over the image with white text.  the whole image links to another page.


// Google Map for Contact Page

var mapCanvas

function initialize() {
    var mapCanvas = document.getElementById('map_canvas');
    var mapOptions = {
      center: new google.maps.LatLng(44.5403, -78.5463),
      zoom: 8,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);
  }

// END Google Map for Contact Page