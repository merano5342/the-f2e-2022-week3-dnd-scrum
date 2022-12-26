import confluenceLogo from '../../assets/logo/logo_confluence_w.png';
import sprint1 from '../../assets/Attached-pic/sprint_daily.png';
import sprint2 from '../../assets/Attached-pic/sprint_review.png';
import sprint3 from '../../assets/Attached-pic/sprint_retro.png';

const sprintIntro = [
  {
    id: 'a',
    title: '每日站立會議',
    titleEN: 'Daily Scrum',
    image: sprint1,
    content: (
      <>
        <p>
          每天都要進行的會議，以15分鐘為限制
          <br />
          透過團隊分享，追蹤大家的工作狀況。
        </p>

        <ul className="list-disc pl-4">
          <li> 昨天為團隊的短衝目標(Sprint Goal)做了那些進度</li>
          <li> 今天我會如何準備來幫助團隊達到短衝目標</li>
          <li> 過程中有遇到什麼問題、難題</li>
        </ul>
      </>
    ),
  },
  {
    id: 'b',
    title: '短衝檢視會議',
    titleEN: 'Sprint Review',
    image: sprint2,
    content: <p>用來檢視該次短衝增量的成果，以蒐集相關的回饋數據或意見。</p>,
  },
  {
    id: 'c',
    title: '短衝自省會議',
    titleEN: 'print Retrospective',
    image: sprint3,
    content: (
      <>
        <p>團隊在自省會議裡 , 會共同回顧該短衝歷程發生的事情</p>

        <ul className="list-disc pl-4">
          <li>好的地方</li>
          <li>可以改進的地方</li>
          <li> 如何維持我們已有的成功經驗</li>
        </ul>
      </>
    ),
  },
];
export const s4TalkData = [
  {
    id: 0,
    takingPerson: 'ee',
    showPerson: ['ee'],
    content: (
      <p>
        等等，你都還不知道什麼是 Sprint 吧！
        <br />
        讓我先為你介紹一下～ 仔細聽好唷， 等會兒考考你！
      </p>
    ),
    button: '',

    image: <div className="continue-btn">點擊畫面任意處繼續</div>,
    // action: '() => setTalkId((pre) => pre + 1)',
  },
  {
    id: 1,
    takingPerson: 'ee',
    showPerson: ['ee'],
    content: (
      <p>
        Sprint 是一個短衝，開發團隊會在這期間執行開發。在這段期間內，
        <span className="highlight"> 開發團隊舉辦每日站立會議(Daily Scrum) </span>
        ，追蹤成員間的工作狀況。
        <br />在 Sprint 的結束也會包含
        <span className="highlight"> 短衝檢視會議(Sprint Review) </span>
        以及<span className="highlight"> 短衝自省會議(Sprint Retrospective)</span>。
      </p>
    ),
    image: (
      <div className="m-10 flex h-full max-w-[1000px] gap-10">
        {sprintIntro.map((item) => {
          return (
            <div className="sprint-item" key={item.id}>
              <img src={item.image} alt="" />
              <div className="spring-title">
                <h2 className="text-2xl">{item.title}</h2>
                <p>{item.titleEN}</p>
              </div>
              <div className="m-2">{item.content}</div>
            </div>
          );
        })}
      </div>
    ),
    button: '',
  },
  {
    id: 2,
    takingPerson: 'ee',
    showPerson: ['ee'],
    content: (
      <p>
        優化工作流程、讓團隊有變得更好的機會。
        <br />
        推薦工具：
        <img
          src={confluenceLogo}
          alt=""
          className="m-2
           inline h-8"
        />
      </p>
    ),
    image: (
      <div className="m-10 flex h-full max-w-[1000px] gap-10">
        {sprintIntro.map((item) => {
          return (
            <div className="sprint-item" key={item.id}>
              <img src={item.image} alt="" />
              <div className="spring-title">
                <h2 className="text-2xl">{item.title}</h2>
                <p>{item.titleEN}</p>
              </div>
              <div className="m-2">{item.content}</div>
            </div>
          );
        })}
      </div>
    ),
    button: '',
  },
  {
    id: 3,
    takingPerson: 'ee',
    showPerson: ['ee'],
    content: (
      <>
        <h2>換你來試試看吧！</h2>
        <p>
          在這經典的 Surum 流程圖中，這些流程分別代表哪一個會議呢？ <br />
          提示：把右側的三個流程拖移至正確的位置上吧！
        </p>
      </>
    ),
    image: '',
    button: '',
  },
  {
    id: 4,
    takingPerson: 'ee',
    showPerson: ['ee'],
    content: (
      <>
        <h2 className="leading-0 text-danger">登愣～錯了喔～請再試試看</h2>
        <p>提示：把右側的三個流程拖移至正確的位置上吧！</p>
      </>
    ),
    image: '',
    button: '',
  },
  {
    id: 5,
    takingPerson: 'ee',
    showPerson: ['ee'],
    content: (
      <h2 className="leading-0">哼哼沒想到你這麼快就學會惹，快結束了加油加油！</h2>
    ),
    image: '',
    button: '',
  },
];
