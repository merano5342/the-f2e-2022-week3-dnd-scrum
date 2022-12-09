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

      {talkId > 1 && <BackLog1 talkId={talkId} setTalkId={setTalkId} />}
      {talkId === 5 && <TextBtn str="繼續" onClick={() => setPage((pre) => pre + 1)} />}
    </div>
  );
};
export default Stage1;
