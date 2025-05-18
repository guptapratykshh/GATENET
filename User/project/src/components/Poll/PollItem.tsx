import React from 'react';
import Card from '../UI/Card';
import ProgressCircle from '../UI/ProgressCircle';

interface PollItemProps {
  id: string;
  title: string;
  progress: number;
  onClick: (id: string) => void;
}

const PollItem: React.FC<PollItemProps> = ({ id, title, progress, onClick }) => {
  return (
    <div className="mb-6 flex items-center">
      <div className="mr-4">
        <ProgressCircle progress={progress} />
      </div>
      <div 
        className="text-white text-xl cursor-pointer hover:text-blue-300 transition-colors"
        onClick={() => onClick(id)}
      >
        {title}
      </div>
    </div>
  );
};

export default PollItem;