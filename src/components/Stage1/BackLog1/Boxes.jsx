/* eslint-disable react/jsx-props-no-spreading */
import { Droppable, Draggable } from 'react-beautiful-dnd';
import style from './Backlog1.scss';

const boxArr = {
  A: 'box-a',
  B: 'box-b',
  C: 'box-c',
  D: 'box-d',
  E: 'green-backlog',
};

const Items = (props) => {
  const { item, i } = props;
  return (
    <div key={item.key}>
      <Draggable draggableId={item.key} index={i}>
        {(provided) => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            className="item"
          >
            {item.content}
          </div>
        )}
      </Draggable>
    </div>
  );
};

const Boxes = (props) => {
  const { x, containers } = props;

  const isBacklog = (boxX) => {
    return boxX === 'E';
  };

  const getBackLogStyle = () => {
    if (isBacklog(x)) {
      return (
        <div className="backlog-top p-4">
          <h2 className="text-3xl text-deepDark">產品待辦清單</h2>
          <p className="text-base font-bold text-darkTint">Product Backlog</p>
        </div>
      );
    }
    return null;
  };

  const getBackLogBoxStyle = () => {
    if (isBacklog(x)) {
      return (
        <div className="arrow-box m-3 flex grid-cols-1 flex-col items-center">
          <p className="text-white">高</p>
          <div className="arrow m-1 h-[20vh] w-[3px] items-stretch" />
          <p className="text-white">低</p>
        </div>
      );
    }
    return null;
  };
  const itemBox = () => {
    if (isBacklog(x)) {
      return (
        <div className="item-container">
          <div className="item-box" />
          <div className="item-box" />
          <div className="item-box" />
          <div className="item-box" />
        </div>
      );
    }
    return null;
  };

  return (
    <div className="data-[box=true]:relative" data-box={isBacklog(x)}>
      <div key={x} className={boxArr[x]}>
        {getBackLogStyle(x)}
        <Droppable droppableId={x} key={x}>
          {(provided) => (
            <div
              className="backlog-bottom p-4 data-[box=true]:grid data-[box=true]:grid-cols-5"
              data-box={isBacklog(x)}
            >
              {getBackLogBoxStyle(x)}

              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="data-[box=true]:col-span-4 data-[box=true]:min-h-[400px]"
                data-box={isBacklog(x)}
              >
                {itemBox(x)}
                {containers[x].map((item, i) => (
                  <Items item={item} i={i} provided={provided} key={item.key} />
                ))}
                {provided.placeholder}
              </div>
            </div>
          )}
        </Droppable>
      </div>
      {isBacklog(x) && <div className="backlog-bg" />}
    </div>
  );
};
export default Boxes;
