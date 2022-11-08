import fetch from 'node-fetch';
import { IActivity } from '@src/store/modules/activity/reducer';

export interface IRequest {}
export interface IError {
  message: string;
}

const fetchActivities = (): Promise<IActivity[]> => {
  return fetch('https://jsonplaceholder.typicode.com/todos').then((res) => {
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    return res.json() as Promise<IActivity[]>;
  });
};

export default {
  fetchActivities,
};
