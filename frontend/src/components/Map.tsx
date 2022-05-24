import { useState, useMemo, useCallback, useRef } from "react";
import {
    GoogleMap,
    Marker,
    // DirectionsRenderer,
    Circle,
    // MarkerClusterer,
} from "@react-google-maps/api";
import '../styles/mapStyles.css';
import UserLocation from "./UserLocation";
// import Distance from "./distance"

type LatLngLiteral = google.maps.LatLngLiteral;
// type DirectionsResult = google.maps.DirectionsResult;
type MapOptions = google.maps.MapOptions;

export default function Map() {
    const [anchor, setAnchor] = useState<LatLngLiteral>();
    const mapRef = useRef<GoogleMap>();
    const center = useMemo<LatLngLiteral>(() => ({lat: 45.5, lng: -122.67 }), []);
    const options = useMemo<MapOptions>(() => ({
        mapId: "c22bb338ab1586ba",  //light-mode
        // mapId: "b11682a15259dc5f",     //dark-mode
        disableDefaultUI: true, //hides map type option
        clickableIcons: false   //hides clickable markers
        
    }), []);
    const onLoad = useCallback((map:any) => (mapRef.current = map), []);
    const bobaStores = useMemo(() => findBobaStores(center), [center]);   //set anchor instead of center???

    return(
        <div className="container">
            <div className="controls">
                <h1>User Geolocation Info</h1>
                <UserLocation 
                    setAnchor={(position) => {
                        setAnchor(position);
                        mapRef.current?.panTo(position);
                    }}
                />
            </div>
            <div className="map">
                <GoogleMap 
                    zoom={12} 
                    center={center} 
                    mapContainerClassName="map-container"
                    options={options}
                    onLoad={onLoad}
                >
                    {anchor && (
                        <>
                            <Marker 
                                position={anchor}
                                icon={{
                                    url: "https://cdn-icons-png.flaticon.com/512/3081/3081162.png",
                                    scaledSize: new google.maps.Size(70,70)   //size of icon display
                                }}                    
                            />

                            {bobaStores.map((store:any) => <Marker position={store}/>)}

                            <Circle 
                                center={anchor} 
                                radius={3218.69}   //radius in meters, 3218.69m = 2mi
                                options={shortDistance}
                            />                     
                            <Circle 
                                center={anchor} 
                                radius={8047}   //radius in meters, 8047m = 5mi
                                options={mediumDistance}
                            />  
                            <Circle 
                                center={anchor} 
                                radius={12874.8}   //radius in meters, 12874.8m = 10mi
                                options={longDistance}
                            />  
                        </>
                    )}
                </GoogleMap>
            </div>
        </div>
    )
}


const defaultSettings = {
    strokeOpacity: 0.5,
    strokeWeight: 2,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
};

const shortDistance = {
    ...defaultSettings,
    zIndex: 3,
    fillOpacity: 0.15,
    strokeColor: "#50fa64",
    fillColor: "#50fa64",
}

const mediumDistance = {
    ...defaultSettings,
    zIndex: 2,
    fillOpacity: 0.1,
    strokeColor: "#facd50",
    fillColor: "#facd50",
}

const longDistance = {
    ...defaultSettings,
    zIndex: 1,
    fillOpacity: 0.05,
    strokeColor: "#f53b3b",
    fillColor: "#f53b3b",
}
const findBobaStores = ((position: LatLngLiteral) => {
    const _bobaStores: Array<LatLngLiteral> = [];
    let service = new google.maps.places.PlacesService(document.createElement('div'));
    let request = {
        location: position,
        keyword: 'boba',
        radius: 3100,
    }
    // nearbySearch() returns an array of PlaceResult objects
    // callback() is required to handle the results ^^^^
    // default 20 results, for more use PlaceSearchPagination 'Accessing Additional Results'
    service.nearbySearch(request, callback);
    function callback(results:any, status:any) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
                //results is returning JSON object in console, now how do I extract lat/lng
                //and passback to create markers on each coordinate tuple?
                if(results[i].business_status === "OPERATIONAL"){
                    console.log(results[i].name)
                    _bobaStores.push(results[i].geometry.location)
                }
            }
        }
    }

    //TEST FUNCTION: randomly generates {lat, lng} coordinates for marking
    // for(let i=0; i<10; i++) {
    //     const direction = Math.random() < 0.5 ? -2 : 2;
    //     _bobaStores.push({
    //         lat: position.lat + Math.random() / direction,
    //         lng: position.lng + Math.random() / direction,
    //     })
    // }

    return _bobaStores;
});