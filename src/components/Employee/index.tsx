import { IEmployee } from '@src/apis/modules/employee';
import React from 'react';

interface IProps extends IEmployee {}

const Employee: React.FC<IProps> = ({ userId, id, title, completed }: IEmployee) => {
  return (
    <div>
      <span>{userId}</span>
      <span>{id}</span>
      <span>{title}</span>
      <span>{completed}</span>
    </div>
  );
};

export default Employee;
