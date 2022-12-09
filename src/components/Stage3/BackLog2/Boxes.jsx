/* eslint-disable react/jsx-props-no-spreading */
import { Droppable, Draggable } from 'react-beautiful-dnd';
import style from './BackLog2.scss';

const Items = (props) => {
  const { item, i, x, totalPoints } = props;
  const isBoxB = x === 'B';
  const pointOver = !!(totalPoints > 20 && x === 'B');

  return (
    <div key={item.key} className="z-30">
      <Draggable draggableId={item.key} index={i}>
        {(provided) => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            className="item flex"
            data-yellow={isBoxB}
            data-red={pointOver}
          >
            <div className="sprint">{item.sprint}</div>
            {item.content}
          </div>
        )}
      </Draggable>
    </div>
  );
};

const Boxes = (props) => {
  const { list, x, totalPoints } = props;
  const box = list[x];
  const boxItems = list[x].item;
  const boxStyle = list[x].style;

  const barContainerStyle = (points) => {
    const sameStyle = {
      zIndex: 20,
      width: '97%',
      height: '20px',
      backgroundColor: '#FF5C00',
      borderRadius: '10px',
      position: 'absolute',
      bottom: '0px',
      top: '0px',
      margin: 'auto 4px',
    };
    if (points <= 0) {
      return {
        ...sameStyle,
        width: '0',
      };
    }
    if (points < 20) {
      return {
        ...sameStyle,
        width: `${(points / 20) * 100}%`,
      };
    }
    return {
      ...sameStyle,
      backgroundColor: 'red',
    };
  };

  return (
    <div className="relative mx-3">
      <div key={x} className={boxStyle}>
        <div className="backlog-top p-4">
          <h2 className="text-3xl text-deepDark">{box.title}</h2>
          <p className="text-base font-bold">{box.titleEN}</p>
        </div>
        <Droppable droppableId={x} key={x}>
          {(provided) => (
            <div className="backlog-bottom grid p-4">
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className=" min-h-[400px]"
              >
                <div className="item-container relative">
                  {x === 'B' && (
                    <div className="backlog-bar absolute bottom-0  mx-2">
                      <div style={barContainerStyle(totalPoints)} />

                      <p className="absolute right-0 left-0 bottom-0 z-30 mx-auto text-center font-bold">
                        {totalPoints} / 20
                      </p>
                    </div>
                  )}
                </div>
                {boxItems &&
                  boxItems.map((item, i) => (
                    <Items
                      item={item}
                      i={i}
                      provided={provided}
                      key={item.key}
                      x={x}
                      totalPoints={totalPoints}
                    />
                  ))}
                {provided.placeholder}
              </div>
            </div>
          )}
        </Droppable>
        <div className="backlog-bg" />
      </div>
    </div>
  );
};
export default Boxes;
