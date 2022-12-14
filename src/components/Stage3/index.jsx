/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState, useEffect } from 'react';
import TextBtn from 'components/unit/TextBtn';
import Backlog2 from './BackLog2';

import CharacterTalk from '../unit/CharacterTalk';
import { s3TalkData as DATA } from './s3data';

const Stage3 = (props) => {
  const { setPage } = props;
  const [talkId, setTalkId] = useState(0);
  const [talkContent, setTalkContent] = useState(DATA[0]);
  const [disableNextBtn, setDisableNextBtn] = useState(false);

  const handelOnClick = () => {
    if (!disableNextBtn) {
      setTalkId((pre) => pre + 1);
    }
  };

  useEffect(() => {
    setTalkContent(DATA[talkId]);
    if (talkId === 0) {
      setDisableNextBtn(true);
    }
  }, [talkId]);

  return (
    <div className="background2 " onClick={handelOnClick}>
      {!disableNextBtn && <div className="continue-btn">點擊畫面任意處繼續</div>}
      <div className="flex flex-col justify-between">
        <CharacterTalk
          setTalkId={setTalkId}
          talkContent={talkContent}
          disableNextBtn={disableNextBtn}
        />
      </div>

      {talkId >= 0 && <Backlog2 talkId={talkId} setTalkId={setTalkId} />}
      {talkId === 2 && <TextBtn str="繼續" onClick={() => setPage((pre) => pre + 1)} />}
    </div>
  );
};
export default Stage3;
