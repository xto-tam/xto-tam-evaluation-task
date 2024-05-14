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

const PageB = () => {
  useEffect(() => {
    sendUserActivity({ url: '/pageB' });
  }, []);

  return (
    <div className={container}>
      PageB
    </div>
  );
}

export default PageB;
