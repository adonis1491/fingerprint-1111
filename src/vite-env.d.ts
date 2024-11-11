/// <reference types="vite/client" />

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

const customIcon = icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

<OpenStreetMapComponent location={{ lat: 25.0330, lng: 121.5654 }} />