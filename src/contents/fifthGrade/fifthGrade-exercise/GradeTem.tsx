/** @jsxImportSource @emotion/react */
import React from 'react';
import { comfirmBtn1, dailyBackgroud1, exQuiz1, quiz1, quizAll, quizBox1, quizSub1, quizTitle1, rowCenter, sectionSize } from './EmoStyle.ts';


const FifthGrade01: React.FC = () => {
  return (
    <div css={dailyBackgroud1}>
        <div css={quizTitle1}>01 차례로 계산하기</div>
        <div css={quizSub1}>빈칸에 알맞은 수를 써넣어 차례로 계산하세요.</div>
        <div css={quizBox1}>
          <div css={sectionSize}>
            <div css={quizAll}>
              <div css={exQuiz1}>
                <div>예시문제</div>
              </div>
              <div css={quiz1}>
                <div></div>
              </div>
              <div css={quiz1}>
                <div></div>
              </div>
              <div></div>
            </div>
            <div css={rowCenter}>
              <button css={comfirmBtn1}>제출하기</button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default FifthGrade01;
