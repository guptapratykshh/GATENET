import React from 'react';

interface ProgressCircleProps {
  progress: number; // 0 to 100
  size?: number;
  strokeWidth?: number;
  color?: string;
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({
  progress,
  size = 80,
  strokeWidth = 8,
  color = '#4299e1', // blue-500
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const dash = (progress * circumference) / 100;

  return (
    <svg width={size} height={size} className="transform -rotate-90">
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="transparent"
        stroke="#1a365d" // navy-800
        strokeWidth={strokeWidth}
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="transparent"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={circumference - dash}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default ProgressCircle;