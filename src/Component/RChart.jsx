import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';

// Triangle 
const TriangleBar = ({ fill, x, y, width, height }) => {
  const getPath = (x, y, width, height) => (
    `M${x},${y + height}
     C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
     C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
     Z`
  );
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

// Tooltip
const CustomTooltip = ({ payload, label, active }) => {
  if (active && payload && payload.length > 0) {
    const { fee, specialty, experience } = payload[0].payload;
    return (
      <div className="bg-white p-3 border border-gray-300 rounded shadow-lg text-sm">
        <p className="font-bold">{label}</p>
        <p>Fee: Taka{fee}</p>
        <p>Specialty: {specialty}</p>
        <p>Experience: {experience}</p>
      </div>
    );
  }
  return null;
};

// Fee top
const CustomLabel = ({ x, y, width, value }) => {
  const centerX = x + width / 2;
  const topY = y;
  return (
    <text
      x={centerX}
      y={topY - 8} 
      fill="#333"
      fontSize={14}
      textAnchor="middle"
    >
       {value}
    </text>
  );
};





const Rechart = ({ displayData }) => {
  const colors = ['#8884d8', '#82ca9d', '#ffc658', '#ff7f50', '#a28ef5', '#ffb6b9'];

  const transformedData = displayData.map((item, index) => ({
    ...item,
    fee: parseInt(item.fee),
    color: colors[index % colors.length]
  }));




  return (
    <div className="py-5 flex justify-center">
      <BarChart
        width={800}

        height={450}
        data={transformedData}
        margin={{ top: 40, right: 30, left: 20, bottom: 5 }} 
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Bar
        
          dataKey="fee"

          shape={<TriangleBar />}
          label={<CustomLabel />}
        >
          {transformedData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default Rechart;
