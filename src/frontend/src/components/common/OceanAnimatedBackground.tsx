export default function OceanAnimatedBackground() {
  return (
    <>
      {/* Static ocean background layer */}
      <div className="ocean-background-static" />
      
      {/* Animated ocean wave layers */}
      <div className="ocean-wave-layer ocean-wave-1" />
      <div className="ocean-wave-layer ocean-wave-2" />
      <div className="ocean-wave-layer ocean-wave-3" />
      
      {/* Readability overlay */}
      <div className="ocean-overlay" />
    </>
  );
}
