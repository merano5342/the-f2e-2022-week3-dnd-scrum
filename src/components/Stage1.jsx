/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import JiraLogo from '../assets/logo/jira_w.png';
import PoChara from '../assets/role/role_po.png';
import PoCharaLight from '../assets/role/role_po_light.png';
import PoHole from '../assets/role/hole.png';

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
  // const result = [...list];

  // // 把兩個索引的值對調，相當於 [a, b] = [b, a]
  // [result[source.index], result[destination.index]] = [
  //   result[destination.index],
  //   result[source.index],
  // ];
};

const itemArr = [
  {
    name: '應徵者的線上履歷編輯器',
    key: nanoid(),
    content: <div className="item relative right-2 top-4">應徵者的線上履歷編輯器</div>,
  },
  {
    name: '後台職缺管理功能（資訊上架、下架、顯示應徵者資料）',
    key: nanoid(),
    content: (
      <div className="item ">
        後台職缺管理功能
        <div className="text-sm text-tint">（資訊上架、下架、顯示應徵者資料）</div>
      </div>
    ),
    style: 'item text-tint',
  },
  {
    name: '會員系統（登入、註冊、權限管理）',
    key: nanoid(),
    content: (
      <div className="item ">
        會員系統 <div className="text-sm text-tint">（登入、註冊、權限管理）</div>
      </div>
    ),
    style: 'item text-red',
  },
  {
    name: '前台職缺列表、應徵',
    key: nanoid(),
    content: <div className="item">前台職缺列表、應徵</div>,
    style: 'item text-tint',
  },
];
const s1PoTalk = [
  {
    index: 0,
    id: 'po1',
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
  },
  {
    index: 1,
    id: 'po2',
    content: (
      <p>
        剛好我最近手邊有一個「人才招募系統」的案子，我才剛列出了
        <span className="highlight">「產品需求清單」</span>。 <br />
        既然你都來了，來試試看調整產品優先度，排出產品待辦清單吧！
      </p>
    ),
  },
  {
    index: 2,
    id: 'po3',
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
  },
  {
    index: 3,
    id: 'po4',
    content: (
      <>
        <h2>換你來試試看吧！</h2>
        <p>提示：請把需求拖移至產品待辦清單，並調整其優先順序。</p>
      </>
    ),
  },
  {
    index: 4,
    id: 'po5',
    content: <h2 className="leading-0">哇喔完成惹，尼太棒ㄌ！我們繼續吧！</h2>,
  },
  {
    index: 5,
    id: 'po5',
    content: <h2 className="leading-0">"""建置中，尚未完成"""</h2>,
  },
];

const Stage1 = () => {
  const [poTalk, setPoTalk] = useState(s1PoTalk[0]);
  const [project, setProject] = useState(itemArr);

  const onDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) return;
    if (destination.index === source.index) return;
    const projects = reorder(project, source.index, destination.index);
    // const results = [...project];

    // // 把兩個索引的值對調，相當於 [a, b] = [b, a]
    // [results[source.index], results[destination.index]] = [
    //   results[destination.index],
    //   results[source.index],
    // ];
    setProject(projects);
    // store reordered state.
    // setProject(projects);
  };
  // const getListStyle = (isDraggingOver) => ({
  //   borderWidth: '1px',
  //   border: isDraggingOver ? 'lightblue' : 'grey',
  // });
  return (
    <div className="background2">
      <div className="dialog grid grid-cols-5 gap-2">
        <div className="chara relative top-4">
          <img src={PoHole} alt="" className="absolute top-4 left-4 w-[320px]" />
          <img src={PoCharaLight} alt="" className="absolute top-7 left-0 w-[380px]" />
          <img src={PoChara} alt="" className="absolute top-5 left-4 w-[320px]" />
        </div>

        <div key={poTalk.id} className="talk talk-po relative col-span-4 m-10">
          <div className="talk-title">
            <h3>PO</h3>
          </div>
          {poTalk.content}
          <button
            onClick={() => poTalk.index <= 4 && setPoTalk(s1PoTalk[poTalk.index + 1])}
            key={poTalk.id}
          >
            {poTalk.index === 1 ? (
              <div className="btn absolute right-6 bottom-6 mt-2">準備開始！</div>
            ) : (
              <img
                src={require('../assets/gif/ic_continue_po.gif')}
                alt=""
                className=" absolute bottom-12 right-14 h-6"
              />
            )}
          </button>
        </div>
      </div>

      {/* <div className=" flex h-[400px] w-[400px] flex-col items-center border border-white">
        <DragDropContext
          onBeforeCapture={(e) => console.log('onBeforeCapture: ', e)}
          onBeforeDragStart={(e) => console.log('onBeforeDragStart: ', e)}
          onDragStart={(e) => console.log('onDragStart: ', e)}
          onDragUpdate={(e) => console.log('onDragUpdate: ', e)}
          onDragEnd={onDragEnd}
        >
          <Droppable droppableId="list">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                {project &&
                  project.map((item, index) => (
                    <Draggable draggableId={item.key} key={item.key} index={index}>
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div
                            style={{
                              borderWidth: '1px',
                              borderColor: snapshot.isDragging ? 'black' : 'red',
                            }}
                          >
                            {item.content}
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div> */}
      <div className="flex items-center justify-center">
        <div className="backlog">
          <div className="green-backlog">
            <div className="green-backlog-top p-4">
              <h2 className="text-3xl text-deepDark">產品待辦清單</h2>
              <p className="text-base font-bold text-darkTint">Product Backlog</p>
            </div>

            <div className="green-backlog-bottom flex justify-center p-4">
              <div className="arrow-box m-3 flex flex-col items-center">
                <p className="text-white">高</p>
                <div className="line m-1 h-[20vh] w-[3px] items-stretch" />
                <p className="text-white">低</p>
              </div>

              <div className="item-container m-3 grid w-full grid-rows-4 gap-4">
                <div className="item-box" />
                <div className="item-box" />
                <div className="item-box" />
                <div className="item-box" />
              </div>
            </div>
          </div>
          {/* <div className="bg" /> */}
        </div>
      </div>

      {/* <div className="">
        <div className="item">應徵者的線上履歷編輯器</div>
        <div className="item leading-none">
          後台職缺管理功能
          <div className="text-sm text-tint">（資訊上架、下架、顯示應徵者資料）</div>
        </div>
        <div className="item leading-none ">
          會員系統 <div className="text-sm text-tint">（登入、註冊、權限管理）</div>
        </div>
        <div className="item">前台職缺列表、應徵</div>
      </div> */}
      {/* <div className="absolute h-full">
        
      </div> */}
    </div>
  );
};
export default Stage1;
