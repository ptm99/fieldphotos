var geourl0 = 'https://dss.icem.com.au/geolisa/';
//var geourl0 = 'http://192.168.1.99:9003/geoserver/';
var geourl = 'https://dss.icem.com.au/geocamatlas/';
<<<<<<< HEAD
const csvPath = 'lisa_static/';
mapviewmaxz = 20;
var legendWMS = "/wms?REQUEST=GetLegendGraphic&VERSION=1.1.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER={layer}&legend_options=fontName:sans-serif;fontAntiAliasing:true;fontColor:#2c3e50;fontSize:10;dpi:91&SCALE=1001"
var legendWMS0 = "/wms?REQUEST=GetLegendGraphic&VERSION=1.1.0&FORMAT=image/png&layer={layer}&style={style}&WIDTH=20&HEIGHT=20&legend_options=fontName:sans-serif;fontAntiAliasing:true;fontColor:#2c3e50;fontSize:11;dpi:91&SCALE=1001"
//document.getElementById('geourl').innerHTML=geourl0;
const ccTransparent=0.7;
const hzTransparent=20;
var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: mapviewmaxz,
    attribution: '&copy; OpenStreetMap'
});
var osmY = L.tileLayer('https://c.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
    maxZoom: mapviewmaxz,
    attribution: '&copy; Cycl OSM'
});
var terrain = L.tileLayer('https://tiles.maps.eox.at/wmts/1.0.0/terrain_3857/default/g/{z}/{y}/{x}.jpg', {
    maxZoom: mapviewmaxz,
    attribution: '&copy; Terrain'
});

var terrain_light = L.tileLayer('https://tiles.maps.eox.at/wmts/1.0.0/terrain-light_3857/default/GoogleMapsCompatible/{z}/{y}/{x}.jpg', {
    maxZoom: mapviewmaxz,
    attribution: '&copy; Terrain Light'
});

var hyddraOSM = L.tileLayer('https://{s}.tile.openstreetmap.se/hydda/base/{z}/{x}/{y}.png', {
    maxZoom: mapviewmaxz,
    attribution: '&copy; OpenStreetMap Hyddra'
});
var sentinel2_2018 = L.tileLayer('https://tiles.maps.eox.at/wmts/1.0.0/s2cloudless-2018_3857/default/g/{z}/{y}/{x}.jpg', {
    maxZoom: mapviewmaxz,
    attribution: '&copy; ESA Sentinel 2 - 2018'
});

var googleStreets = L.tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}',{
    maxZoom: mapviewmaxz,
    subdomains:['mt0','mt1','mt2','mt3'],
    attribution: '&copy; Google Street Map'
});

var googleSat = L.tileLayer('http://{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}',{
    maxZoom: mapviewmaxz,
    subdomains:['mt0','mt1','mt2','mt3'],
    attribution: '&copy; Google Satellite'
});

var esriStreet = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
  maxZoom: mapviewmaxz,
  attribution: 'Tiles &copy; ESRI'
});

var cartoDB_light_all = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  maxZoom: mapviewmaxz,
  attribution: '&copy; OpenStreetMap &copy; <a href="https://carto.com/attributions">CARTO</a>'
});

var cartoDB_dark_all = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  maxZoom: mapviewmaxz,
  attribution: '&copy; OpenStreetMap &copy; <a href="https://carto.com/attributions">CARTO</a>'
});

