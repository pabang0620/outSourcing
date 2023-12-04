/** @jsxImportSource @emotion/react */
import React from 'react';
import { comfirmBtn2, dailyBackgroud2, inputSize1, quiz2, quizAll, quizBox2, quizCard4, quizCard5, quizCard6, quizNumber, quizSub2, quizTitle2, rowCenter, sectionSize, textRight } from './EmoStyle.ts';


const FifthGrade05: React.FC = () => {
  return (
    <div css={dailyBackgroud2}>
        <div css={quizTitle2}>02 &nbsp;&nbsp; 덧셈, 뺄셈과 괄호</div>
        <div css={quizSub2}>선으로 표시된 것을 먼저 계산하여 양쪽의 계산 결과를 비교해 보세요.</div>
        <div css={quizBox2}>
          <div css={sectionSize}>
            <div css={quizAll}>
              <div css={quiz2}>
                  <div css={quizCard4}>
                    <p css={quizNumber}>01)</p>
                    <div>17 + 33 + 47 = <input css={inputSize1} type="text" /> + 47
                    <br />
                    <div css={textRight}>= <input css={inputSize1} type="text" /></div>
                    </div>
                  </div>
                  <div css={quizCard4}>
                    <div>17 + (33 + 47) = 17 + <input css={inputSize1} type="text" />
                    <br />
                    <div css={textRight}>= <input css={inputSize1} type="text" /></div>
                    </div>
                  </div>
                  <div css={quizCard5}>
                    <p css={quizNumber}>02)</p>
                    <div>68 - 29 - 16 = <input css={inputSize1} type="text" /> - 16
                    <br />
                    <div css={textRight}>= <input css={inputSize1} type="text" /></div>
                    </div>
                  </div>
                  <div css={quizCard5}>
                  <div>68 - (29 - 16) = 68 - <input css={inputSize1} type="text" />
                    <br />
                    <div css={textRight}>= <input css={inputSize1} type="text" /></div>
                    </div>
                  </div>


                  <div css={quizCard6}>
                    <p css={quizNumber}>03)</p>
                    <div>75 - 35 + 26 = <input css={inputSize1} type="text" /> + 26
                    <br />
                    <div css={textRight}>= <input css={inputSize1} type="text" /></div>
                    </div>
                  </div>
                  <div css={quizCard6}>
                    <div>75 - (35 + 26) = 75 - <input css={inputSize1} type="text" />
                    <br />
                    <div css={textRight}>= <input css={inputSize1} type="text" /></div>
                    </div>
                  </div>
                  <div css={quizCard4}>
                    <p css={quizNumber}>04)</p>
                    <div>13 + 27 - 19 = <input css={inputSize1} type="text" /> - 19
                    <br />
                    <div css={textRight}>= <input css={inputSize1} type="text" /></div>
                    </div>
                  </div>
                  <div css={quizCard4}>
                    <div>13 + (27 - 19) = 13 + <input css={inputSize1} type="text" />
                    <br />
                    <div css={textRight}>= <input css={inputSize1} type="text" /></div>
                    </div>
                  </div>

              </div>
            </div>
            <div css={rowCenter}>
              <button css={comfirmBtn2}>제출하기</button>
            </div>
          </div>
        </div>
    </div>
  );
};

export default FifthGrade05;
