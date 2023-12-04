/** @jsxImportSource @emotion/react */
import React from 'react';
import { comfirmBtn3, dailyBackgroud3, inputSize1, quiz2, quizAll, quizBox3, quizCard4, quizCard5, quizCard6, quizNumber, quizSub3, quizTitle3, rowCenter, sectionSize, textRight } from './EmoStyle.ts';


const FifthGrade08: React.FC = () => {
  return (
    <div css={dailyBackgroud3}>
        <div css={quizTitle3}>03 &nbsp;&nbsp; 곱셈, 나눗셈과 괄호</div>
        <div css={quizSub3}>선으로 표시된 것을 먼저 계산하여 양쪽의 계산 결과를 비교해 보세요.</div>
        <div css={quizBox3}>
          <div css={sectionSize}>
            <div css={quizAll}>
              <div css={quiz2}>
                  <div css={quizCard4}>
                    <p css={quizNumber}>01)</p>
                    <div>7 × 3 × 4 = <input css={inputSize1} type="text" /> × 4
                    <br />
                    <div css={textRight}>= <input css={inputSize1} type="text" /></div>
                    </div>
                  </div>
                  <div css={quizCard4}>
                    <div>7 × (3 × 4) = 7 × <input css={inputSize1} type="text" />
                    <br />
                    <div css={textRight}>= <input css={inputSize1} type="text" /></div>
                    </div>
                  </div>
                  <div css={quizCard5}>
                    <p css={quizNumber}>02)</p>
                    <div>64 ÷ 8 ÷ 2 = <input css={inputSize1} type="text" /> ÷ 2
                    <br />
                    <div css={textRight}>= <input css={inputSize1} type="text" /></div>
                    </div>
                  </div>
                  <div css={quizCard5}>
                  <div>64 ÷ (8 ÷ 2) = 64 ÷ <input css={inputSize1} type="text" />
                    <br />
                    <div css={textRight}>= <input css={inputSize1} type="text" /></div>
                    </div>
                  </div>


                  <div css={quizCard6}>
                    <p css={quizNumber}>03)</p>
                    <div>90 ÷ 5 × 2 = <input css={inputSize1} type="text" /> × 2
                    <br />
                    <div css={textRight}>= <input css={inputSize1} type="text" /></div>
                    </div>
                  </div>
                  <div css={quizCard6}>
                    <div>90 ÷ (5 × 2) = 90 ÷ <input css={inputSize1} type="text" />
                    <br />
                    <div css={textRight}>= <input css={inputSize1} type="text" /></div>
                    </div>
                  </div>
                  <div css={quizCard4}>
                    <p css={quizNumber}>04)</p>
                    <div>5 × 12 ÷ 6 = <input css={inputSize1} type="text" /> ÷ 6
                    <br />
                    <div css={textRight}>= <input css={inputSize1} type="text" /></div>
                    </div>
                  </div>
                  <div css={quizCard4}>
                    <div>5 × (12 ÷ 6) = 5 × <input css={inputSize1} type="text" />
                    <br />
                    <div css={textRight}>= <input css={inputSize1} type="text" /></div>
                    </div>
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

export default FifthGrade08;
