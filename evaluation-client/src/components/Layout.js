import React from 'react';

import {Outlet} from "react-router-dom";
import {css} from "@emotion/css";
import NavBar from "./NavBar";

const container = css`
  display: flex;
  flex-direction: column;
  width: 1210px;
  height: 50em;
  border-color: transparent;
`;

const Layout = () => (
  <div className={container}>
    <NavBar/>
    <Outlet/>
  </div>
);

export default Layout;
