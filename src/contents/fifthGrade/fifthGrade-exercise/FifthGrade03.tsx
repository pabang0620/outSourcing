/** @jsxImportSource @emotion/react */
import React from 'react';
import { comfirmBtn1, dailyBackgroud1, inputSize1, marginTop18, quiz1, quizAll, quizBox1, quizCard1, quizCard2, quizCard3, quizNumber, quizSub1, quizTitle1, rowCenter, sectionSize } from './EmoStyle.ts';


const FifthGrade03: React.FC = () => {
  return (
    <div css={dailyBackgroud1}>
        <div css={quizTitle1}>01 &nbsp;&nbsp; 차례로 계산하기</div>
        <div css={quizSub1}>계산을 하세요.</div>
        <div css={quizBox1}>
          <div css={sectionSize}>
            <div css={quizAll}>
              <div css={quiz1}>
                  <div css={quizCard1}>
                    <p css={quizNumber}>01)</p>
                    <div css={marginTop18}>37 + 15 + 28 = <input css={inputSize1} type="text" /></div>
                  </div>
                  <div css={quizCard2}>
                    <p css={quizNumber}>02)</p>
                    <div css={marginTop18}>17 + 12 - 8 - 15 = <input css={inputSize1} type="text" /></div>
                  </div>
                  <div css={quizCard3}>
                    <p css={quizNumber}>03)</p>
                    <div css={marginTop18}>15 - 8 + 23 = <input css={inputSize1} type="text" /></div>
                  </div>
                  <div css={quizCard1}>
                    <p css={quizNumber}>04)</p>
                    <div css={marginTop18}>45 - 16 + 55 - 7 = <input css={inputSize1} type="text" /></div>
                  </div>

                  <div css={quizCard2}>
                    <p css={quizNumber}>05)</p>
                    <div css={marginTop18}>4 + 17 - 8 = <input css={inputSize1} type="text" /></div>
                  </div>
                  <div css={quizCard3}>
                    <p css={quizNumber}>06)</p>
                    <div css={marginTop18}>110 - 56 -7 + 35 = <input css={inputSize1} type="text" /></div>
                  </div>
                  <div css={quizCard1}>
                    <p css={quizNumber}>07)</p>
                    <div css={marginTop18}>15 × 6 ÷ 9 = <input css={inputSize1} type="text" /></div>
                  </div>
                  <div css={quizCard2}>
                    <p css={quizNumber}>08)</p>
                    <div css={marginTop18}>48 ÷ 4 × 5 ÷ 2 = <input css={inputSize1} type="text" /></div>
                  </div>

                  <div css={quizCard2}>
                    <p css={quizNumber}>09)</p>
                    <div css={marginTop18}>8 × 12 ÷ 4 = <input css={inputSize1} type="text" /></div>
                  </div>
                  <div css={quizCard3}>
                    <p css={quizNumber}>10)</p>
                    <div css={marginTop18}>56 ÷ 7 × 8 × 4 = <input css={inputSize1} type="text" /></div>
                  </div>
                  <div css={quizCard1}>
                    <p css={quizNumber}>11)</p>
                    <div css={marginTop18}>36 ÷ 6 × 5 = <input css={inputSize1} type="text" /></div>
                  </div>
                  <div css={quizCard2}>
                    <p css={quizNumber}>12)</p>
                    <div css={marginTop18}>5 × 14 × 3 ÷ 70 = <input css={inputSize1} type="text" /></div>
                  </div>
              </div>
            </div>
            <div css={rowCenter}>
              <button css={comfirmBtn1}>제출하기</button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default FifthGrade03;
