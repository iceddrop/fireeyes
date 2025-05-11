import React, { useEffect, useRef } from "react";
import { Liquid } from "@antv/g2plot";

const Humidity = () => {
  const containerRef = useRef(null);
  const liquidRef = useRef(null); //Store liquid instance

  useEffect(() => {
    if (containerRef.current) {
      const liquidPlot = new Liquid(containerRef.current, {
        percent: 0.25,
      });

      liquidPlot.render();
      liquidRef.current = liquidPlot; //store guage instance
    }

    return () => {
      liquidRef.current?.destroy(); //cleanup when mounting
      liquidRef.current = null;
    };
  }, []);

  return (
    <div>
      <h4 className="font-one font-bold py-6">Humidity</h4>
      <div ref={containerRef} style={{ width: 300, height: 300 }} />
    </div>
  );
};

export default Humidity;
