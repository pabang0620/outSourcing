/** @jsxImportSource @emotion/react */
import React from 'react';
import { absolSetting, comfirmBtn1, dailyBackgroud1, elementAbsol1, elementAbsol2, elementAbsol3, inputSize1, quiz1, quizAll, quizBox1, quizCard1, quizCard2, quizCard3, quizNumber, quizSub1, quizTitle1, rowCenter, sectionSize, textRight } from './EmoStyle.ts';


const FifthGrade02: React.FC = () => {
  return (
    <div css={dailyBackgroud1}>
        <div css={quizTitle1}>01 &nbsp;&nbsp; 차례로 계산하기</div>
        <div css={quizSub1}>빈칸에 알맞은 수를 써넣어 차례로 계산하세요.</div>
        <div css={quizBox1}>
          <div css={sectionSize}>
            <div css={quizAll}>
              <div css={quiz1}>
                  <div css={quizCard1}>
                    <p css={quizNumber}>01)</p>
                    <div>12 × 6 ÷ 4 = <input css={inputSize1} type="text" /> ÷ 4
                    <br />
                    <div css={textRight}>= <input css={inputSize1} type="text" /></div>
                    </div>
                  </div>
                  <div css={quizCard2}>
                    <p css={quizNumber}>02)</p>
                    <div>24 ÷ 3 × 7 = <input css={inputSize1} type="text" /> × 7
                    <br />
                    <div css={textRight}>= <input css={inputSize1} type="text" /></div>
                    </div>
                  </div>
                  <div css={quizCard3}>
                    <p css={quizNumber}>03)</p>
                    <div>18 × 2 ÷ 9 = <input css={inputSize1} type="text" /> ÷ 9
                    <br />
                    <div css={textRight}>= <input css={inputSize1} type="text" /></div>
                    </div>
                  </div>
                  <div css={quizCard1}>
                    <p css={quizNumber}>04)</p>
                    <div>16 ÷ 4 × 2 = <input css={inputSize1} type="text" /> × 2
                    <br />
                    <div css={textRight}>= <input css={inputSize1} type="text" /></div>
                    </div>
                  </div>


                  <div css={quizCard2}>
                    <p css={quizNumber}>05)</p>
                      <div css={absolSetting}>
                        <div css={elementAbsol1}>4 × 8 ÷ 2 × 6</div>
                        <div css={elementAbsol2}><input css={inputSize1} type="text" /> ÷ 2 × 6 = <input css={inputSize1} type="text" /> × 6</div>
                        <div css={elementAbsol3}>= <input css={inputSize1} type="text" /></div>
                      </div>
                  </div>
                  <div css={quizCard3}>
                    <p css={quizNumber}>06)</p>
                      <div css={absolSetting}>
                        <div css={elementAbsol1}>12 ÷ 2 × 4 × 5</div>
                        <div css={elementAbsol2}><input css={inputSize1} type="text" /> × 4 × 5 = <input css={inputSize1} type="text" /> × 5</div>
                        <div css={elementAbsol3}>= <input css={inputSize1} type="text" /></div>
                      </div>
                  </div>
                  <div css={quizCard1}>
                    <p css={quizNumber}>07)</p>
                      <div css={absolSetting}>
                        <div css={elementAbsol1}>12 ÷ 4 × 6 ÷ 3</div>
                        <div css={elementAbsol2}><input css={inputSize1} type="text" /> × 6 ÷ 3 = <input css={inputSize1} type="text" /> ÷ 3</div>
                        <div css={elementAbsol3}>= <input css={inputSize1} type="text" /></div>
                      </div>
                  </div>
                  <div css={quizCard2}>
                    <p css={quizNumber}>08)</p>
                      <div css={absolSetting}>
                        <div css={elementAbsol1}>36 ÷ 3 ÷ 4 × 9</div>
                        <div css={elementAbsol2}><input css={inputSize1} type="text" /> ÷ 4 × 9 = <input css={inputSize1} type="text" /> × 9</div>
                        <div css={elementAbsol3}>= <input css={inputSize1} type="text" /></div>
                      </div>
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

export default FifthGrade02;
