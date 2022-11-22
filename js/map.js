function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
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
  
  var school = new google.maps.Circle({
    center:{ lat:41.834793, lng: -87.626406},
    radius:600,
    strokeColor:"#FF0000",
    strokeOpacity:0.8,
    strokeWeight:2,
    fillColor:"#FF0000",
    fillOpacity:0.2,
    map: map
  });
  
  var infowindow = new google.maps.InfoWindow({
    content:""
  });
  infowindow.open(map, marker);
}
window.initMap = initMap;