
// fetch('https://api.weatherapi.com/v1/current.json?key=8fa376daa91a4c3bbc3173100230707&q=bengaluru', {mode: 'cors'})
//   .then(function(response) {
//     return response.json();
//     })
//     .then(function(response) {

//     console.log(response.location.name);
//     let string = JSON.stringify(response);
//     console.log(string);
    
    
//   })
//   .catch(function(err) {
//     // Error :(
//   });
let map;

async function initMap(lat,lng) {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: lat, lng: lng },
    zoom: 8,
    mapId: "ce79ea472e98743c",
  });
}
function Map123() {  
    var mapOptions = {  
        center:new google.maps.LatLng(12.971599,77.594566),  
        zoom: 10,  
        mapId: "ce79ea472e98743c",
        
    }  
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);  
    }  
    

function Submit(){
    console.log("hello");
    var city = document.getElementById("city").value;
    console.log(city);
    fetch('https://api.weatherapi.com/v1/current.json?key=8fa376daa91a4c3bbc3173100230707&q='+city, {mode: 'cors'})
  .then(function(response) {
    return response.json();
    })
    .then(function(response) {
        document.body.style.fontFamily="cookie2";
    document.body.style.flexDirection = "column";
    document.body.innerHTML = `<div id="map" style="width:100vh;height:300px;"></div><div class="info"><h1>${response.location.name}</h1><h3>Temp: ${response.current.temp_c} °C</h3><h3>Feels Like: ${response.current.feelslike_c} °C</h3><h3 class="img"><img src='${response.current.condition.icon}'>${response.current.condition.text}</h3><h3>Wind Speed: ${response.current.wind_kph}</h3><h3>Humidity: ${response.current.humidity}</h3><h3>Clouds: ${response.current.cloud}</h3><h3>Uv Radiation: ${response.current.uv}</h3></div>
    <script src="script.js"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAeSLKGC-l-Snb-kOUigxqtXRgvPb84XFI&callback=Map123"></script>`;
    initMap(response.location.lat,response.location.lon);
    console.log(response.location.name);
    let string = JSON.stringify(response);
    console.log(string);
    
    
  })
  .catch(function(err) {
    // Error :(
  });
}