/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { DragDropContext } from 'react-beautiful-dnd';

import Boxes from './Boxes';

const reOrder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

// const ExampleAnimate = () => {
//   return <div className="arrow h-[26vh]  rotate-[135deg]" />;
// };
const BackLog1 = (props) => {
  const { talkId, setTalkId } = props;
  const [doneBtnActive, setDoneBtnActive] = useState(false);
  const [listCorrection, setListCorrection] = useState(false);

  const [containers, setContainers] = useState({
    A: [
      {
        priority: 3,
        key: nanoid(),
        content: <div className="mt-2">應徵者的線上履歷編輯器</div>,
      },
    ],
    B: [
      {
        priority: 1,
        key: nanoid(),
        content: (
          <div className="">
            後台職缺管理功能
            <div className="text-sm text-tint">（資訊上架、下架、顯示應徵者資料）</div>
          </div>
        ),
      },
    ],
    C: [
      {
        priority: 2,
        key: nanoid(),
        content: (
          <div className="">
            會員系統 <div className="text-sm text-tint">（登入、註冊、權限管理）</div>
          </div>
        ),
      },
    ],
    D: [
      {
        priority: 4,
        key: nanoid(),
        content: <div className="mt-2">前台職缺列表、應徵</div>,
      },
    ],
    list: [],
  });

  useEffect(() => {
    if (containers.list.length === 4) {
      setDoneBtnActive(true);
    }
    const listCorrection = () => {
      const currentList = containers.list.map((item) => item.priority);
      const correctList = [...Array(4).keys()].map((pre) => pre + 1);

      const correctBoolean = !!(
        correctList.length === 4 && currentList.join('') === correctList.join('')
      );
      return correctBoolean;
    };
    setListCorrection(listCorrection);
  }, [containers]);

  const boxKeys = Object.keys(containers);

  const onDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination || destination.droppableId !== 'list') return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    // 如果在同一個容器中交換
    if (source.droppableId === destination.droppableId) {
      const items = [...containers[source.droppableId]];

      const newItems = reOrder(items, source.index, destination.index);
      setContainers({
        ...containers,
        [source.droppableId]: newItems,
      });
    }

    // 否則就是在不同容器中移動，要抓出對應的 items 做操作
    if (source.droppableId !== destination.droppableId) {
      const fromItems = [...containers[source.droppableId]];
      const toItems = [...containers[destination.droppableId]];
      toItems.splice(destination.index, 0, fromItems[source.index]);
      fromItems.splice(source.index, 1);

      setContainers({
        ...containers,
        [source.droppableId]: fromItems,
        [destination.droppableId]: toItems,
      });
    }
  };

  const handleCheckCorrection = () => {
    setDoneBtnActive(false);
    return listCorrection ? setTalkId(5) : setTalkId(4);
  };
  const onDoneBtnShow = (talkId) => {
    if (talkId >= 3 && talkId < 5) return true;
    return false;
  };
  const doneBtn = (boolean) => (
    <button
      className="btn fixed right-[40px] bottom-[70px]"
      data-active={boolean}
      onClick={handleCheckCorrection}
    >
      我完成了
    </button>
  );

  return (
    <div className="relative mx-auto" id="backlog1">
      <DragDropContext onDragEnd={onDragEnd}>
        <main className="flex h-[500px] justify-center">
          {/* 外盒們 */}
          {boxKeys.map((x) => (
            <Boxes x={x} containers={containers} key={x} />
          ))}
        </main>
      </DragDropContext>
      {onDoneBtnShow(talkId) && doneBtn(doneBtnActive)}
      {talkId === 2 && (
        <div className="absolute top-0 right-0 z-30 h-full w-full">
          <div className="absolute right-[45vh] bottom-[15vh]  ">
            <div className="arrow h-[26vh] rotate-[135deg]" />
          </div>
        </div>
      )}
    </div>
  );
};

export default BackLog1;
