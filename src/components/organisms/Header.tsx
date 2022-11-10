import React from 'react';
import styled from 'styled-components';
import NavBox from '../molecules/NavBox';

const Sheader = styled.header`
  display: flex;
  padding: 15px 60px;
  background-color: antiquewhite;
`;

const Header = () => (
  <Sheader>
    <NavBox />

    <div>
      <input type="text" />
      <button type="button">로그인</button>
      <button type="button">회원가입</button>
    </div>
  </Sheader>
);

export default Header;
