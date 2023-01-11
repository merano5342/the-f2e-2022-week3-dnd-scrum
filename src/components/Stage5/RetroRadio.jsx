import { useState, useEffect } from 'react';

import { PoCharacter, MmCharacter, EeCharacter, GgCharacter } from '../unit/Character';
import TextBtn from '../unit/TextBtn';

const retroRadioDATA = {
  Q1: {
    id: 'Q1',
    title: 'Q1.做得好的地方?',
    options: [
      {
        id: 'Q1a',
        character: 'mm',
        characterIMG: MmCharacter,
        content: '這次我幫了很多人救火耶～ ',
        value: '',
        ansValue: false,
      },
      {
        id: 'Q1b',
        character: 'po',
        characterIMG: PoCharacter,
        content: '大家在開發上都會互相 cover，讓任務都有準時在時間內完成。',
        value: '',
        ansValue: true,
      },
    ],
  },
  Q2: {
    id: 'Q2',
    title: 'Q2.有哪些可以做得更好？',
    options: [
      {
        id: 'Q2a',
        character: 'gg',
        characterIMG: GgCharacter,
        content: '可以記錄這次的開發時間，讓預估團隊點數可以更精準。',
        value: '',
        ansValue: true,
      },
      {
        id: 'Q2b',
        character: 'ee',
        characterIMG: EeCharacter,
        content: '開發時間預估不準確，請後端下次改進，避免 delay 到我。',
        value: '',
        ansValue: false,
      },
    ],
  },
};

const RadioItem = (props) => {
  const { group, option, setRadio, radio } = props;
  const handleChange = (e) => {
    const groupName = e.target.name;
    const itemId = e.target.id;

    const items = radio[groupName].options.map((item) => {
      if (item.id === itemId) {
        return { ...item, value: true };
      }
      return { ...item, value: false };
    });

    if (groupName === 'Q1') {
      setRadio({ ...radio, Q1: { ...radio.Q1, options: items } });
    } else {
      setRadio({ ...radio, Q2: { ...radio.Q2, options: items } });
    }
  };

  return (
    <label
      htmlFor={option.id}
      className="item flex flex-1 flex-col items-center justify-center"
      key={option.id}
      data-incorrect={option.value !== option.ansValue && option.value === true}
    >
      <div className="radio-chara flex-1">{option.characterIMG}</div>
      <input
        type="radio"
        id={option.id}
        name={group.id}
        value={option.value}
        checked={option.value === true}
        onChange={handleChange}
        data-incorrect={option.value !== option.ansValue && option.value === true}
      />
      <div className="item-content flex-1">{option.content}</div>
    </label>
  );
};

const RetroRadio = (props) => {
  const { talkId, setTalkId } = props;
  const [radio, setRadio] = useState(retroRadioDATA);
  const [doneBtnActive, setDoneBtnActive] = useState(false);

  useEffect(() => {
    const newRadio = Object.values(radio);

    const booArr = newRadio.map((group) => {
      const boo = group.options
        .map((item) => item.value === item.ansValue)
        .reduce((pre, cur) => pre && cur);
      return boo;
    });
    const doneBoo = booArr.reduce((pre, cur) => pre && cur);
    setDoneBtnActive(doneBoo);
  }, [radio]);

  return (
    <div className="mx-10 flex max-w-[900px] justify-start gap-10">
      {Object.values(radio).map((group) => {
        return (
          <div className="group-box flex-1" key={group.id}>
            <h2 className="group-title">{group.title}</h2>
            <div className="flex">
              {group.options.map((option) => {
                return (
                  <RadioItem
                    group={group}
                    option={option}
                    radio={radio}
                    setRadio={setRadio}
                    key={option.id}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
      {talkId === 1 && (
        <TextBtn
          str="我選好了"
          onClick={() => setTalkId((pre) => pre + 1)}
          active={doneBtnActive}
        />
      )}
    </div>
  );
};

export default RetroRadio;
