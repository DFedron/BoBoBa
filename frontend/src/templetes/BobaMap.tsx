import React from 'react'
import { useLoadScript } from '@react-google-maps/api'
import Map from "../components/Map";
// import Navbar from '../components/Navbar';

export default function BobaMap() {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: "AIzaSyDeZe5B-4s_wV_BIMfC50edmg6FtqXdBpo",
        // googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY,
        libraries: ["places"],
    });

    if(!isLoaded) return <div>LOADING...</div>
    return (
        <>
            <Map />
        </>
    )
}

export {}