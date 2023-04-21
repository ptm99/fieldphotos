const url0 = 'fieldphotos/'

var myGeoJSON; // Declare variable for storing GeoJSON data
$.ajax({
  url: url0+'fieldphotos.geojson', // Example path to a subfolder
  beforeSend: function(xhr) {
    xhr.setRequestHeader("Content-Type", "application/json");
  },
  success: function(data) {
    myGeoJSON = data.features; // Store the loaded GeoJSON data in a variable
    // Do something with the GeoJSON data here
  }
});

// $.getJSON(url: url0+'fp.json', 
// dataType: "json", function(data) {
//   myGeoJSON = data;
//   // Do something with the GeoJSON data here
// });
var geourl='geoserver/';
var map = L.map('map').setView([12, 105], 8);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
  maxZoom: 18
}).addTo(map);

// var fp = L.tileLayer.wms(geourl+"fp/wms?", {layers: 'fieldphotos', format: 'image/png', transparent: true});

var fp = L.geoJSON(myGeoJSON, {
  onEachFeature: function(feature, layer) {
    // Create popup for each feature
    layer.bindPopup("<b>" + feature.properties.name + "</b><br>" + feature.properties.description);
  }
});
fp.addTo(map);