var map = L.map('map', {minZoom: 7, maxZoom: mapviewmaxz, layers:[osm]}).setView([13.08, 103.20], 12);
=======
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
>>>>>>> e5d532308785317c9e9a2d603cf04fd965bc4c88
// map.setMaxBounds(map.getBounds());
var baseMaps = {
  "OpenStreetMap": osm,
  "CyclOSM": osmY,
<<<<<<< HEAD
  'CartoDB Positron' :cartoDB_light_all,
  'CartoDB DarkMatter': cartoDB_dark_all,
  "Terrain": terrain,
  "Terrain Light": terrain_light,
  "Google Streets": googleStreets,
  'ESRI World Street Map': esriStreet,
=======
  "Terrain": terrain,
  "Terrain Light": terrain_light,
  "Google Streets": googleStreets,
>>>>>>> e5d532308785317c9e9a2d603cf04fd965bc4c88
  "Google Satellite": googleSat,
  "Sentinel-2 (cloudless) 2018": sentinel2_2018
};
var layerControl = L.control.layers(baseMaps).addTo(map);
<<<<<<< HEAD
//Read csv file to array
function csvToArray(str, delimiter = ",") {
  const headers = str.slice(0, str.indexOf("\n")).split(delimiter);
  const rows = str.slice(str.indexOf("\n") + 1).split("\n");
  const arr = rows.map(function (row) {
    const values = row.split(delimiter);
    const el = headers.reduce(function (object, header, index) {
      object[header] = values[index];
      return object;
    }, {});
    return el;
  });
  return arr;
}

//Async function to read csv
async function csvData(x) {
  const response = await fetch(x);
  return response.text();
}
// Interactive for Admin layers
const adminLayers = [
  {lname:'National boundary', ws:'base', layers:'khm_admbnda_adm0_gov_wgs84'},
  {lname:'Provincial boundaries', ws:'base', layers:'khm_admbnda_adm1_gov_wgs84'},
  {lname:'District boundaries', ws:'base', layers:'khm_admbnda_adm2_gov_wgs84'},
  {lname:'Commune boundaries', ws:'base', layers:'khm_admbnda_adm3_gov_wgs84'}
]
var adminWMS = L.layerGroup([]);
const adminGrcheckbox = document.getElementById("adminGroup")
for (let i =0; i<adminLayers.length; i++) {
  j = adminLayers[i]
  adminWMS[i]= L.WMS.overlay(geourl0+j.ws+"/wms?", {layers: j.layers,   format: 'image/png', transparent: true, zIndex:500+i})
  adminWMS[i].addTo(map);
};
function commune_onoff(cb){
  if (cb.checked) {
    adminWMS[3].addTo(map);
  } else {
    map.removeLayer(adminWMS[3]);
  }
}

// Using list of base layers to add on left menu drop down
var baseLayers;
const hzLayer=[];
const hazardLayers1=[];
const socioEcoLayers=[];
const ccLayers1=[];
csvData(csvFBaselyr).then((data) => {
  console.log(data);
  baseLayers = csvToArray(data,',');
  for (let i =0; i<baseLayers.length; i++) {
    j=baseLayers[i];
    if (j.group == 'hazard') { hzLayers.push(j); }
    if (j.group == 'hazard_all') { hazardLayers1.push(j); }
    if (j.group == 'socio') { socioEcoLayers.push(j); }
    if (j.group == 'cc') { ccLayers1.push(j); }
    break;
  }
  // Render layers into left menu
});

var hazardLayers;
csvData(csvFHazard).then((data) => {
  console.log(data);
  hazardLayers = csvToArray(data,',');
});

// Interactive for Socio economic layers
const socioEcoLayers1 = [
  {lname:'Population per district (2019)', ws:'socio', layers:'BTB_Population_2019_per_district'},
  {lname:'Population per village (2019)', ws:'socio', layers:'BTB_Population_2019_per_village'},
  {lname:'Female population per village (2019)', ws:'socio', layers:'BTB_Population_2019_total_female'},
  {lname:'Girls per village (2019)', ws:'socio', layers:'BTB_Population_2019_child_female'},
  {lname:'Population density (2020)', ws:'socio', layers:'BTB_Transportation_Public_facility'},
  {lname:'Transportation Public facilities', ws:'socio', layers:'BTB_popden_2020'}
]
var socioEcoWMS = L.layerGroup([]);
//const adminGrcheckbox = document.getElementById("adminGroup")
for (let i =0; i<socioEcoLayers.length; i++) {
  break;
  j = socioEcoLayers[i]
  socioEcoWMS[i]= L.WMS.overlay(geourl0+j.ws+"/wms?", {layers: j.layers,   format: 'image/png', transparent: true, zIndex:500+i})
  socioEcoWMS[i].addTo(map);
};
// function commune_onoff(cb){
//   if (cb.checked) {
//     adminWMS[3].addTo(map);
//   } else {
//     map.removeLayer(adminWMS[3]);
//   }
// }

