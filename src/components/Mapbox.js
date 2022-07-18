import { getCenter } from "geolib";
import React, { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";

function Mapbox({ searchResults,center }) {
  const [selectedLocation, setSelectedLocation] = useState({});
  // const coordinates = searchResults.map((result) => ({
  //   latitude: result.lat,
  //   longitude: result.long,
  // }));

  // const center = getCenter(coordinates);
  const [viewState, setViewState] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  // console.log(coordinates);
  // console.log(selectedLocation);
  console.log(center);
  return (
    <Map
      mapStyle="mapbox://styles/khushtarfaraz/cl3sxs6mg000015o3vyjgc427"
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      {...viewState}
      onMove={(evt) => setViewState(evt.viewState)}
      style={{ width: 600, height: 1000 }}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            latitude={result.lat}
            longitude={result.long}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer text-2xl animate-bounce"
            >
              📍
            </p>
          </Marker>

          <Popup
            onClose={() => setSelectedLocation({})}
            closeOnClick={true}
            latitude={result?.lat}
            longitude={result?.long}
            anchor="bottom"
          >
            {result?.title}
          </Popup>
        </div>
      ))}
    </Map>
  );
}

export default Mapbox;
