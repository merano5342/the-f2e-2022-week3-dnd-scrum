/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/no-dynamic-require */
import { useEffect, useState } from 'react';
import TextBtn from 'components/unit/TextBtn';

import { s2TalkData as DATA } from './s2data';
import CharacterTalk from '../unit/CharacterTalk';

const Stage2 = (props) => {
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
    if (talkId === 6) {
      setDisableNextBtn(true);
    }
  }, [talkId]);
  return (
    <div className="background2" onClick={handelOnClick}>
      <div className="flex flex-col justify-between">
        <CharacterTalk
          setTalkId={setTalkId}
          talkContent={talkContent}
          disableNextBtn={disableNextBtn}
        />
        {talkId === 6 && (
          <TextBtn str="練習去囉" onClick={() => setPage((pre) => pre + 1)} />
        )}
      </div>
    </div>
  );
};
export default Stage2;
