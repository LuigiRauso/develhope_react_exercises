import React, { useEffect } from "react";
import useCurrentLocation from "../useCurrentLocation";

function Location() {
  const { currentLocation, getUserCurrentLocation, loading, error } =
    useCurrentLocation();

  return (
    <>
      <div>
        <h2>Get your Current Location</h2>
        <p>Press the button below to start.</p>
        <button onClick={getUserCurrentLocation}>Fetch Location</button>
        <p>{loading && "The Geolocation service is Loading.."}</p>
        <p>{error && `Geolocation Error: ${error}`}</p>
        <div>
          <p>{currentLocation && `Latitude: ${currentLocation.latitude}`}</p>
          <p>{currentLocation && `Longitude: ${currentLocation.longitude}`}</p>
        </div>
      </div>
    </>
  );
}

export default Location;
