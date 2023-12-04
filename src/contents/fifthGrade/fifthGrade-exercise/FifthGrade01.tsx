/** @jsxImportSource @emotion/react */
import React from 'react';
import { absolSetting, comfirmBtn1, dailyBackgroud1, elementAbsol1, elementAbsol2, elementAbsol3, inputSize1, quiz1, quizAll, quizBox1, quizCard1, quizCard2, quizCard3, quizNumber, quizSub1, quizTitle1, rowCenter, sectionSize, textRight } from './EmoStyle.ts';


const FifthGrade01: React.FC = () => {
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
                    <div>25 + 43 - 19 = <input css={inputSize1} type="text" /> - 19
                    <br />
                    <div css={textRight}>= <input css={inputSize1} type="text" /></div>
                    </div>
                  </div>
                  <div css={quizCard2}>
                    <p css={quizNumber}>02)</p>
                    <div>31 - 16 + 23 = <input css={inputSize1} type="text" /> + 23
                    <br />
                    <div css={textRight}>= <input css={inputSize1} type="text" /></div>
                    </div>
                  </div>
                  <div css={quizCard3}>
                    <p css={quizNumber}>03)</p>
                    <div>19 - 13 + 7 = <input css={inputSize1} type="text" /> + 7
                    <br />
                    <div css={textRight}>= <input css={inputSize1} type="text" /></div>
                    </div>
                  </div>
                  <div css={quizCard1}>
                    <p css={quizNumber}>04)</p>
                    <div>16 + 23 - 9 = <input css={inputSize1} type="text" /> - 9
                    <br />
                    <div css={textRight}>= <input css={inputSize1} type="text" /></div>
                    </div>
                  </div>


                  <div css={quizCard2}>
                    <p css={quizNumber}>05)</p>
                      <div css={absolSetting}>
                        <div css={elementAbsol1}>35 - 27 + 9 - 14</div>
                        <div css={elementAbsol2}><input css={inputSize1} type="text" /> + 9 - 14 = <input css={inputSize1} type="text" /> - 14</div>
                        <div css={elementAbsol3}>= <input css={inputSize1} type="text" /></div>
                      </div>
                  </div>
                  <div css={quizCard3}>
                    <p css={quizNumber}>06)</p>
                      <div css={absolSetting}>
                        <div css={elementAbsol1}>28 + 15 - 17 - 20</div>
                        <div css={elementAbsol2}><input css={inputSize1} type="text" /> - 17 - 20 = <input css={inputSize1} type="text" /> - 20</div>
                        <div css={elementAbsol3}>= <input css={inputSize1} type="text" /></div>
                      </div>
                  </div>
                  <div css={quizCard1}>
                    <p css={quizNumber}>07)</p>
                      <div css={absolSetting}>
                        <div css={elementAbsol1}>15 + 4 - 16 + 11</div>
                        <div css={elementAbsol2}><input css={inputSize1} type="text" /> - 16 + 11 = <input css={inputSize1} type="text" /> + 11</div>
                        <div css={elementAbsol3}>= <input css={inputSize1} type="text" /></div>
                      </div>
                  </div>
                  <div css={quizCard2}>
                    <p css={quizNumber}>08)</p>
                      <div css={absolSetting}>
                        <div css={elementAbsol1}>35 + 8 - 26 + 9</div>
                        <div css={elementAbsol2}><input css={inputSize1} type="text" /> - 26 + 9 = <input css={inputSize1} type="text" /> + 9</div>
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

export default FifthGrade01;
