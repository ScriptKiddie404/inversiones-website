//AIzaSyDLWMPqu5pBO6WTLy1jH_gLNDi-vu2GjLM
//AIzaSyDkO_-HqDeibG2VGEC-cerR2PCxOTTlRig
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 48.8584, lng: 2.2945 },
    zoom: 15,
  });
}