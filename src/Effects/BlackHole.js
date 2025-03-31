import { useEffect, useRef } from 'react';
import Vortex from 'vortex-effect';

export default function BlackHole() {
  const containerRef = useRef(null);

  useEffect(() => {
    const vortex = new Vortex({
      element: containerRef.current,
      intensity: 0.7
    });

    return () => vortex.destroy();
  }, []);

  return <div ref={containerRef} className="black-hole-container" />;
}

