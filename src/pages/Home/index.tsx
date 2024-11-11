import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { icon } from 'leaflet';

// 修復 Leaflet 預設圖標問題
const customIcon = icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// ... 其他 imports ...

export default function Home() {
  const [position, setPosition] = useState<[number, number]>([25.0330, 121.5654]); // 預設台北位置

  return (
    <div style={{ position: 'relative', minHeight: '700px' }}>
      {/* ... 其他內容 ... */}
      
      <div style={{ position: 'absolute', right: '20px', bottom: '20px' }}>
        <NetworkStatus />
        <div style={{ marginTop: '20px' }}>
          <MapContainer 
            center={position} 
            zoom={13} 
            style={{ 
              height: '300px', 
              width: '400px',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={customIcon}>
              <Popup>
                您的位置在這裡
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
} 