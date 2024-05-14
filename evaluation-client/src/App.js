import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { css } from '@emotion/css';

import Layout from './components/Layout';
import PageA from './pages/PageA';
import PageB from './pages/PageB';

const styles = css`
  display: flex;
  justify-content: center;
  margin: 0;
`;

const App = () => (
  <Router>
    <div className={styles}>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/pageA' element={<PageA/>} index={true} />
          <Route path='/pageB' element={<PageB/>} />
        </Route>
      </Routes>
    </div>
  </Router>
);

export default App;
