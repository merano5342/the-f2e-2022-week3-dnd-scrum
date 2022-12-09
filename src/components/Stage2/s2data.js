/* eslint-disable import/no-dynamic-require */
import p1 from '../../assets/Attached-pic/planning_sprint.png';
import p2 from '../../assets/Attached-pic/planning_team.png';
import p3 from '../../assets/Attached-pic/planning_point.png';

import p4BookTint from '../../assets/Attached-pic/story.png';
import p4BookOrange from '../../assets/Attached-pic/story_13.png';
import p4BookRed from '../../assets/Attached-pic/story_21.png';

import JiraLogo from '../../assets/logo/jira_w.png';

const bookArr = [
  {
    point: 1,
    bgColor: 'colors.darkTint',
    story: p4BookTint,
    time: 'time_1',
  },
  {
    point: 2,
    bgColor: 'darkTint',
    story: p4BookTint,
    time: 'time_2',
  },
  {
    point: 3,
    bgColor: 'darkTint',
    story: p4BookTint,
    time: 'time_3',
  },
  {
    point: 5,
    bgColor: 'darkTint',
    story: p4BookTint,
    time: 'time_5',
  },
  {
    point: 8,
    bgColor: 'darkTint',
    story: p4BookTint,
    time: 'time_8',
  },
  {
    point: 13,
    bgColor: 'brown',
    story: p4BookOrange,
    time: 'time_13',
  },
  {
    point: 21,
    bgColor: 'danger',
    story: p4BookRed,
    time: 'time_21',
  },
];
export const s2TalkData = [
  {
    id: 0,
    takingPerson: 'po',
    showPerson: ['po', 'mm'],
    content: (
      <p>
        產品待辦清單好了之後，我們來召集 ScrumMaster 和開發團隊共同召開
        <span className="highlight"> 短衝規劃會議（Sprint Planning）</span>。
        短衝即是一個迭代，具有固定時間限制，我們會在這個會議中，
        決定要完成哪些工作事項來達到商業需求，列出
        <span className="highlight"> 短衝待辦清單（Sprint Backlog）</span>，
        並由開發團隊在接下來的產品開發週期裡執行。
      </p>
    ),
    image: (
      <div className="round-img-bg-tint">
        <img src={p1} alt="" className="" />
      </div>
    ),
  },
  {
    id: 1,
    takingPerson: 'mm',
    showPerson: ['po', 'mm'],

    content: (
      <p>
        哦哦，你是新來的前端吧！我是這次的
        <span className="highlight"> ScrumMaster MM</span>，
        我的工作主要是促成開發團隊成員協作、引導團隊進行自省會議，提升團隊成員對 Scrum
        瞭解。
      </p>
    ),
    image: (
      <div className="round-img-bg-pink">
        <img src={p2} alt="" className="mb-4" />
      </div>
    ),
  },
  {
    id: 2,
    takingPerson: 'mm',
    showPerson: ['mm', 'ee', 'gg'],
    content: (
      <p>
        這兩位是 EE 和 GG，是我們開發團隊的成員唷～ 我們團隊
        <span className="highlight"> 一次 Sprint 週期是兩週 </span>的時間
        ，依照我的觀察，目前團隊可以負擔的點數 (Story Point) 大約是
        <span className="highlight"> 20 點 </span>左右。
      </p>
    ),
    image: (
      <div className="round-img-bg-pink right-[30vh]">
        <img src={p3} alt="" className="" />
      </div>
    ),
  },
  {
    id: 3,
    takingPerson: 'ee',
    showPerson: ['ee', 'gg'],
    content: (
      <p>
        欸新來的，你應該不知道點數是什麼意思吧，我來跟你介紹一下吧～ <br />
        <span className="highlight"> Story Point </span>
        目的是為了 <span className="highlight">衡量速度</span>
        ，是用大概花費的時間預估出的相對點數哦。
      </p>
    ),
    image: (
      <div className="flex w-[80vh] flex-wrap justify-center">
        <div className="book after:hidden">
          <img
            src={require(`../../assets/Attached-pic/time_1.png`)}
            alt=""
            className="book-time"
          />
          <img src={p4BookTint} alt="" />
        </div>
      </div>
    ),
  },
  {
    id: 4,
    takingPerson: 'ee',
    showPerson: ['ee', 'gg'],
    content: (
      <p>
        以 <span className="highlight"> 「費氏數列」的 1、2、3、5、8、13、21 </span>
        來估算各項 Story 的分數。Story Point 越小，表示這個 Story
        花費時間越少；越大，花費時間則越多。如果出現了一個 21 分，可能表示這個 Story
        太龐大，需要再拆分細項執行唷！
      </p>
    ),
    image: (
      <div className="flex w-[80vh] flex-wrap justify-center">
        {bookArr.map((item) => (
          <div
            className="book"
            data-sprint={item.point}
            data-bg={item.bgColor}
            key={item.point}
          >
            <img src={item.story} alt="" />
            <img
              src={require(`../../assets/Attached-pic/${item.time}.png`)}
              alt=""
              className="book-time"
            />
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 5,
    takingPerson: 'gg',
    showPerson: ['ee', 'gg'],
    content: (
      <p>
        沒錯，如 EE 說的，我這邊已經把剛剛討論好的點數標上去囉～
        你來練習把任務排到短衝待辦清單吧 ！
      </p>
    ),
    image: '',
  },
  {
    id: 6,
    takingPerson: 'ee',
    showPerson: ['ee', 'gg'],
    content: (
      <p>
        By the way , 我們平常管理任務是使用
        <img
          src={JiraLogo}
          alt=""
          className="m-2
           inline h-8"
        />
        這套軟體 ， 你有時間記得先去註冊和熟悉唷 !
      </p>
    ),
    image: '',
  },
];
