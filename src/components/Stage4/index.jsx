/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useState, useEffect } from 'react';
// import Backlog2 from './BackLog2';
import TextBtn from 'components/unit/TextBtn';

import CharacterTalk from '../unit/CharacterTalk';
import Backlog3 from './BackLog3';
import { s4TalkData as DATA } from './s4data';

const Stage4 = (props) => {
  const { setPage } = props;
  const [talkId, setTalkId] = useState(0);
  const [talkContent, setTalkContent] = useState(DATA[0]);
  const [disableNextBtn, setDisableNextBtn] = useState(false);

  useEffect(() => {
    setTalkContent(DATA[talkId]);
    if (talkId === 3 || talkId === 4) {
      setDisableNextBtn(true);
    }
  }, [talkId]);

  return (
    <div className="background2">
      <div className="flex flex-col justify-between">
        {/* onClick={() => setTalkId((pre) => pre + 1)} */}
        <CharacterTalk
          setTalkId={setTalkId}
          talkContent={talkContent}
          disableNextBtn={disableNextBtn}
        />
      </div>
      {talkId >= 3 && <Backlog3 talkId={talkId} setTalkId={setTalkId} />}
      {talkId === 5 && <TextBtn str="繼續" onClick={() => setPage((pre) => pre + 1)} />}
    </div>
  );
};
export default Stage4;
