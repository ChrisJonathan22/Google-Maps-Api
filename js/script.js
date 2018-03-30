function initMap() {
    // Map options

    let options = {
        zoom: 12,
        center:{lat:52.6369, lng: -1.1398}
    }
    // New map

    let map = new google.maps.Map(document.getElementById("map"), options);

    // Listen for click on map
    google.maps.event.addListener(map, "click", 
    function (event) {
        // Add marker

        addMarker({coords:event.latLng});
    });

    // Add marker

    // let marker = new google.maps.Marker({
    //     position: {lat:52.6369, lng: -1.1398},
    //     map: map,
    //     icon: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
    // });

    // let infoWindow = new google.maps.InfoWindow({
    //     content: "<h1>Leicester</h1>"
    // });

    // marker.addListener("click", function () {
    //     infoWindow.open(map, marker);
    // });

        // Array of markers

        let markers = [
            {coords:{lat:52.6369, lng: -1.1398},
        iconImage: "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png",
        content: "<h1>Leicester</h1>"
        },
        {coords:{lat:42.7762, lng: -71.0773}}

        ];

        // Loop through markers

        for (let i = 0; i < markers.length; i++) {
            // Add marker
            addMarker(markers[i]);
            
        }


        




    // Add Marker Function

    function addMarker(props) {
        let marker = new google.maps.Marker({
            position: props.coords,
            map: map,
            //icon: props.iconImage
        });

        // Check for custom icon

        if (props.iconImage) {
            // Set icon image

            marker.setIcon(props.iconImage);
        }
        
        // Check content
        if (props.content) {
            let infoWindow = new google.maps.InfoWindow({
                     content: props.content
                 });

        marker.addListener("click", function () {
            infoWindow.open(map, marker);
        });
                 
        }
    }
}

