import OpenStreetMapComponent from './OpenStreetMapComponent';

// ... 其他代碼 ...

<div style={{ position: 'relative', minHeight: '700px' }}>
  <HardwareConfiguration />
  <div style={{ position: 'absolute', right: '20px', bottom: '20px' }}>
    <NetworkStatus />
    <OpenStreetMapComponent location={location} />
  </div>
</div> 