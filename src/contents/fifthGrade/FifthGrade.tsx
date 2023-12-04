// 콘텐츠 묶음의 진입점이자 container가 되는 파일

import React from 'react';
import { Outlet } from 'react-router-dom';

const FifthGrade: React.FC = () => {
  return (
    <div>
      <h1>Fifth Grade Content</h1>
      <Outlet />
    </div>
  );
};

export default FifthGrade;
