
//Use Strict Mode
(function($) {
  "use strict";

//Begin - Document Ready
$(document).ready(function(){

  var map = L.map("map").setView([40.41, -3.7], 5);
  L.esri.basemapLayer("Topographic").addTo(map);

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

      var table = json.feed.entry,
         i = 0,
         el, lat, lon, nombre, direccion, marker, popupContent;

      for (i; i< table.length; i++){
        el = table[i];
        nombre = el["gsx$evento"]["$t"];
        direccion = el["gsx$direccion"]["$t"];
        lat = el["gsx$lat"]["$t"];
        lon = el["gsx$lon"]["$t"];
        if(lat != 0){
          marker = L.marker([lat, lon]).addTo(map);
          popupContent = '<b>Nombre: '+ nombre+ '</b><br>'+'Dirección: '+direccion;
          marker.bindPopup(popupContent).openPopup();
        }
      }
    },
    error: function(e) {
      console.log(e.message);
    }
  });

//End - Document Ready
});

//End - Use Strict mode
})(jQuery);
