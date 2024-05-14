import React from 'react';
import { css } from '@emotion/css';
import { useNavigate } from 'react-router-dom';

export const button = css`
  display: flex;
  align-items: center;
  justify-content: center;
  border-color: transparent;
  font-weight: 800;
  line-height: 1.5;
  background-color: transparent;
  color: white;
  font-size: large;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    color: aquamarine;
  }
`;

const NavButton = ({ title, href }) => {
  const navigate = useNavigate();

  const goTo = () => navigate(`/${href}`);

  return (
    <button className={button} onClick={goTo}>
      {title}
    </button>
  );
}

export default NavButton;
