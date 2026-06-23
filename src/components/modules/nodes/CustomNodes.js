import React from 'react'
import { Handle, Position } from '@xyflow/react';

const CustomNodes = ({ data }) => {
  return (
    <div style={{ position: "relative", textAlign: "center", zIndex: 10 }}>
      <Handle type="source" position={Position.Top} style={{ background: '#555' }} />
      <Handle type="target" position={Position.Bottom} style={{ background: '#555' }} />
      <Handle type="source" position={Position.Left} style={{ background: '#555' }} />
      <Handle type="target" position={Position.Right} style={{ background: '#555' }} />

      {/* show pic*/}
      <img
        src={data.image}
        alt={data.label}
        style={{ width: 40, height: 40, borderRadius: "50%", border: "2px solid #333" }}
      />

      {/* show node info*/}
      <div
        style={{
          position: "absolute",
          bottom: -50,
          left: "50%",
          width:'100px',
          transform: "translateX(-50%)",
          background: "#58FEDB  ",
          color: "green",
          padding: "5px",
          borderRadius: "5px",
          fontSize: "9px",
        }}
      >
        {data.label}
      </div>
    </div>
  );
};
export default CustomNodes