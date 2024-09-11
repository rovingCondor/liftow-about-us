// Google Map Script | START

        // Initialize Google map
        async function initMap() {

        // Request needed libraries.
        const { Map } = await google.maps.importLibrary("maps");

        // Add new Google map + options
        const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
        const map = new Map(document.getElementById("map"), {
            // center: { lat: 49.8954, lng: -97.13852 },
            center: { lat: 49.683, lng: -100.073 },
            zoom: 3.25,
            mapId: "6b9f0d7f6b49388c",
            mapTypeControl: false,
            streetViewControl: false,
            // disableDefaultUI: true,
        });

        // !! Array of map markers !!
        // [0]Content String
        // [1]Latitude, [2]Longitude
        // [3]Image URL
        // scaledSize [4]width, [5]height
        // [6]Aria label
        const markers = [
            // Central Ontario
            [
                // Liftow | Ajax, Scarborough
                '<div id="content" class="content">' +
                    '<h1 id="firstHeading" class="firstHeading">Liftow <span>|</span> Ajax, Scarborough</h1>' +
                    '<p class="info-para">675 Harwood Ave N, Unit 4</p>' +
                    '<p class="info-para">Ajax, ON L1Z 0K4<p>' +
                    '<p class="info-para phone"><strong><a href="tel:4162987119">(416) 298-7119</a></strong></p>' +
                '</div>',
                43.8509,
                -79.0204,
                "https://cdn.shopify.com/s/files/1/1393/7021/files/liftow-pin.svg?v=1724844407",
                60,
                60,
                "Liftow Ajax, Scarborough"
            ],
            [
                // Liftow | Barrie
                '<div id="content" class="content">' +
                    '<h1 id="firstHeading" class="firstHeading">Liftow <span>|</span> Barrie</h1>' +
                    '<p class="info-para">18 Mollard Court, Unit 5-6</p>' +
                    '<p class="info-para">Barrie, ON L4N 8Y1<p>' +
                    '<p class="info-para phone"><strong><a href="tel:7057250268">(705) 725-0268</a></strong></p>' +
                '</div>',
                44.3894,
                -79.6903,
                "https://cdn.shopify.com/s/files/1/1393/7021/files/liftow-pin.svg?v=1724844407",
                60,
                60,
                "Liftow Barrie"
            ],
            [
                // Liftow | Hamilton
                '<div id="content" class="content">' +
                    '<h1 id="firstHeading" class="firstHeading">Liftow <span>|</span> Hamilton</h1>' +
                    '<p class="info-para">586 Tradewind Drive</p>' +
                    '<p class="info-para">Ancaster, ON L9G 4V5<p>' +
                    '<p class="info-para phone"><strong><a href="tel:9055613351">(905) 561-3351</a></strong></p>' +
                '</div>',
                43.2557,
                -79.8711,
                "https://cdn.shopify.com/s/files/1/1393/7021/files/liftow-pin.svg?v=1724844407",
                60,
                60,
                "Liftow Hamilton"
            ],
            [
                // Liftow | Toronto
                '<div id="content" class="content">' +
                    '<h1 id="firstHeading" class="firstHeading">Liftow <span>|</span> Toronto</h1>' +
                    '<p class="info-para">1400 Courtneypark Dr E</p>' +
                    '<p class="info-para">Mississauga, ON L5T 1H1<p>' +
                    '<p class="info-para phone"><strong><a href="tel:9056773270">(905) 677-3270</a></strong></p>' +
                '</div>',
                43.6620,
                -79.6591,
                "https://cdn.shopify.com/s/files/1/1393/7021/files/liftow-pin.svg?v=1724844407",
                60,
                60,
                "Liftow Toronto"
            ],
            [
                // Liftow | Vaughan
                '<div id="content" class="content">' +
                    '<h1 id="firstHeading" class="firstHeading">Liftow <span>|</span> Vaughan</h1>' +
                    '<p class="info-para">35 Sharer Road</p>' +
                    '<p class="info-para">Woodbridge ON, L4L 8Z3<p>' +
                    '<p class="info-para phone"><strong><a href="tel:9054612680">(905) 461-2680</a></strong></p>' +
                '</div>',
                43.7762,
                -79.6092,
                "https://cdn.shopify.com/s/files/1/1393/7021/files/liftow-pin.svg?v=1724844407",
                60,
                60,
                "Liftow Vaughan"
            ],
            [
                // Liftow | Call Centre
                '<div id="content" class="content">' +
                    '<h1 id="firstHeading" class="firstHeading">Liftow <span>|</span> Call Centre</h1>' +
                    '<p class="info-para">10 Perdue Court, Units 4 & 5</p>' +
                    '<p class="info-para">Caledon, ON L7C 3M6<p>' +
                    '<p class="info-para phone"><strong><a href="tel:9054610258">(905) 461-0258</a></strong></p>' +
                '</div>',
                43.8701,
                -79.8671,
                "https://cdn.shopify.com/s/files/1/1393/7021/files/liftow-pin.svg?v=1724844407",
                60,
                60,
                "Liftow Vaughan"
            ],
            // Western Ontario
            [
                // Liftow | Kitchener
                '<div id="content" class="content">' +
                    '<h1 id="firstHeading" class="firstHeading">Liftow <span>|</span> Kitchener</h1>' +
                    '<p class="info-para">615 Trillium Drive</p>' +
                    '<p class="info-para">Kitchener, ON N2R 1J9<p>' +
                    '<p class="info-para phone"><strong><a href="tel:5197485200">(519) 748-5200</a></strong></p>' +
                '</div>',
                43.4516,
                -80.4925,
                "https://cdn.shopify.com/s/files/1/1393/7021/files/liftow-pin.svg?v=1724844407",
                60,
                60,
                "Liftow Kitchener"
            ],
            [
                // Liftow | London
                '<div id="content" class="content">' +
                    '<h1 id="firstHeading" class="firstHeading">Liftow <span>|</span> London</h1>' +
                    '<p class="info-para">403 Neptune Crescent</p>' +
                    '<p class="info-para">London, ON N6M 1A2<p>' +
                    '<p class="info-para phone"><strong><a href="tel:5196590823">(519) 659-0823</a></strong></p>' +
                '</div>',
                43.4516,
                -80.4925,
                "https://cdn.shopify.com/s/files/1/1393/7021/files/liftow-pin.svg?v=1724844407",
                60,
                60,
                "Liftow London"
            ],
            [
                // Liftow | Windsor
                '<div id="content" class="content">' +
                    '<h1 id="firstHeading" class="firstHeading">Liftow <span>|</span> Windsor</h1>' +
                    '<p class="info-para">320 South Talbot Road North</p>' +
                    '<p class="info-para">Essex, ON N8M 2X6<p>' +
                    '<p class="info-para phone"><strong><a href="tel:5197371281">(519) 737-1281</a></strong></p>' +
                '</div>',
                42.3149,
                -83.0364,
                "https://cdn.shopify.com/s/files/1/1393/7021/files/liftow-pin.svg?v=1724844407",
                60,
                60,
                "Liftow Windsor"
            ],
            // Quebec
            [
                // Liftow | Boucherville
                '<div id="content" class="content">' +
                    '<h1 id="firstHeading" class="firstHeading">Liftow <span>|</span> Boucherville</h1>' +
                    '<p class="info-para">1380 rue Newton, suite 101</p>' +
                    '<p class="info-para">Boucherville, QC J4B 5H2<p>' +
                    '<p class="info-para phone"><strong><a href="tel:5145279881">(514) 527-9881</a></strong></p>' +
                '</div>',
                45.5914,
                -73.4364,
                "https://cdn.shopify.com/s/files/1/1393/7021/files/liftow-pin.svg?v=1724844407",
                60,
                60,
                "Liftow Boucherville"
            ],
            [
                // Liftow | Lachine
                '<div id="content" class="content">' +
                    '<h1 id="firstHeading" class="firstHeading">Liftow <span>|</span> Lachine</h1>' +
                    '<p class="info-para">1936 - 32 Avenue</p>' +
                    '<p class="info-para">Lachine, QC H8T 3J7<p>' +
                    '<p class="info-para phone"><strong><a href="tel:5146339360">(514) 633-9360</a></strong></p>' +
                '</div>',
                45.4419,
                -73.6925,
                "https://cdn.shopify.com/s/files/1/1393/7021/files/liftow-pin.svg?v=1724844407",
                60,
                60,
                "Liftow Lachine"
            ],
            [
                // Liftow | Ottawa
                '<div id="content" class="content">' +
                    '<h1 id="firstHeading" class="firstHeading">Liftow <span>|</span> Ottawa</h1>' +
                    '<p class="info-para">1275 Humber Place, Unit 900</p>' +
                    '<p class="info-para">Ottawa, ON K1B 3W2<p>' +
                    '<p class="info-para phone"><strong><a href="tel:6137373776">(613) 737-3776</a></strong></p>' +
                '</div>',
                45.4201,
                -75.7003,
                "https://cdn.shopify.com/s/files/1/1393/7021/files/liftow-pin.svg?v=1724844407",
                60,
                60,
                "Liftow Ottawa"
            ],
            [
                // Liftow | Quebec City
                '<div id="content" class="content">' +
                    '<h1 id="firstHeading" class="firstHeading">Liftow <span>|</span> Quebec City</h1>' +
                    '<p class="info-para">1060 Chemin Industriel, Unit 3</p>' +
                    '<p class="info-para">Lévis, QC G7A 1B3<p>' +
                    '<p class="info-para phone"><strong><a href="tel:4185313434">(418) 531-3434</a></strong></p>' +
                '</div>',
                45.4201,
                -75.7003,
                "https://cdn.shopify.com/s/files/1/1393/7021/files/liftow-pin.svg?v=1724844407",
                60,
                60,
                "Liftow Quebec City"
            ],
            // Atlantic Canada
            [
                // Liftow | Dartmouth
                '<div id="content" class="content">' +
                    '<h1 id="firstHeading" class="firstHeading">Liftow <span>|</span> Dartmouth</h1>' +
                    '<p class="info-para">110 Wright Ave.</p>' +
                    '<p class="info-para">Dartmouth, NS B3B 1R6<p>' +
                    '<p class="info-para phone"><strong><a href="tel:9024696721">(902) 469-6721</a></strong></p>' +
                '</div>',
                44.6661,
                -63.5676,
                "https://cdn.shopify.com/s/files/1/1393/7021/files/liftow-pin.svg?v=1724844407",
                60,
                60,
                "Liftow Dartmouth"
            ],
            [
                // Liftow | Moncton
                '<div id="content" class="content">' +
                    '<h1 id="firstHeading" class="firstHeading">Liftow <span>|</span> Moncton</h1>' +
                    '<p class="info-para">44 Somers Drive</p>' +
                    '<p class="info-para">Moncton, NB E1H 3C9<p>' +
                    '<p class="info-para phone"><strong><a href="tel:5068535083">(506) 853-5083</a></strong></p>' +
                '</div>',
                46.0878,
                -64.7782,
                "https://cdn.shopify.com/s/files/1/1393/7021/files/liftow-pin.svg?v=1724844407",
                60,
                60,
                "Liftow Moncton"
            ],
            [
                // Liftow | St. John’s
                '<div id="content" class="content">' +
                    '<h1 id="firstHeading" class="firstHeading">Liftow <span>|</span> St. John&apos;s</h1>' +
                    '<p class="info-para">1194 Kenmount Road Unit 2</p>' +
                    '<p class="info-para">Paradise, NL A1L 1N3<p>' +
                    '<p class="info-para phone"><strong><a href="tel:7097543012">(709) 754-3012</a></strong></p>' +
                '</div>',
                47.5275,
                -52.8731,
                "https://cdn.shopify.com/s/files/1/1393/7021/files/liftow-pin.svg?v=1724844407",
                60,
                60,
                "Liftow St. John&apos;s"
            ],
            // MasonLift
            [
                // MasonLift| Delta
                '<div id="content" class="content">' +
                    '<h1 id="firstHeading" class="firstHeading">MasonLift <span>|</span> Delta</h1>' +
                    '<p class="info-para">1605 Cliveden Avenue</p>' +
                    '<p class="info-para">Annacis Island, Delta BC V3M 6P7<p>' +
                    '<p class="info-para phone"><strong><a href="tel:6045176500">(604) 517-6500</a></strong></p>' +
                '</div>',
                49.1722,
                -122.9451,
                "https://cdn.shopify.com/s/files/1/1393/7021/files/liftow-pin.svg?v=1724844407",
                60,
                60,
                "MasonLift Delta"
            ],
            [
                // MasonLift| Victoria
                '<div id="content" class="content">' +
                    '<h1 id="firstHeading" class="firstHeading">MasonLift <span>|</span> Victoria</h1>' +
                    '<p class="info-para">6765 Kirkpatrick Crescent</p>' +
                    '<p class="info-para">Victoria, BC V8M 1Z8<p>' +
                    '<p class="info-para phone"><strong><a href="tel:2505444836">(250) 544-4836</a></strong></p>' +
                '</div>',
                48.4284,
                -123.3656,
                "https://cdn.shopify.com/s/files/1/1393/7021/files/liftow-pin.svg?v=1724844407",
                60,
                60,
                "MasonLift Victoria"
            ],
            [
                // MasonLift| Prince George
                '<div id="content" class="content">' +
                    '<h1 id="firstHeading" class="firstHeading">MasonLift <span>|</span> Prince George</h1>' +
                    '<p class="info-para">1062 Eastern Street</p>' +
                    '<p class="info-para">Prince George, BC V2N 5R8<p>' +
                    '<p class="info-para phone"><strong><a href="tel:2505622200">(250) 562-2200</a></strong></p>' +
                '</div>',
                53.9171,
                -122.7497,
                "https://cdn.shopify.com/s/files/1/1393/7021/files/liftow-pin.svg?v=1724844407",
                60,
                60,
                "MasonLift Prince George"
            ],
            [
                // MasonLift| Kelowna
                '<div id="content" class="content">' +
                    '<h1 id="firstHeading" class="firstHeading">MasonLift<span> |</span> Kelowna</h1>' +
                    '<p class="info-para">3038 Sexsmith Road</p>' +
                    '<p class="info-para">Kelowna, BC V1X 7S6<p>' +
                    '<p class="info-para phone"><strong><a href="tel:2507656575">(250) 765-6575</a></strong></p>' +
                '</div>',
                49.8863,
                -119.4966,
                "https://cdn.shopify.com/s/files/1/1393/7021/files/liftow-pin.svg?v=1724844407",
                60,
                60,
                "MasonLift Kelowna"
            ],
            [
                // MasonLift| Kamloops
                '<div id="content" class="content">' +
                    '<h1 id="firstHeading" class="firstHeading">MasonLift <span>|</span> Kamloops</h1>' +
                    '<p class="info-para">755 Sarcee Street</p>' +
                    '<p class="info-para">Kamloops, BC V2H 1E6<p>' +
                    '<p class="info-para phone"><strong><a href="tel:2503740911">(250) 374-0911</a></strong></p>' +
                '</div>',
                50.6745,
                -120.3273,
                "https://cdn.shopify.com/s/files/1/1393/7021/files/liftow-pin.svg?v=1724844407",
                60,
                60,
                "MasonLift Kamloops"
            ],
            // Northern ToyotaLift
            [
                // Northern ToyotaLift | Burlington, Vermont
                '<div id="content" class="content">' +
                    '<h1 id="firstHeading" class="firstHeading">Northern ToyotaLift <span>|</span> Burlington</h1>' +
                    '<p class="info-para">683 Pine St</p>' +
                    '<p class="info-para">Burlington, VT 05401<p>' +
                    '<p class="info-para phone"><strong><a href="tel:8002440135">(800) 244-0135</a></strong></p>' +
                '</div>',
                44.4759,
                -73.2121,
                "https://cdn.shopify.com/s/files/1/1393/7021/files/liftow-pin.svg?v=1724844407",
                60,
                60,
                "Northern ToyotaLift  Burlington, Vermont"
            ]
        ];

        // Loop through the location marker array + attach markers
        for (i=0; i<markers.length; i++) {

            const currentMarker = markers[i];

            const customMarker = new google.maps.Marker({
                position: { lat: currentMarker[1], lng: currentMarker[2] },
                map,
                icon: {
                    url: currentMarker[3],
                    scaledSize: new google.maps.Size(currentMarker[4],currentMarker[5])
                },
            });

            // Info window
            const contentString = currentMarker[0];

            const infowindow = new google.maps.InfoWindow({
                content: contentString,
                ariaLabel: currentMarker[6],
            });

            customMarker.addListener("click", () => {
                infowindow.open({
                anchor: customMarker,
                map,
                });
            });

        }

    }


    // Trigger initMap() function
    initMap();

    // Reference Google map | Input API Key
    // Uses callback for initMap() function
    async
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAXdCB6VHBwgbsJsj7lrlAmnMyzw8NwJuU&loading=async&callback=initMap">

    // Google Map Script| END