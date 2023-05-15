//import fData from '/lisa_static/photos.json' assert { type: 'json' };
//console.log(fData);

async function logJSONData() {
  const response = await fetch('/lisa_static/photos.json');
//  const jsonData = await response.json();
  return response.json();
}
var lPhoto
logJSONData().then((data) => {
  console.log(data);
  lPhoto = L.geoJSON(data); // JSON data parsed by `data.json()` call
});

lPhoto.addTo(map);