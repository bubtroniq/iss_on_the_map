// let pos = {
//     lat: -45,
//     lon: 112
// };


// Making a map and tiles

const mymap = L.map('harta').setView([0, 0], 1);
        const marker = L.marker([0, 0]).addTo(mymap);

const attribution = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';

const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, {attribution});
tiles.addTo(mymap);

// Making a marker with an icon

const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';
async function getISS() {
    const response = await fetch(api_url);
    const data = await response.json();
    const { latitude, longitude } = data;


    // L.marker([latitude, longitude]).addTo(mymap);
    
    marker.setLatLng([latitude, longitude]);
    mymap.setView([latitude, longitude], 1);

    document.getElementById('lat').textContent = latitude;
    document.getElementById('lon').textContent = longitude;
}

getISS();

setInterval(getISS, 1000);


