
// Initialize map
async function initMap() {

// Request needed libraries.
const { Map } = await google.maps.importLibrary("maps");

// New Google map + options
const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
const map = new Map(document.getElementById("map"), {
    center: { lat: 49.8954, lng: -97.13852 },
    zoom: 5,
    mapId: "6b9f0d7f6b49388c",
    disableDefaultUI: true,
});


const customMarker = new google.maps.Marker({
    // Liftow | MIssissauga
    position: { lat: 43.6620, lng: -79.6591 },
    map,
    icon: {
        url: "https://cdn-icons-png.flaticon.com/128/2667/2667973.png",
        scaledSize: new google.maps.Size(60,60)
    },
    // animation: google.maps.Animation.DROP
});

// Info window
const contentString =
    '<div id="content" class="content">' +
        '<h1 id="firstHeading" class="firstHeading">Liftow Toronto</h1>' +
        '<p class="info-para">1400 Courtneypark Dr E</p>' +
        '<p class="info-para">Mississauga, ON L5T 1H1<p>' +
        '<p class="info-para"><strong><a href="tel:9056773270">(905) 677-3270</a></strong></p>' +
    '</div>';

const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "Liftow Toronto",
});

customMarker.addListener("click", () => {
    infowindow.open({
    anchor: customMarker,
    map,
    });
});

}

initMap();


// Google map source reference
<script async
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAXdCB6VHBwgbsJsj7lrlAmnMyzw8NwJuU&loading=async&callback=initMap">
</script>
