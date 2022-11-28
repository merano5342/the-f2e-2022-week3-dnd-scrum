/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { DragDropContext } from 'react-beautiful-dnd';

import Boxes from './Boxes';

const reOrder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  console.log('result', result);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  console.log('end', list);
  return result;
};
const BackLot1 = () => {
  // const [project, setProject] = useState(Arr);
  const [boxs, setBoxs] = useState({
    A: [
      {
        id: 'ddItem1',
        originBox: 'A',

        key: nanoid(),
        content: <div className="item  m-2">應徵者的線上履歷編輯器</div>,
      },
    ],
    B: [
      {
        id: 'ddItem2',
        originBox: 'B',

        key: nanoid(),
        content: (
          <div className="item m-2">
            後台職缺管理功能
            <div className="text-sm">（資訊上架、下架、顯示應徵者資料）</div>
          </div>
        ),
      },
    ],
    C: [
      {
        id: 'ddItem3',
        originBox: 'C',

        key: nanoid(),
        content: (
          <div className="item m-2">
            會員系統 <div className="text-sm text-tint">（登入、註冊、權限管理）</div>
          </div>
        ),
      },
    ],
    D: [
      {
        id: 'ddItem4',
        originBox: 'D',

        key: nanoid(),
        content: <div className="item m-2">前台職缺列表、應徵</div>,
      },
    ],
    E: [],
  });

  const boxKeys = Object.keys(boxs);

  const onDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination || destination.droppableId !== 'E') return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    // 如果在同一個容器中交換
    if (source.droppableId === destination.droppableId) {
      const items = [...boxs[source.droppableId]];

      const newItems = reOrder(items, source.index, destination.index);
      setBoxs({
        ...boxs,
        [source.droppableId]: newItems,
      });
    }

    // 否則就是在不同容器中移動，要抓出對應的 items 做操作
    if (source.droppableId !== destination.droppableId) {
      const fromItems = [...boxs[source.droppableId]];
      const toItems = [...boxs[destination.droppableId]];

      toItems.splice(destination.index, 0, fromItems[source.index]);
      fromItems.splice(source.index, 1);

      setBoxs({
        ...boxs,
        [source.droppableId]: fromItems,
        [destination.droppableId]: toItems,
      });
    }
  };

  return (
    <div className="mx-auto mt-2 w-fit border p-4">
      <DragDropContext onDragEnd={onDragEnd}>
        <main className="flex flex-wrap">
          {/* 外盒們 */}
          {boxKeys.map((x) => (
            <Boxes x={x} boxs={boxs} />
          ))}
        </main>
      </DragDropContext>
    </div>
  );
};

export default BackLot1;
