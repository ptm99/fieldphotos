App implementation in different way: Using static geojson file and html/js file:
- Geojson file for point data and write using json library -> simple json file
- HTML file to load .geojson file -> load json file for leaflet map


This is an app for managing all field photos and shown on map the location of photos taken
Frontend: a HTML file run on Tomcat server, Tomcar server is also used for Geoserver
Backend:
  - Geoserver: for point layer of photo taken
  - Database: Geopakage file
Local app: Python app/QGIS Plugin
  - Reading image file with metadata
  - Rename file with date and time of capture
  - Copy/Move to server folder, group by lat-lon (1x1deg)
  - Import information into Geopackage: Point location of picture, year, month, beacon, img_type, landcover_type,...
  - Link point on map to photo viewer, make photo filter by year, month, img_type, landcover_type
  - May create thumbnail for preview link to point

Progress:
- Geoserver: run on Geoserver 2.21.1 -> Docker run and map volume for Tomcat root folder (include index.html) and Geoserver data
- Geopackage file: fieldphotos.gpkg and map.qgz
