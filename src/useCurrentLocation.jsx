import { useState } from "react";

function useCurrentLocation() {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getUserCurrentLocation = () => {
    setLoading(true);

    if (!navigator.geolocation) {
      setError("Your current browser does not support geolocation services.");
      setLoading(false);
    } else {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError);
    }
  };

  function handleSuccess(position) {
    setCurrentLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
    setLoading(false);
  }

  function handleError(error) {
    setError(error.message);
    setLoading(false);
  }

  return { currentLocation, getUserCurrentLocation, loading, error };
}

export default useCurrentLocation;
