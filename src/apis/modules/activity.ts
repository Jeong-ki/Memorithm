import fetch from 'node-fetch';

export interface IActivity {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export const fetchActivities = (): Promise<IActivity> => {
  return fetch('https://jsonplaceholder.typicode.com/todos').then((res) => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json() as Promise<IActivity>;
  });
};
