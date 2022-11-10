import React from 'react';
import styled from 'styled-components';
import NavLink from '@components/atoms/NavLink';

const NavBlock = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 32px;
  font-weight: bold;
  margin-right: 30px;
`;

const NavBox = () => {
  return (
    <NavBlock>
      <Title>Memorithm</Title>
      <NavLink linkTo="/" linkName="Home" />
      <NavLink linkTo="/" linkName="Run Code" />
    </NavBlock>
  );
};

export default NavBox;
