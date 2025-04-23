import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from 'recharts';


const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;
  const getPath = (x, y, width, height) =>
    `M${x},${y + height}
     C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
     C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
     Z`;

  return <path d={getPath(x, y, width, height)} fill={fill} stroke="none" />;
};



const CustomLabel = ({ x, y, width, value }) => {
  const centerX = x + width / 2;
  return (
    <text
      x={centerX}
      y={y - 10}
      fill="#333"
      fontSize={14}
      textAnchor="middle"
    >
      {value}
    </text>
  );
};

const Rechart = ({ displayData }) => {
  const colors = [
    '#8884d8',
    '#82ca9d',
    '#ffc658',
    '#ff7f50',
    '#a28ef5',
    '#ffb6b9',
  ];

  const transformedData = displayData.map((item, index) => ({
    ...item,
    fee: parseInt(item.fee),
    color: colors[index % colors.length],
  }));

  return (
    <div className="py-5 h-[500px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={transformedData}
          margin={{ top: 40, right: 30, left: 20, bottom: 40 }}
        >
          <XAxis
            dataKey="name"
            label={{
              value: 'Doctor Name',
              position: 'insideBottom',
              offset: -5,
              fontSize: 12,
            }}
          />
          <YAxis
            label={{
              value: 'Fee (Taka)',
              angle: -90,
              position: 'insideLeft',
              offset: -5,
              fontSize: 12,
            }}
          />
          <Bar
            dataKey="fee"
            shape={<TriangleBar />}
            label={<CustomLabel />}
            isAnimationActive={false}
          >
            {transformedData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Rechart;
