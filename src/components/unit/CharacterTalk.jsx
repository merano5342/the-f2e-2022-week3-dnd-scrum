import PoChara from '../../assets/role/role_po.png';
import PoCharaLight from '../../assets/role/role_po_light.png';
import Hole from '../../assets/role/hole.png';
import gifPo from '../../assets/gif/ic_continue_po.gif';

import MmChara from '../../assets/role/role_mm.png';
import MmCharaLight from '../../assets/role/role_mm_light.png';
import gifMm from '../../assets/gif/ic_continue_mm.gif';

import EeChara from '../../assets/role/role_team1.png';
import EeCharaLight from '../../assets/role/role_team1_light.png';
import gifEe from '../../assets/gif/ic_continue_team1.gif';

import GgChara from '../../assets/role/role_team2.png';
import GgCharaLight from '../../assets/role/role_team2_light.png';
import gifGg from '../../assets/gif/ic_continue_team2.gif';

const CharacterTalk = (props) => {
  const { talkContent, disableNextBtn } = props;

  const btnArr = { po: gifPo, mm: gifMm, ee: gifEe, gg: gifGg };

  const isCharaTaking = (person) => {
    return !!(talkContent.takingPerson === person);
  };
  const isCharaShow = (person) => {
    return !!talkContent.showPerson.includes(person);
  };

  const talkingBtn = () => {
    const charaBtnPath = btnArr[talkContent.takingPerson];
    return <img src={charaBtnPath} alt="" className="h-6" />;
  };

  const poCharacter = () => {
    if (isCharaShow('po')) {
      return (
        <div className="chara ">
          <img src={Hole} alt="" className="hole" />
          <div className="chara-down">
            <img src={PoCharaLight} alt="" className="top-2" />
            <img src={PoChara} alt="" className="" />
          </div>
        </div>
      );
    }
    return null;
  };
  const mmCharacter = () => {
    if (isCharaShow('mm')) {
      return (
        <div className="chara bottom-6">
          <img src={Hole} alt="" className="hole bottom-0" />
          <div className="chara-up">
            <img src={MmCharaLight} alt="" className="bottom-2" />
            <img src={MmChara} alt="" className="bottom-4" />
          </div>
        </div>
      );
    }
    return null;
  };

  const eeCharacter = () => {
    if (isCharaShow('ee')) {
      return (
        <div className="chara">
          <img src={Hole} alt="" className="hole" />
          <div className="chara-down">
            <img src={EeCharaLight} alt="" className="top-2" />
            <img src={EeChara} alt="" className="" />
          </div>
        </div>
      );
    }
    return null;
  };
  const ggCharacter = () => {
    if (isCharaShow('gg')) {
      return (
        <div className="chara">
          <img src={Hole} alt="" className="" />
          <div className="chara-down">
            <img src={GgCharaLight} alt="" className="top-2" />
            <img src={GgChara} alt="" className="" />
          </div>
        </div>
      );
    }
    return null;
  };

  const talkBox = (
    <div className="talk" key={talkContent.id}>
      <h3 className="talk-title">{talkContent.takingPerson}</h3>
      <div className="talk-box">{talkContent.content}</div>

      {!disableNextBtn && (
        <button key={talkContent.id} className="absolute bottom-8 right-12 ">
          {talkingBtn()}
        </button>
      )}
    </div>
  );

  const imgBox = (
    <div className="img-container m-4 flex items-center justify-center">
      {talkContent.image}
    </div>
  );

  return (
    // 顯示相對應角色對話框顏色
    <div className={`dialog dialog-${talkContent.takingPerson} flex flex-col`}>
      <div
        className="chara-box top-0 right-0 m-6 flex justify-end gap-4"
        data-chara={isCharaTaking('ee') || isCharaTaking('gg')}
      >
        {isCharaTaking('ee') && talkBox}
        {isCharaTaking('gg') && talkBox}
        {eeCharacter()}
        {ggCharacter()}
      </div>
      <div
        className="chara-box top-0 left-0 m-6 flex justify-start gap-4"
        data-chara={isCharaTaking('po')}
      >
        {poCharacter()}
        {isCharaTaking('po') && talkBox}
      </div>
      {talkContent.image && imgBox}
      <div
        className="chara-box right-0 bottom-0 m-6 flex justify-end gap-4"
        data-chara={isCharaTaking('mm')}
      >
        {isCharaTaking('mm') && talkBox}
        {mmCharacter()}
      </div>
      {/* </div> */}
    </div>
  );
};

export default CharacterTalk;
