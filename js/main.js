
//Use Strict Mode
(function($) {
  "use strict";
  var el, lat, lon, nombre, direccion, marker, popupContent, tema;
  var markers = new L.FeatureGroup();

//Begin - Document Ready
$(document).ready(function(){

  var map = L.map("map").setView([40.41, -3.7], 5);
  L.esri.basemapLayer("DarkGray").addTo(map);

//==============___AJAX___================
  var url = "https://spreadsheets.google.com/feeds/list/1d-eFcj_t_tJ0Mr5K_f3rJKkQckXSW1m6bUZBX6zcG0Y/1/public/values?alt=json-in-script";

  $.ajax({
    type: 'GET',
    url: url,
    async: false,
    jsonpCallback: 'JSON_CALLBACK',
    contentType: "application/json",
    dataType: 'jsonp',
    success: function(json)  {
      var table = json.feed.entry;
      var i = 0;
      iconall();

      function iconall() {
          table = json.feed.entry;
          i = 0;
          markers.clearLayers();
          for (i; i< table.length; i++){
            el = table[i];
            nombre = el["gsx$evento"]["$t"];
            direccion = el["gsx$direccion"]["$t"];
            lat = el["gsx$lat"]["$t"];
            lon = el["gsx$lon"]["$t"];
            tema = el["gsx$tecnologias"]["$t"];

            if(lat != 0){
              marker = L.marker([lat, lon]);
              markers.addLayer(marker);
              map.addLayer(markers);
              popupContent = '<b>Nombre: '+ nombre+ '</b><br>'+'Dirección: '+direccion;
              marker.bindPopup(popupContent).openPopup();
            }
          }
      };

      function iconone() {
          markers.clearLayers();
          table = json.feed.entry;
          i = 0;
          for (i; i< table.length; i++){
            el = table[i];
            nombre = el["gsx$evento"]["$t"];
            direccion = el["gsx$direccion"]["$t"];
            lat = el["gsx$lat"]["$t"];
            lon = el["gsx$lon"]["$t"];
            tema = el["gsx$tecnologias"]["$t"];

            if((tema === "JavaScript") && (lat != 0)){
              markers.clearLayers();
              var myIcon = L.icon({
                  iconUrl: 'images/js.png',
                  iconSize: [50, 50],
              });

              marker = L.marker([lat, lon], {icon: myIcon});
              markers.addLayer(marker);
              map.addLayer(markers);
              popupContent = '<b>Nombre: '+ nombre+ '</b><br>'+'Dirección: '+direccion;
              marker.bindPopup(popupContent).openPopup();
            }
          }
      };

      function icontwo() {
          markers.clearLayers();
          table = json.feed.entry;
          i = 0;
          for (i; i< table.length; i++){
            el = table[i];
            nombre = el["gsx$evento"]["$t"];
            direccion = el["gsx$direccion"]["$t"];
            lat = el["gsx$lat"]["$t"];
            lon = el["gsx$lon"]["$t"];
            tema = el["gsx$tecnologias"]["$t"];

            if((tema === "AngularJS") && (lat != 0)){
              markers.clearLayers();
              var myIcon = L.icon({
                  iconUrl: 'images/angular.ico',
                  iconSize: [50, 50],
              });

              marker = L.marker([lat, lon], {icon: myIcon});
              markers.addLayer(marker);
              map.addLayer(markers);
              popupContent = '<b>Nombre: '+ nombre+ '</b><br>'+'Dirección: '+direccion;
              marker.bindPopup(popupContent).openPopup();
            }
          }
      };

      function iconthree() {
          markers.clearLayers();
          table = json.feed.entry;
          i = 0;
          for (i; i< table.length; i++){
            el = table[i];
            nombre = el["gsx$evento"]["$t"];
            direccion = el["gsx$direccion"]["$t"];
            lat = el["gsx$lat"]["$t"];
            lon = el["gsx$lon"]["$t"];
            tema = el["gsx$tecnologias"]["$t"];

            if((tema === ".Net") && (lat != 0)){
              markers.clearLayers();
              var myIcon = L.icon({
                  iconUrl: 'images/net.png',
                  iconSize: [50, 50],
              });

              marker = L.marker([lat, lon], {icon: myIcon});
              markers.addLayer(marker);
              map.addLayer(markers);
              popupContent = '<b>Nombre: '+ nombre+ '</b><br>'+'Dirección: '+direccion;
              marker.bindPopup(popupContent).openPopup();
            }
          }
      };

      function iconfour() {
          markers.clearLayers();
          table = json.feed.entry;
          i = 0;
          for (i; i< table.length; i++){
            el = table[i];
            nombre = el["gsx$evento"]["$t"];
            direccion = el["gsx$direccion"]["$t"];
            lat = el["gsx$lat"]["$t"];
            lon = el["gsx$lon"]["$t"];
            tema = el["gsx$tecnologias"]["$t"];

            if((tema === "WordPress / PHP") && (lat != 0)){
              markers.clearLayers();
              var myIcon = L.icon({
                  iconUrl: 'images/wordpresspoint.png',
                  iconSize: [50, 50],
              });

              marker = L.marker([lat, lon], {icon: myIcon});
              markers.addLayer(marker);
              map.addLayer(markers);
              popupContent = '<b>Nombre: '+ nombre+ '</b><br>'+'Dirección: '+direccion;
              marker.bindPopup(popupContent).openPopup();
            }
          }
      };

      $('#icon1').click(iconone);
      $('#icon2').click(icontwo);
      $('#icon3').click(iconthree);
      $('#icon4').click(iconfour);
      $('#all').click(iconall);
    },
    error: function(e) {
      console.log(e.message);
    }
  });


//End - Document Ready
});

//End - Use Strict mode
})(jQuery);