// Interactive for All Hazard layers
const hzWMS1 = L.layerGroup([
  L.tileLayer.wms(geourl0+"hazard/wms?", {
    layers:'BTB_Flood2013',
    format: 'image/png',
    transparent: 'true',
    opacity: ccTransparent,
    zIndex:200
  })]
);
document.getElementById("hz_legend1").innerHTML="<img src='"+geourl0+'hazard'+legendWMS.replace('{layer}', 'BTB_Flood2013')+"' alt='Legend'>";
document.getElementById("hz_legend1").style.display='none';
function hz_select(lyr){
  hzWMS1.clearLayers();
  hzWMS1.addLayer(L.tileLayer.wms(geourl0+"hazard/wms?", {
    layers:lyr.value,
    format: 'image/png',
    transparent: 'true',
    opacity: ccTransparent,
    zIndex:200
  }));
  document.getElementById("hz_legend1").innerHTML="<img src='"+geourl0+'hazard'+legendWMS.replace('{layer}', lyr.value)+"' alt='Legend' style='transition: all 1s ease;'>";
}
// Interactive for Climate Change layers
const ccWMS = L.layerGroup([
  L.tileLayer.wms(geourl+"clim_data/wms?", {
    layers:'060_2060_cvTMax_IPSL-CM5A-MR_RCP85_ann',
    format: 'image/png',
    transparent: 'true',
    opacity: ccTransparent,
    zIndex:200
  })]
);
document.getElementById("cc_legend").innerHTML="<img src='"+geourl+'clim_data'+legendWMS.replace('{layer}', '060_2060_cvTMax_IPSL-CM5A-MR_RCP85_114')+"' alt='Legend'>";
document.getElementById("cc_legend").style.display='none';
function cc_select(lyr){
  ccWMS.clearLayers();
  ccWMS.addLayer(L.tileLayer.wms(geourl+"clim_data/wms?", {
    layers:lyr.value,
    format: 'image/png',
    transparent: 'true',
    opacity: ccTransparent,
    zIndex:200
  }));
  document.getElementById("cc_legend").innerHTML="<img src='"+geourl+'clim_data'+legendWMS.replace('{layer}', lyr.value)+"' alt='Legend' style='transition: all 1s ease;'>";
}

var villPoint = L.tileLayer.wms(geourl0+"va/wms?", {layers: 'BTBmuni_villages_VA', format: 'image/png', styles:'', transparent: true, zIndex:900});
vaWMS = L.layerGroup([]);
hazardWMS = L.tileLayer.wms();
document.getElementById("vaGroupOnOff").disabled=true;
document.getElementById("hzLayerOnOff").disabled=true;
// Add an event listener to both select boxes
var sel_hazard = document.querySelector("select[name='sel_hazard']");
var sel_asset = document.querySelector("select[name='sel_asset']");

const vaOpt = document.getElementById("vaAllGroup")
// Add an event listener to asset selection
sel_asset.addEventListener("change", function() {
  var selectedValue = this.value;
  vaOpt.length=0;
  vaOpt.innerHTML="";
  document.getElementById('vaGroupTitle').innerHTML="Impact and Vulnerability Assessment layers"
  document.getElementById("vaGroupOnOff").disabled=true;
  document.getElementById("vaGroupOnOff").checked=false;
  document.getElementById('hzLayerTitle').innerHTML="Hazard layer"
  document.getElementById("hzLayerOnOff").disabled=true;
  document.getElementById("hzLayerOnOff").checked=false;
  map.removeLayer(vaWMS);
  map.removeLayer(hazardWMS);
  // Clear selected on Asset selection
  sel_hazard.selectedIndex = -1;
  switch(selectedValue) {
    case "ass_village":
      sel_hazard.options[0].disabled = false;
      sel_hazard.options[1].disabled = false;
      sel_hazard.options[2].disabled = false;
      villPoint.addTo(map)
      document.getElementById('AssetLegend').innerHTML="<img src='"+geourl0+"va"+legendWMS0.replace("{layer}", "BTBmuni_villages_VA").replace("{style}", "")+"' alt='Village center'>";
      break;
    default:
      map.removeLayer(villPoint);
      sel_hazard.options[0].disabled = false;
      sel_hazard.options[1].disabled = true;
      sel_hazard.options[2].disabled = true;
      document.getElementById('AssetLegend').innerHTML="";
  };
  map.invalidateSize();
});

