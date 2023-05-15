This is an app for managing all field photos and shown on map the location of photos taken, managing the drone ortho image.
Frontend: Shiny App with fullscreen map and floating panel.
Backend:
  - Geoserver: for point layer of photo taken
  - Database: PostgreSQL/PostGIS
Local app: Python app/QGIS Plugin
  - Reading image file with metadata
  - Import image and information into Database: Point location of picture, year, month, beacon, img_type, landcover_type,...
  - Popup image view, list to manage image, update image tag, image working section

Progress:
- Geoserver: run on Geoserver 2.21.1 -> Docker run and map volume for Tomcat root folder (include index.html) and Geoserver data
- PostGIS:
- Shiny R:
- PgAdmin:
