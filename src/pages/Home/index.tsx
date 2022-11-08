import React, { useEffect } from 'react';
import useActivity from '../../hooks/useActivity';
import Activity from '../../components/Activity';

const Home: React.FC = () => {
  const { activities, fetchActivities } = useActivity();

  useEffect(() => {
    fetchActivities();
  }, []);

  return (
    <div>
      Activity!!
      {activities && activities.map((activity, index) => <Activity {...activity} key={index} />)}
    </div>
  );
};

export default Home;
