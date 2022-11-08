import fetch from 'node-fetch';

export interface IEmployee {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const fetchEmployees = (): Promise<IEmployee> => {
  return fetch('https://jsonplaceholder.typicode.com/todos').then((res) => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }

    return res.json() as Promise<IEmployee>;
  });
};