var vaAll=[];
csvData(csvFVA).then((data) => {
  console.log(data);
  vaAll = csvToArray(data,',');
});
// Add an event listener to the second select box
sel_hazard.addEventListener("change", function() {
  // Retrieve the selected value from the second select box
  var vaLayers = [];
  var hazardLyr = null;
  // Do something with the selected value, for example:
  console.log("You selected: " + this.value);
  document.getElementById('vaGroupTitle').innerHTML="Impact and Vulnerability Assessment for "+sel_asset.options[sel_asset.selectedIndex].text+" to "+sel_hazard.options[sel_hazard.selectedIndex].text+" <a href='lisa-html-pages/gallery.html' target = '_blank'><img src='lisa_static/img/download.svg' style='height:16px;fill:blue;'></a>";
  document.getElementById("vaGroupOnOff").disabled=false;
  document.getElementById("vaGroupOnOff").checked=false;
  document.getElementById("hzLayerOnOff").disabled=false;
  document.getElementById("hzLayerOnOff").checked=true;
  vaOpt.innerHTML="";
  vaOpt.length=0;
  map.removeLayer(hazardWMS);
  map.removeLayer(vaWMS);
  var tmp
  for (let i=0;i<vaAll.length;i++) {
    if (vaAll[i].asset==sel_asset.value && vaAll[i].hazard==this.value) {
      tmp=vaAll[i]
      tmp.layers = tmp.layers.split('&')
      vaLayers.push(tmp)
    }
  }
  for (let i=0;i<hazardLayers.length;i++) {
    if (hazardLayers[i].hazard==this.value) {
      hazardLyr=hazardLayers[i]
    }
  }
  // switch(this.value) {
  //   case "hz_flood":
  //     switch(sel_asset.value){
  //       case "ass_village":
  //         vaLayers = [
  //           {lname:'Village Exposed to Flood', ws:'va', layers:'BTB_vill_VA', style:'Vill_Exp_Flood_PIN'},
  //           {lname:'Village Sensitivity', ws:'va', layers:'BTB_vill_VA', style:'Vill_Sen_Flood'},
  //           {lname:'Village Impacted by Flood', ws:'va', layers:'BTB_vill_VA', style:'Vill_Imp_Flood_PIN'},
  //           {lname:'Village Adaptive Capacity', ws:'va', layers:'BTB_vill_VA', style:'Vill_Cap_Flood'},
  //           {lname:'Village Flood Vulnerability', ws:'va', layers:'BTB_vill_VA', style:'Vill_VA_Flood'}
  //         ];
  //         break;
  //       default:
  //         switch(sel_asset.value){
  //           case "ass_buildup":
  //             vaLayers = [{lname:'Built-up Exposed to Flood', ws:'exposure', layers:'Union_Flood_commune_BTB_LU2009', style:''}];
  //             break;
  //           case "ass_road":
  //             vaLayers = [{lname:'Road Exposed to Flood', ws:'exposure', layers:['Union_Flood_commune_BTB_mainroad', 'Union_Flood_commune_BTB_otherroad'], style:''}];
  //             break;
  //           case "ass_railway":
  //             vaLayers = [{lname:'Railway Exposed to Flood', ws:'exposure', layers:'Union_Flood_commune_BTB_rail', style:''}];
  //             break;
  //           case "ass_school":
  //             vaLayers = [{lname:'School Exposed to Flood', ws:'exposure', layers:'Union_Flood_commune_BTB_school', style:''}];
  //             break;
  //           case "ass_health":
  //             vaLayers = [{lname:'Health facilities Exposed to Flood', ws:'exposure', layers:'Union_Flood_commune_BTB_health', style:''}];
  //             break;
  //         }
  //     }
  //     hazardLyr = hazardLayers[0]
  //     break;
  //   case "hz_drought":
  //     vaLayers = null;
  //     hazardLyr = hazardLayers[1]
  //     break;
  //   case "hz_rivererosion":
  //     vaLayers = null;
  //     hazardLyr = hazardLayers[2]
  //     break;
  // }
  document.getElementById('hzLayerTitle').innerHTML=hazardLyr.lname;
  hazardWMS = L.tileLayer.wms(geourl0+hazardLyr.ws+"/wms?", {layers: hazardLyr.layers, format: 'image/png', styles:hazardLyr.style, transparent: true, zIndex:500});
  hazardWMS.addTo(map);
  var vaSlider = document.createElement('input');
  vaSlider.type = "range";
  vaSlider.id = "hzSlider";
  vaSlider.min = hzTransparent;
  vaSlider.max = 100;
  vaSlider.value = 100;
  vaSlider.class = "slider";
  document.getElementById('hzLayerTitle').appendChild(vaSlider);
  vaSlider.addEventListener('change', function(){
    setOpac = parseInt(this.value,10)/100.0;
    hazardWMS.setOpacity(setOpac);
  })
  var label = document.createElement('label');
  label.innerHTML="<br><img src='"+geourl0+hazardLyr.ws+legendWMS0.replace('{layer}', hazardLyr.layers).replace('{style}', hazardLyr.style)+"' alt='"+hazardLyr.lname+"'>";
  document.getElementById('hzLayerTitle').appendChild(label);

  if (vaLayers.length== 0){
    document.getElementById("vaGroupOnOff").disabled=true;
    document.getElementById("vaGroupOnOff").checked=false;
    return;
  }
  vaWMS = L.layerGroup([L.tileLayer.wms(geourl0+vaLayers[0].ws+"/wms?", {layers: vaLayers[0].layers, format: 'image/png', styles:vaLayers[0].style, transparent: true, zIndex:vaLayers[0].zIndex})])
  for (let i =0; i<vaLayers.length; i++) {
    j=vaLayers[i];
    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'va-layer';
    radio.value = j.lname;
    radio.disabled = true;
    radio.id = 'lisava-'+i;
    const label = document.createElement('label');
    label.innerHTML = j.lname+" <a href='lisa-html-pages/CRA_maps/"+j.dlmap+"' target = '_blank'><img src='lisa_static/img/map.svg' style='height:16px;'></a><br><div id='legend-lisava-"+i+"' style='display:none;'></div>";
    if (typeof(j.layers)==="string") {
      label.childNodes[3].innerHTML="<img src='"+geourl0+j.ws+legendWMS0.replace('{layer}', j.layers).replace('{style}', j.style)+"' alt='"+j.lname+"'>";
    } else {label.childNodes[3].innerHTML="<img src='"+geourl0+j.ws+legendWMS0.replace('{layer}', j.layers[0]).replace('{style}', j.style)+"' alt='"+j.lname+"'>";}
    
    vaOpt.appendChild(radio);
    vaOpt.appendChild(label);
    radio.addEventListener('change', function(){
      j = this.id;
      j=vaLayers[parseInt(j.substring(7,j.length),10)];
      const selectedLayer = L.tileLayer.wms(geourl0+j.ws+"/wms?", {layers: j.layers, format: 'image/png', styles:j.style, transparent: true, zIndex:j.zIndex})
      vaWMS.clearLayers();
      vaWMS.addLayer(selectedLayer);
    });
    map.invalidateSize();
  }
  var label = document.createElement('label');
  label.innerHTML = "Set layer transparent: <br>";
  vaOpt.appendChild(label);
  vaSlider = document.createElement('input');
  vaSlider.type = "range";
  vaSlider.id = "vaSlider";
  vaSlider.min = 20;
  vaSlider.max = 100;
  vaSlider.value = 100;
  vaSlider.class = "slider";
  vaOpt.appendChild(vaSlider);
  vaSlider.addEventListener('change', function(){
    setOpac = parseInt(this.value,10)/100.0;
    for (var i in vaWMS._layers){ vaWMS._layers[i].setOpacity(setOpac)};
  })
  for (let i =0; i<vaLayers.length; i++) {
    radio=vaOpt.childNodes[i*3]
    radio.addEventListener('change', function(){
      j = this.id;
      jAll = document.querySelectorAll("[id^=legend-lisava-]")
      for (let ii=0;ii<jAll.length;ii++) {jAll[ii].style.display='none';}
      document.getElementById('legend-'+j).style.display='block';
      setOpac = parseInt(vaSlider.value,10)/100.0;
      for (var i in vaWMS._layers){ vaWMS._layers[i].setOpacity(setOpac)};
    })
  }
  document.getElementById('legend-lisava-0').style.display='block';
  document.getElementById('lisava-0').checked=true;
});

