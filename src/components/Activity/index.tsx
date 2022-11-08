import React from 'react';

interface IProps {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const Activity: React.FC<IProps> = ({ userId, id, title, completed }) => {
  return (
    <div>
      <span>{userId}</span>
      <span>{id}</span>
      <span>{title}</span>
      <span>{completed}</span>
    </div>
  );
};

export default Activity;
