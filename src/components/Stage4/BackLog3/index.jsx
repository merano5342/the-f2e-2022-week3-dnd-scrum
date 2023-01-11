/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { DragDropContext } from 'react-beautiful-dnd';
// eslint-disable-next-line no-unused-vars
import style from './BackLog3.scss';

import Boxes from './Boxes';

const DATA_LIST = [
  { id: 'list-a', title: '產品待辦清單', titleEN: 'Product Backlog' },
  { id: 'list-b', title: '短衝計畫會議', titleEN: 'Sprint Planning' },
  { id: 'list-c', title: '短衝待辦清單', titleEN: 'Sprint Backlog' },
  { id: 'list-d', title: '短衝', titleEN: 'Sprint' },
];

const ListItem = () => {
  return (
    <div className="list-item bg-darkTint">
      {DATA_LIST.map((item) => {
        return (
          <div className={item.id} key={item.id}>
            <h2 className="text-2xl">{item.title}</h2>
            <p>{item.titleEN}</p>
          </div>
        );
      })}
    </div>
  );
};

const BackLog3 = (props) => {
  const { talkId, setTalkId } = props;
  const [doneBtnActive, setDoneBtnActive] = useState(false);
  const [listCorrection, setListCorrection] = useState(false);

  const [containers, setContainers] = useState({
    list: [
      {
        ansBox: 'A',
        key: nanoid(),
        title: '每日站立會議',
        titleEN: 'Daily Scrum',
        correction: '',
      },
      {
        ansBox: 'B',
        key: nanoid(),
        title: '短衝檢視會議',
        titleEN: 'Sprint Review',
        correction: '',
      },
      {
        ansBox: 'C',
        key: nanoid(),
        title: '短衝自省會議',
        titleEN: 'print Retrospective',
        correction: '',
      },
    ],
    A: [],
    B: [],
    C: [],
  });

  const onListCorrection = (containers) => {
    const currentArr = [
      ...Object.values(containers).map((arr) => (arr.length ? arr[0].ansBox : '0')),
    ];
    const ansArr = ['0', 'A', 'B', 'C'];
    const correctBoolean = !!(currentArr.join('') === ansArr.join(''));
    return correctBoolean;
  };

  useEffect(() => {
    if (containers.list.length === 0) {
      setDoneBtnActive(true);
      setListCorrection(onListCorrection(containers));
    }
  }, [containers]);

  const containersKeys = Object.keys(containers);

  const onDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination) return '';

    // 如果在同一個容器中交換
    if (source.droppableId === destination.droppableId) return '';

    // 否則就是在不同容器中移動，要抓出對應的 items 做操作
    if (source.droppableId !== destination.droppableId) {
      const fromList = [...containers[source.droppableId]];
      const toList = [...containers[destination.droppableId]];

      // 移動到另個有 item 的格子內時-> 交換兩者位置
      if (toList.length >= 1 && destination.droppableId !== 'list') {
        const toItem = toList[0];
        const fromItem = fromList[source.index];
        fromList.splice(0, 1, toItem);
        toList.splice(0, 1, fromItem);

        // 置入 item
      } else {
        toList.splice(destination.index, 0, fromList[source.index]);
        fromList.splice(source.index, 1);
      }

      setContainers({
        ...containers,
        [source.droppableId]: fromList,
        [destination.droppableId]: toList,
      });
    }
    return null;
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
      className="btn absolute bottom-14 right-10"
      data-active={boolean}
      onClick={handleCheckCorrection}
    >
      我完成了
    </button>
  );

  return (
    <div className="" id="BackLog3">
      <DragDropContext onDragEnd={onDragEnd}>
        <main className="sprint-bg relative flex h-[500px]">
          {/* 外盒們 */}
          {containersKeys.map((x) => (
            <Boxes x={x} containers={containers} key={x} />
          ))}
          <ListItem />
        </main>
      </DragDropContext>
      {onDoneBtnShow(talkId) && doneBtn(doneBtnActive)}
    </div>
  );
};
export default BackLog3;
