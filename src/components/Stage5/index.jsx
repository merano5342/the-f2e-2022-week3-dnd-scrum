/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable import/no-dynamic-require */
import { useEffect, useState } from 'react';
import TextBtn from 'components/unit/TextBtn';

import { s5TalkData as DATA } from './s5data';
import CharacterTalk from '../unit/CharacterTalk';
import RetroRadio from './RetroRadio';
// eslint-disable-next-line no-unused-vars
import style from './Stage5.scss';

const Stage5 = (props) => {
  const { setPage } = props;
  const [talkId, setTalkId] = useState(1);
  const [talkContent, setTalkContent] = useState(DATA[0]);
  const [disableNextBtn, setDisableNextBtn] = useState(false);

  const handelOnClick = () => {
    if (!disableNextBtn) {
      setTalkId((pre) => pre + 1);
    }
  };

  useEffect(() => {
    setTalkContent(DATA[talkId]);
    if (talkId === 1) {
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
      </div>
      {talkId === 1 && <RetroRadio talkId={talkId} setTalkId={setTalkId} />}
      {talkId === 2 && (
        <TextBtn str="畢業啦！" onClick={() => setPage((pre) => pre + 1)} />
      )}
    </div>
  );
};
export default Stage5;
