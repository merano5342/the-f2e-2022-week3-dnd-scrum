/* eslint-disable no-shadow */
/* eslint-disable react/jsx-props-no-spreading */
import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { DragDropContext } from 'react-beautiful-dnd';
import style from './BackLog3.scss';

import Boxes from './Boxes';

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

  useEffect(() => {
    if (containers.list.length === 0) {
      setDoneBtnActive(true);
      // const onAns = (object) => {
      //   return Object.keys(object).map((key) => {
      //     if (object[key].length > 0) {
      //       console.log(object[key][0].ansBox, key);
      //       return object[key][0].ansBox === key;
      //     }
      //     return '';
      //   });
      // };

      // console.log(onAns(containers));

      const onListCorrection = () => {
        const currentArr = [
          ...Object.values(containers).map((arr) => (arr.length ? arr[0].ansBox : '0')),
        ];
        const ansArr = ['0', 'A', 'B', 'C'];
        const correctBoolean = !!(currentArr.join('') === ansArr.join(''));
        return correctBoolean;
      };
      setListCorrection(onListCorrection);
    }
  }, [containers]);

  const containersKeys = Object.keys(containers);

  const onDragEnd = (result) => {
    const { destination, source } = result;
    console.log(destination.droppableId, source.droppableId);

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
  };
  const handleCheckCorrection = () => {
    setDoneBtnActive(false);
    return listCorrection ? setTalkId(5) : setTalkId(4);
  };
  const onDoneBtnShow = (talkId) => {
    if (talkId >= 3 && talkId < 5) return true;
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
    <div className="" id="BackLog3">
      <DragDropContext onDragEnd={onDragEnd}>
        <main className="sprint-bg relative flex h-[500px]">
          {/* 外盒們 */}
          {containersKeys.map((x) => (
            <Boxes x={x} containers={containers} key={x} />
          ))}
        </main>
      </DragDropContext>
      {onDoneBtnShow(talkId) && doneBtn(doneBtnActive)}
    </div>
  );
};
export default BackLog3;
