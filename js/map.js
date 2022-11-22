function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 11,
    center: { lat: 41.880383, lng: -87.739711},
  });
  
  var childhood = new google.maps.Circle({
    center:{ lat:41.982300, lng: -87.807325 },
    radius:1500,
    strokeColor:"#FF0000",
    strokeOpacity:0.8,
    strokeWeight:2,
    fillColor:"#FF0000",
    fillOpacity:0.2,
    map: map
  });
  
  var marker = new google.maps.Marker({
    position: { lat:41.834214, lng:-87.627399 },
    map: map,
  });
  
  var infowindow = new google.maps.InfoWindow({
    content:""
  });
  infowindow.open(map, marker);
}
window.initMap = initMap;