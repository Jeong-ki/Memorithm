import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { increase, decrease } from '@actions/counterAction';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100px;
  border: 1px solid rgb(200, 200, 200);
  border-radius: 20px;
`;

function Home() {
  const number = useSelector((state: any) => state.counterReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <Container>hi</Container>
      My Home
      <h3 style={{ color: 'black' }}>{moment().format('MMMM Do YYYY, h:mm:ss a')}</h3>
      <div>counter: {number}</div>
      <button type="button" onClick={() => dispatch(increase())}>
        increase
      </button>
      <button type="button" onClick={() => dispatch(decrease())}>
        decrease
      </button>
    </div>
  );
}

export default Home;
