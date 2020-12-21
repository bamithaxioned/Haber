function initMap(location) {
   
    // latitude and longitude of Mumbai
    let mumbai = { lat: 19.0760, lng: 72.8777 };
    let delhi = { lat: 28.7041, lng: 77.1025 };

    // Map option
    let options = {
        zoom: 5,
        center: mumbai,
    };

    // new Map
    let map = new google.maps.Map(document.querySelector(".footer-right"), options);

    // add Marker
    let marker = new google.maps.Marker({
        position: mumbai,
        map: map
    });
}
