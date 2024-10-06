import L from "leaflet";

const iconPerson = new L.Icon({
  iconUrl: require("http://maps.google.com/mapfiles/ms/icons/blue-dot.png"),
  iconRetinaUrl: require("http://maps.google.com/mapfiles/ms/icons/blue-dot.png"),
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(60, 75),
  className: "leaflet-div-icon",
});

export { iconPerson };
