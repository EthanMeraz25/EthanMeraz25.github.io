// 1) Choose a default center (Monterrey example). Change to your location.
const center = [25.50124, -103.551113];
const zoom = 13;

const v1 = document.querySelector("#title");
  v1.textContent = "lo cambie con el dopplegeanger de JS";
  v1.textContent = "UTLD";

// 2) Create the map
const map = L.map("map").setView(center, zoom);

// 3) Add the OpenStreetMap tiles
// Note: respect OSM tile usage policy for production/high traffic.
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// 4) Add a marker + popup
L.marker(center)
  .addTo(map)
  .bindPopup(v1.textContent)
  .openPopup();

// 5) Click handler (drops a marker where you click)
let clickMarker = null;
map.on("click", (e) => {
  const { lat, lng } = e.latlng;

  if (clickMarker) map.removeLayer(clickMarker);

  clickMarker = L.marker([lat, lng])
    .addTo(map)
    .bindPopup(`Lat: ${lat.toFixed(6)}<br>Lng: ${lng.toFixed(6)}`);

  clickMarker.openPopup();
});