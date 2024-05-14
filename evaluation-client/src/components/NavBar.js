import React from 'react';
import {css} from "@emotion/css";
import NavButton from "./NavButton";

export const container = css`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  flex-direction: row;
`;

const NavBar = () => (
  <div className={container}>
    <div className={css`margin: 20px;`}>
      <NavButton href="pageA" title={'PageA'}/>
    </div>
    <div className={css`margin:20px;`}>
      <NavButton href="pageB" title={'PageB'}/>
    </div>
  </div>
);

export default NavBar;
