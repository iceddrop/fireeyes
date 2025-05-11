import React, { useEffect, useRef } from "react";
import { Gauge } from "@antv/g2plot";

const GaugeChunk = () => {
  const containerRef = useRef(null);
  const gaugeRef = useRef(null); // Store gauge instance


  useEffect(() => {
    if (containerRef.current) {
      const gauge = new Gauge(containerRef.current, {
        percent: 0.75, // 75% value
        range: {
          ticks: [0, 1 / 3, 2 / 3, 1],
          color: ["#F4664A", "#FAAD14", "#30BF78"],
        },
        indicator: {
          pointer: { style: { stroke: "#D0D0D0" } },
          pin: { style: { stroke: "#D0D0D0" } },
        },
        statistic: {
          content: { style: { fontSize: "36px", lineHeight: "36px" } },
        },
      });

      gauge.render();
      gaugeRef.current = gauge; // Store gauge instance
    }

    return () => {
      gaugeRef.current?.destroy(); // Cleanup when unmounting
      gaugeRef.current = null;
    };
  }, []);

  return (
    <>
  <div ref={containerRef} style={{ width: 300, height: 300 }} />
  
  </>
  )
};



export default GaugeChunk;
