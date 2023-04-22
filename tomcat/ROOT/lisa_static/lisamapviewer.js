var geourl0 = 'https://dss.icem.com.au/geolisa/';
//var geourl0 = 'http://192.168.1.99:9003/geoserver/';
var geourl = 'https://dss.icem.com.au/geocamatlas/';
var legendWMS = "/wms?REQUEST=GetLegendGraphic&VERSION=1.1.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER={layer}&legend_options=fontName:sans-serif;fontAntiAliasing:true;fontColor:#2c3e50;fontSize:10;dpi:91&SCALE=1001"
var legendWMS0 = "/wms?REQUEST=GetLegendGraphic&VERSION=1.1.0&FORMAT=image/png&layer={layer}&style={style}&WIDTH=20&HEIGHT=20&legend_options=fontName:sans-serif;fontAntiAliasing:true;fontColor:#2c3e50;fontSize:11;dpi:91&SCALE=1001"
//document.getElementById('geourl').innerHTML=geourl0;
var ccTransparent=0.7;
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
});
var osmY = L.tileLayer('https://c.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© Cycl OSM'
});
var terrain = L.tileLayer('https://tiles.maps.eox.at/wmts/1.0.0/terrain_3857/default/g/{z}/{y}/{x}.jpg', {
    maxZoom: 19,
    attribution: '© Terrain'
});

var terrain_light = L.tileLayer('https://tiles.maps.eox.at/wmts/1.0.0/terrain-light_3857/default/GoogleMapsCompatible/{z}/{y}/{x}.jpg', {
    maxZoom: 19,
    attribution: '© Terrain Light'
});

var hyddraOSM = L.tileLayer('https://{s}.tile.openstreetmap.se/hydda/base/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap Hyddra'
});
var sentinel2_2018 = L.tileLayer('https://tiles.maps.eox.at/wmts/1.0.0/s2cloudless-2018_3857/default/g/{z}/{y}/{x}.jpg', {
    maxZoom: 19,
    attribution: '© ESA Sentinel 2 - 2018'
});

googleStreets = L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});

googleSat = L.tileLayer('http://{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});
var map = L.map('map', {minZoom: 5, maxZoom: 19, layers:[osm]}).setView([13.08, 103.20], 12);
// map.setMaxBounds(map.getBounds());
var baseMaps = {
  "OpenStreetMap": osm,
  "CyclOSM": osmY,
  "Terrain": terrain,
  "Terrain Light": terrain_light,
  "Google Streets": googleStreets,
  "Google Satellite": googleSat,
  "Sentinel-2 (cloudless) 2018": sentinel2_2018
};
var layerControl = L.control.layers(baseMaps).addTo(map);

//Add photos layer
async function logJSONData() {
  const response = await fetch('/lisa_static/photos.json');
//  const jsonData = await response.json();
  return response.json();
}
var photosData
logJSONData().then((data) => {
  photosData = data; // JSON data parsed by `data.json()` call
});

var lPhoto = L.geoJSON(photosData, {
  onEachFeature: function (feature, layer) {
    layer.bindPopup('<img src="lisa_static/photos/'+feature.properties.fname+'" width=600px>', {maxWidth:630, autoPan:true});}
}
).addTo(map);
