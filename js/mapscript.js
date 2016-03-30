function initMap() {
  var myLatLng = {lat: 10.356818, lng: 76.209384};

  var map = new google.maps.Map(document.getElementById('map_canvas'), {
    zoom: 12,
    center: myLatLng
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'Hello World!'
  });
}