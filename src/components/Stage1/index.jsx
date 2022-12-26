/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-props-no-spreading */
import { useState, useEffect } from 'react';
// import { textBtn } from 'components/unit/TextBtn';
import TextBtn from 'components/unit/TextBtn';
import { s1TalkData as DATA } from './s1data';

import CharacterTalk from '../unit/CharacterTalk';
import BackLog1 from './BackLog1';

const Stage1 = (props) => {
  const { setPage } = props;
  const [talkId, setTalkId] = useState(0);
  const [talkContent, setTalkContent] = useState(DATA[0]);
  const [disableNextBtn, setDisableNextBtn] = useState(false);
  const [continueBtn, setContinueBtn] = useState(false);
  const [backlogShow, setBacklogShow] = useState(false);

  const handelOnClick = () => {
    if (!disableNextBtn) {
      setTalkId((pre) => pre + 1);
    }
  };
  useEffect(() => {
    setTalkContent(DATA[talkId]);
    if (talkId === 3 || talkId === 4) {
      setDisableNextBtn(true);
    }
    if (talkId > 1) {
      setBacklogShow(true);
    }
    if (talkId === 5) {
      setContinueBtn(true);
    }
  }, [talkId]);

  return (
    <div className="background2" onClick={handelOnClick}>
      <div className="finished" data-active={continueBtn}>
        <div className=" flex w-full flex-col justify-between">
          {!disableNextBtn && talkId !== 2 && (
            <div className="continue-btn">點擊畫面任意處繼續</div>
          )}

          <CharacterTalk
            setTalkId={setTalkId}
            talkContent={talkContent}
            disableNextBtn={disableNextBtn}
          />
        </div>

        {backlogShow && <BackLog1 talkId={talkId} setTalkId={setTalkId} />}
        {continueBtn && <TextBtn str="繼續" onClick={() => setPage((pre) => pre + 1)} />}
      </div>
    </div>
  );
};
export default Stage1;
