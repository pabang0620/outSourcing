// 라우팅 담당 파일 

import { createEliceExtRoutes } from '@elice/extcontent-utils';

export default createEliceExtRoutes([
  {
    path: 'exercise',
    component: import('./fifthGrade-exercise/FifthGrade01'),
  },
  // You can add more routes for additional exercises
]);
