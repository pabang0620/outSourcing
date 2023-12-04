/** @jsxImportSource @emotion/react */
import React from 'react';
import {  comfirmBtn2, comfirmBtn3, dailyBackgroud2, dailyBackgroud3, inputSize1, marginTop18, quiz1, quizAll, quizBox2, quizBox3, quizCard1, quizCard2, quizCard3, quizNumber, quizSub2, quizSub3, quizTitle2, quizTitle3, rowCenter, sectionSize } from './EmoStyle.ts';


const FifthGrade09: React.FC = () => {
  return (
    <div css={dailyBackgroud3}>
        <div css={quizTitle3}>02 &nbsp;&nbsp; 덧셈, 뺄셈과 괄호</div>
        <div css={quizSub3}>빈칸에 알맞은 수를 써넣어 차례로 계산하세요.</div>
        <div css={quizBox3}>
          <div css={sectionSize}>
            <div css={quizAll}>
              <div css={quiz1}>
                  <div css={quizCard1}>
                    <p css={quizNumber}>01)</p>
                    <div css={marginTop18}>46 - (12 + 19) = <input css={inputSize1} type="text" /></div>
                  </div>
                  <div css={quizCard2}>
                    <p css={quizNumber}>02)</p>
                    <div css={marginTop18}>88 - (52 - 13) = <input css={inputSize1} type="text" /></div>
                  </div>
                  <div css={quizCard3}>
                    <p css={quizNumber}>03)</p>
                    <div css={marginTop18}>29 + (22 - 19) = <input css={inputSize1} type="text" /></div>
                  </div>
                  <div css={quizCard1}>
                    <p css={quizNumber}>04)</p>
                    <div css={marginTop18}>37 + (16 + 25) = <input css={inputSize1} type="text" /></div>
                  </div>

                  <div css={quizCard2}>
                    <p css={quizNumber}>05)</p>
                    <div css={marginTop18}>74 - (26 + 15) = <input css={inputSize1} type="text" /></div>
                  </div>
                  <div css={quizCard3}>
                    <p css={quizNumber}>06)</p>
                    <div css={marginTop18}>46 - (17 - 16) = <input css={inputSize1} type="text" /></div>
                  </div>
                  <div css={quizCard1}>
                    <p css={quizNumber}>07)</p>
                    <div css={marginTop18}>55 - (17 + 24) = <input css={inputSize1} type="text" /></div>
                  </div>
                  <div css={quizCard2}>
                    <p css={quizNumber}>08)</p>
                    <div css={marginTop18}>16 + (41 - 35) = <input css={inputSize1} type="text" /></div>
                  </div>

                  <div css={quizCard2}>
                    <p css={quizNumber}>09)</p>
                    <div css={marginTop18}>60 - (27 - 26) = <input css={inputSize1} type="text" /></div>
                  </div>
                  <div css={quizCard3}>
                    <p css={quizNumber}>10)</p>
                    <div css={marginTop18}>31 + (27 - 25)<input css={inputSize1} type="text" /></div>
                  </div>
                  <div css={quizCard1}>
                    <p css={quizNumber}>11)</p>
                    <div css={marginTop18}>59 - (6 + 25) <input css={inputSize1} type="text" /></div>
                  </div>
                  <div css={quizCard2}>
                    <p css={quizNumber}>12)</p>
                    <div css={marginTop18}>17 - (25 - 9) = <input css={inputSize1} type="text" /></div>
                  </div>
                  <div css={quizCard3}>
                    <p css={quizNumber}>13)</p>
                    <div css={marginTop18}>38 - (5 + 17) = <input css={inputSize1} type="text" /></div>
                  </div>
                  <div css={quizCard1}>
                    <p css={quizNumber}>14)</p>
                    <div css={marginTop18}>24 + (17 - 8) = <input css={inputSize1} type="text" /></div>
                  </div>
              </div>
            </div>
            <div css={rowCenter}>
              <button css={comfirmBtn3}>제출하기</button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default FifthGrade09;
