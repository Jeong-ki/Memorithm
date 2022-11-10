import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderLink = styled(Link)`
  font-size: 20px;
  margin: 0 15px;
  color: #000;
  font-weight: lighter;
  &,
  &:visited,
  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
  }
`;

interface ILink {
  linkTo: string;
  linkName: string;
}

const NavLink = ({ linkTo, linkName }: ILink) => {
  return <HeaderLink to={linkTo}>{linkName}</HeaderLink>;
};

export default NavLink;
