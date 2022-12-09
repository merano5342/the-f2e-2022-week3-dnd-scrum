/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { DragDropContext } from 'react-beautiful-dnd';

import Boxes from './Boxes';

const BackLog2 = (props) => {
  const { setTalkId, talkId, disableNextBtn } = props;
  const [doneBtnActive, setDoneBtnActive] = useState(false);
  const [listCorrection, setListCorrection] = useState(false);
  const [totalPoints, setTotalPoints] = useState(0);

  const [list, setList] = useState({
    A: {
      key: 'A',
      style: 'green-backlog',
      title: '產品待辦清單',
      titleEN: 'Product Backlog',
      item: [
        {
          sprint: 8,
          key: nanoid(),
          content: (
            <div className="">
              後台職缺管理功能
              <p className="text-sm">（資訊上架、下架、顯示應徵者資料）</p>
            </div>
          ),
        },
        {
          sprint: 5,
          key: nanoid(),
          content: <div className="">應徵者的線上履歷編輯器</div>,
        },

        {
          sprint: 13,
          key: nanoid(),
          content: (
            <div className="">
              會員系統 <p className="text-sm">（登入、註冊、權限管理）</p>
            </div>
          ),
        },
        {
          sprint: 8,
          key: nanoid(),
          content: <div className="">前台職缺列表、應徵</div>,
        },
      ],
    },

    B: {
      key: 'B',
      style: 'orange-backlog',
      title: '開發 A 組的短衝待辦清單',
      titleEN: 'Sprint Backlog',
      item: [],
    },
  });

  // 分數計算
  const onCountPoints = (list) => {
    return list.item.reduce((pre, cur) => pre + cur.sprint, 0);
  };

  // 確認答案正確性
  const onPointsCorrection = (points) => {
    return points < 20 && points > 0;
  };

  // 拖曳事件結束
  const onDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination) return;
    if (totalPoints > 20 && destination.droppableId === 'B') return;

    const newList = { ...list };
    const [remove] = newList[source.droppableId].item.splice(source.index, 1);

    newList[destination.droppableId].item.splice(destination.index, 0, remove);

    setList(newList);
  };

  useEffect(() => {
    if (list.B.item.length >= 2) {
      setDoneBtnActive(true);
    }
    setTotalPoints(onCountPoints(list.B));
    setListCorrection(onPointsCorrection(totalPoints));
  }, [list, totalPoints]);

  // 按鈕顯示答案正確性
  const handleCheckCorrection = () => {
    setDoneBtnActive(false);
    return listCorrection ? setTalkId(2) : setTalkId(1);
  };

  const doneBtn = (boolean) => (
    <button
      className="btn fixed right-[40px] bottom-[70px]"
      data-active={boolean}
      onClick={handleCheckCorrection}
      disabled={!boolean}
    >
      開始 Sprint
    </button>
  );

  const listKey = ['A', 'B'];
  return (
    <div className="relative" id="backlog2">
      <DragDropContext onDragEnd={onDragEnd}>
        <main className="mx-6 flex h-[500px]">
          {/* 外盒們 */}
          {listKey.map((x) => {
            return <Boxes list={list} x={x} totalPoints={totalPoints} key={x} />;
          })}
        </main>
      </DragDropContext>
      {talkId === 0 && doneBtn(doneBtnActive)}
    </div>
  );
};

export default BackLog2;
