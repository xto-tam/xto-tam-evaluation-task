import React, { useEffect } from 'react';
import { css } from '@emotion/css';

import { sendUserActivity } from '../utils/api';

const container = css`
display: flex;
  align-items: center;
  justify-content: center;
  height: 600px;
  font-weight: 800;
`;

const PageA = () => {
  useEffect(() => {
    sendUserActivity({ url: '/pageA' });
  }, []);

  return (
    <div className={container}>
      PageA
    </div>
  );
}

export default PageA;
