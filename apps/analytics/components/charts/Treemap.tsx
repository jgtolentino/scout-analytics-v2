'use client';
import React from 'react';
import { Treemap, ResponsiveContainer } from 'recharts';

interface TreemapData {
  name: string;
  size: number;
  children?: TreemapData[];
}

export function ProductTreemap({ data }: { data: TreemapData }) {
  const COLORS = ['#8889DD', '#9597E4', '#8DC77B', '#A5D297'];

  const CustomContent = (props: any) => {
    const { x, y, width, height, name, value, index } = props;
    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          style={{
            fill: COLORS[index % COLORS.length],
            stroke: '#fff',
            strokeWidth: 2,
          }}
        />
        {width > 50 && height > 50 && (
          <>
            <text
              x={x + width / 2}
              y={y + height / 2 - 10}
              textAnchor="middle"
              fill="#fff"
              fontSize="14"
              fontWeight="bold"
            >
              {name}
            </text>
            <text
              x={x + width / 2}
              y={y + height / 2 + 10}
              textAnchor="middle"
              fill="#fff"
              fontSize="12"
            >
              {value}%
            </text>
          </>
        )}
      </g>
    );
  };

  return (
    <ResponsiveContainer width="100%" height={400}>
      <Treemap
        data={[data]}
        dataKey="size"
        content={<CustomContent />}
      />
    </ResponsiveContainer>
  );
}