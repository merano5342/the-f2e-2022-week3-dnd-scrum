import JiraLogo from '../../assets/logo/jira_w.png';

export const s1TalkData = [
  {
    id: 0,
    takingPerson: 'po',
    showPerson: ['po'],
    content: (
      <p>
        <span className="highlight">\\ 碰 // </span>
        我是短衝小精靈，開發 A 組的 PO。
        <br />
        <span className="highlight">PO 也就是產品負責人（Product Owner）</span>
        ，產品負責人會負責評估產品待辦清單的價值與重要性，依序排列要執行的優先順序，對齊產品目標。最後排出產品待辦清單
        （Product Backlog）唷！
      </p>
    ),
    image: '',
    // action: '() => setTalkId((pre) => pre + 1)',
  },
  {
    id: 1,
    takingPerson: 'po',
    showPerson: ['po'],
    content: (
      <p>
        剛好我最近手邊有一個「人才招募系統」的案子，我才剛列出了
        <span className="highlight">「產品需求清單」</span>。 <br />
        既然你都來了，來試試看調整產品優先度，排出產品待辦清單吧！
      </p>
    ),
    image: '',
  },
  {
    id: 2,
    takingPerson: 'po',
    showPerson: ['po'],
    content: (
      <p>
        在這階段我們要把需求放進產品待辦清單，並調整其優先順序。 <br />
        對了！我們公司也推薦使用
        <img
          src={JiraLogo}
          alt=""
          className="m-2
           inline h-8"
        />
        來做任務的管理呢！
      </p>
    ),
    image: '',
  },
  {
    id: 3,
    takingPerson: 'po',
    showPerson: ['po'],
    content: (
      <>
        <h2>換你來試試看吧！</h2>
        <p>提示：請把需求拖移至產品待辦清單，並調整其優先順序。</p>
      </>
    ),
    image: '',
  },
  {
    id: 4,
    takingPerson: 'po',
    showPerson: ['po'],
    content: (
      <>
        <h2 className="leading-0 text-danger">登愣～錯了喔～請再試試看</h2>
        <p>提示：請把需求拖移至產品待辦清單，並調整其優先順序。</p>
      </>
    ),
    image: '',
  },
  {
    id: 5,
    takingPerson: 'po',
    showPerson: ['po'],
    content: <h2 className="leading-0">哇喔完成惹，尼太棒ㄌ！我們繼續吧！</h2>,
    image: '',
  },
];
