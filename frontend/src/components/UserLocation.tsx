import React, { useState, useEffect } from "react";

type AnchorProp = {
    setAnchor: (position: google.maps.LatLngLiteral) => void;
}

export default function UserLocation({setAnchor}: AnchorProp) {
    const [lat, setLat] = useState<any>(null);
    const [lng, setLng] = useState<any>(null);
    const [status, setStatus] = useState<any>(null);

    useEffect(() => {
        getLocation();
    })
    const getLocation = () => {
        if(!navigator.geolocation){
            setStatus('Geolocation is not supported by your browser');
        } else {
            setStatus('Locating...');
            navigator.geolocation.getCurrentPosition((position) => {
                setStatus(null);
                setLat(position.coords.latitude);
                setLng(position.coords.longitude);
                setAnchor({lat, lng});
            }, () => {
                setStatus('Unable to retrieve your location');
            });
        }
    }
    
    return (
    <div className="App">
      
        {/* <button id="location" onClick={getLocation}>Get Current Coords</button> */}
        
        {/* <h1>Coordinates</h1> */}
        {/* <p>{status}</p> */}
        {/* {lat && <p>Latitude: {lat}</p>} */}
        {/* {lng && <p>Longitude: {lng}</p>} */}
    </div>
    )
}