function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: ,
    center: { lat: , lng: },
  });
  
  var marker = new google.maps.Marker({
    position: { lat: , lng: },
    map: map,
  });
  
  var infowindow = new google.maps.InfoWindow({
    content:""
  });
  infowindow.open(map, marker);
}
window.initMap = initMap;