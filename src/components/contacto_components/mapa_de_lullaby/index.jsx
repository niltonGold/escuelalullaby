

// import React, { useState, useEffect } from 'react';
// import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

// const MapComponent = ({ apiKey, address }) => {
//   const [location, setLocation] = useState({ lat: 0, lng: 0 });

//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: apiKey,
//   });

//   const geocodeAddress = async (address) => {
//     const geocoder = new window.google.maps.Geocoder();
//     geocoder.geocode({ address: address }, (results, status) => {
//       if (status === 'OK') {
//         const location = results[0].geometry.location;
//         setLocation({ lat: location.lat(), lng: location.lng() });
//       } else {
//         console.error('Geocode was not successful for the following reason: ' + status);
//       }
//     });
//   };

//   useEffect(() => {
//     if (isLoaded && address) {
//       geocodeAddress(address);
//     }
//   }, [isLoaded, address]);

//   const containerStyle = {
//     width: '100%',
//     height: '100%'
//   };

//   if (loadError) {
//     return <div>Error loading maps</div>;
//   }

//   return isLoaded ? (
//     <GoogleMap
//       mapContainerStyle={containerStyle}
//       center={location}
//       zoom={15}
//     >
//       {location.lat !== 0 && location.lng !== 0 && (
//         <Marker position={location} />
//       )}
//     </GoogleMap>
//   ) : (
//     <div>Loading...</div>
//   );
// };

// export default MapComponent;



import React, { useState, useEffect } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const MapComponent = ({ apiKey, address }) => {
  const [location, setLocation] = useState({ lat: 0, lng: 0 });

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: apiKey,
  });

  const geocodeAddress = async (address) => {
    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address: address }, (results, status) => {
      if (status === 'OK') {
        const location = results[0].geometry.location;
        setLocation({ lat: location.lat(), lng: location.lng() });
      } else {
        console.error('Geocode was not successful for the following reason: ' + status);
      }
    });
  };

  useEffect(() => {
    if (isLoaded && address) {
      geocodeAddress(address);
    }
  }, [isLoaded, address]);

  const containerStyle = {
    width: '100%',
    height: '100%'
  };

  const mapOptions = {
    styles: [
      {
        elementType: 'geometry',
        stylers: [{ color: '#405783' }]
      },
      {
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#242f3e' }]
      },
      {
        elementType: 'labels.text.fill',
        stylers: [{ color: '#746855' }]
      },
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }]
      },
      {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#f2f4f7' }]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{ color: '#263c3f' }]
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#6b9a76' }]
      },
      {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{ color: '#03195c' }]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#212a37' }]
      },
      {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#ffffff' }] // Pure white for road labels
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{ color: '#746855' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#1f2835' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#f3d19c' }]
      },
      {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{ color: '#2f3948' }]
      },
      {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#d59563' }]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#17263c' }]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{ color: '#b1c3fa' }]
      },
      {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{ color: '#b1c3fa' }]
      }
    ]
  };

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={location}
      zoom={15}
      options={mapOptions}
    >
      {location.lat !== 0 && location.lng !== 0 && (
        <Marker position={location} />
      )}
    </GoogleMap>
  ) : (
    <div>Loading...</div>
  );
};

export default MapComponent;

