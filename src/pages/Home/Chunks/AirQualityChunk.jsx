import { Pie } from "@antv/g2plot";
import React, { useEffect, useRef } from "react";

const AirQualityChunk = () => {
  const data = [
    { type: "Oxygen", value: 70 },
    { type: "CO2", value: 20 },
    { type: "Methane", value: 10 },
  ];
  const containerRef = useRef(null);
  const pieRef = useRef(null); // Store gauge instance

  useEffect(() => {
    if (containerRef.current) {
      const piePlot = new Pie(containerRef.current, {
        appendPadding: 10,
        data,
        angleField: "value",
        colorField: "type",
        radius: 1,
        innerRadius: 0.6,
        label: {
          type: "inner",
          offset: "-50%",
          content: "{value}",
          style: {
            textAlign: "center",
            fontSize: 14,
          },
        },
        interactions: [
          { type: "element-selected" },
          { type: "element-active" },
        ],
        statistic: {
          title: false,
          content: {
            style: {
              whiteSpace: "pre-wrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            },
            content: "Stable",
          },
        },
      });

      piePlot.render();
      pieRef.current = piePlot; // Store gauge instance
    }

    return () => {
      pieRef.current?.destroy(); // Cleanup when unmounting
      pieRef.current = null;
    };
  }, []);

  return (
    <div className="flex flex-col">
      <h4 className="font-one font-bold py-6 pl-8 text-xl md:pl-0">Air Quality</h4>
      <div ref={containerRef} style={{ width: 370, height: 370 }} />
    </div>
  );
};

export default AirQualityChunk;
