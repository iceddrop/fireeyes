import React, { useEffect, useRef } from "react";
import { Gauge } from "@antv/g2plot";

const Temperature = () => {
     const containerRef = useRef(null);
      const tempRef = useRef(null);

       useEffect(() => {
          if (containerRef.current) {
            const gauge = new Gauge(containerRef.current, {
              percent: 0.2, // 75% value
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
            tempRef.current = gauge; // Store gauge instance
          }
      
          return () => {
            tempRef.current?.destroy(); // Cleanup when unmounting
            tempRef.current = null;
          };
        }, []);
    return (
           <div>
            <h4 className="font-one font-bold py-6">Temperature</h4>
               <div ref={containerRef} style={{ width: 300, height: 300 }} />
            </div>
    )
}

export default Temperature;