function onoffGroup(cb){
  //alert(cb.name);
  switch(cb.name) {
    case "hzLayer1":
      if (cb.checked) {
        hzWMS1.addTo(map);
        document.getElementById("hzGroup1").disabled=false;
        document.getElementById("hz_legend1").style.display='block';
      } else {
        map.removeLayer(hzWMS1);
        document.getElementById("hzGroup1").disabled=true;
        document.getElementById("hz_legend1").style.display='none';
      }
      break;
    case "ccLayer":
      if (cb.checked) {
        ccWMS.addTo(map);
        document.getElementById("ccGroup").disabled=false;
        document.getElementById("cc_legend").style.display='block';
      } else {
        map.removeLayer(ccWMS);
        document.getElementById("ccGroup").disabled=true;
        document.getElementById("cc_legend").style.display='none';
      }
      break;
    case "hazardLayer":
      if (cb.checked) {
        hazardWMS.addTo(map);
      } else {
        map.removeLayer(hazardWMS);
      }
      break;
    case "exposureLayer":
      el = document.getElementById("exposureGroup").childNodes;
      if (cb.checked) {
        exposureWMS.addTo(map);
        for (var i = 0; i < el.length; i++) {el[i].disabled=false;}
      } else {
        map.removeLayer(exposureWMS);
        for (var i = 0; i < el.length; i++) {el[i].disabled=true;}
      }
      break;
    case "vaLayer":
      el = document.getElementById("vaAllGroup").childNodes;
      if (cb.checked) {
        vaWMS.addTo(map);
        for (var i = 0; i < el.length; i++) {el[i].disabled=false;}
      } else {
        map.removeLayer(vaWMS);
        for (var i = 0; i < el.length; i++) {el[i].disabled=true;}
      }
      break;
  }
}
var photosLayers;
csvData(csvFPhotos).then((data) => {
  console.log(data)
  var jdata = {"type": "Feature", "properties": {"fname": "", "desc": ""}, "geometry": {"type": "Point", "coordinates": [0, 0]}};
  const pData = [];
  var photosData = csvToArray(data,',');
  for (let i =0; i<photosData.length; i++) {
    jdata.properties.fname = photosData[i].fname
    jdata.properties.desc = photosData[i].desc
    jdata.geometry.coordinates = [parseFloat(photosData[i].lon), parseFloat(photosData[i].lat)]
    pData.push(jdata)
  };
  console.log(pData)
  photosLayers = L.geoJSON(pData, {
    onEachFeature: function (feature, layer) {
      layer.bindPopup('<center><img src="'+csvPath+''+feature.properties.fname+'" width=600px alt="'+feature.properties.desc+'"><br>'+feature.properties.desc+'</center>', {maxWidth:630, autoPan:true});}
  }).addTo(map);
});
=======

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
>>>>>>> e5d532308785317c9e9a2d603cf04fd965bc4c88
