/** @jsxImportSource @emotion/react */
import React from 'react';
import { absolSetting, borderRedInput1, borderRedInput2, borderRedInput3, borderRedSq, borderRedSqAb1, borderRedSqAb2, borderRedSqAb3, borderRedSqAb4, comfirmBtn2, dailyBackgroud2, flexrow, lineStyleCss, quiz, quiz1, quizAll, quizBox2, quizCard, quizCardNone, quizNumber, quizSub2, quizTitle2, rowCenter, sectionSize, twoQuiz } from './EmoStyle.ts';


const FifthGrade04: React.FC = () => {
  return (
    <div css={dailyBackgroud2}>
        <div css={quizTitle2}>02 &nbsp;&nbsp; 덧셈, 뺄셈과 괄호</div>
        <div css={quizSub2}>빈칸에 알맞은 수를 써넣어 식을 계산하세요.</div>
        <div css={quizBox2}>
          <div css={sectionSize}>
            <div css={quizAll}>
              <div css={quiz}>
                {/*  예제 문제  */}
                  <div css={quizCard}>
                    <p >( )가 있는 식은 ( )안을 먼저 계산합니다.</p>
                    <div css={absolSetting}>
                      <div css={twoQuiz}>
                        <div css={lineStyleCss}>
                          <div css={flexrow}>
                            <div>17 - 5 + 6 = </div>
                            <div css={borderRedSq}>18</div>
                          </div>
                          <div css={borderRedSqAb1}>12</div>
                          <div css={borderRedSqAb2}>18</div>
                          <div className='d-line'></div>
                          <div className='d-line1'></div>

                        </div>
                        <div css={lineStyleCss}>
                          <div css={flexrow}>
                            <div>17 - (5 + 6) = </div>
                            <div css={borderRedSq}>6</div>
                          </div>
                          <div css={borderRedSqAb3}>11</div>
                          <div css={borderRedSqAb4}>6</div>
                          <div className='d-line2'></div>
                          <div className='d-line3'></div>
                        </div>
                        <br />
                        <br />
                        <br />
                      </div>
                    </div>
                    <p >두 식을 비교해보면 ( )가 있을 때와 없을 때 계산 순서가 달라서 계산 결과가 다릅니다.</p>
                  </div>
                  {/* 예제문제 끝 */}
                  <div css={quiz1}>
                    <div css={quizCardNone}>
                      <p css={quizNumber}>01)</p>
                      <div css={lineStyleCss}>
                        <div css={flexrow}>
                          <div>23 - (16 - 3) = </div>
                          <input type="text" css={borderRedInput1}/>
                        </div>
                        <input type="text" css={borderRedInput2}/>
                        <input type="text" css={borderRedInput3}/>
                        <div className='d-line4'></div>
                        <div className='d-line5'></div>
                      </div>
                    </div>
                    <div css={quizCardNone}>
                      <p css={quizNumber}>02)</p>
                      <div css={lineStyleCss}>
                        <div css={flexrow}>
                          <div>14 + (32 - 7) = </div>
                          <input type="text" css={borderRedInput1}/>
                        </div>
                        <input type="text" css={borderRedInput2}/>
                        <input type="text" css={borderRedInput3}/>
                        <div className='d-line4'></div>
                        <div className='d-line5'></div>
                      </div>
                    </div>
                    <div css={quizCardNone}>
                      <p css={quizNumber}>03)</p>
                      <div css={lineStyleCss}>
                        <div css={flexrow}>
                          <div>103 - (35 + 26) = </div>
                          <input type="text" css={borderRedInput1}/>
                        </div>
                        <input type="text" css={borderRedInput2}/>
                        <input type="text" css={borderRedInput3}/>
                        <div className='d-line4'></div>
                        <div className='d-line5'></div>
                      </div>
                    </div>
                    <div css={quizCardNone}>
                      <p css={quizNumber}>04)</p>
                      <div css={lineStyleCss}>
                        <div css={flexrow}>
                          <div>89 - (54 - 38) = </div>
                          <input type="text" css={borderRedInput1}/>
                        </div>
                        <input type="text" css={borderRedInput2}/>
                        <input type="text" css={borderRedInput3}/>
                        <div className='d-line4'></div>
                        <div className='d-line5'></div>
                      </div>
                    </div>
                    <div css={quizCardNone}>
                      <p css={quizNumber}>05)</p>
                      <div css={lineStyleCss}>
                        <div css={flexrow}>
                          <div>127 - (65 + 36) = </div>
                          <input type="text" css={borderRedInput1}/>
                        </div>
                        <input type="text" css={borderRedInput2}/>
                        <input type="text" css={borderRedInput3}/>
                        <div className='d-line4'></div>
                        <div className='d-line5'></div>
                      </div>
                    </div>
                    <div css={quizCardNone}>
                      <p css={quizNumber}>06)</p>
                      <div css={lineStyleCss}>
                        <div css={flexrow}>
                          <div>71 + (15 + 27) = </div>
                          <input type="text" css={borderRedInput1}/>
                        </div>
                        <input type="text" css={borderRedInput2}/>
                        <input type="text" css={borderRedInput3}/>
                        <div className='d-line4'></div>
                        <div className='d-line5'></div>
                      </div>
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

export default FifthGrade04;
