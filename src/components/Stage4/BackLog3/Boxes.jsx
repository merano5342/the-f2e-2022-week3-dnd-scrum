/* eslint-disable react/jsx-props-no-spreading */
import { Droppable, Draggable } from 'react-beautiful-dnd';
// eslint-disable-next-line no-unused-vars
import style from './BackLog3.scss';

const boxClass = {
  list: 'box-list',
  A: 'box-a',
  B: 'box-b',
  C: 'box-c',
};

const Items = (props) => {
  const { item, i, x } = props;

  return (
    <div key={item.key}>
      <Draggable draggableId={item.key} index={i}>
        {(provided) => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            className="spring-title"
            data-incorrect={x !== item.ansBox && x !== 'list'}
          >
            <h2 className="text-2xl">{item.title}</h2>
            <p>{item.titleEN}</p>
          </div>
        )}
      </Draggable>
    </div>
  );
};

const Boxes = (props) => {
  const { x, containers } = props;
  return (
    <Droppable droppableId={x} key={x}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps} className={boxClass[x]}>
          {containers[x].map((item, i) => {
            return <Items item={item} i={i} provided={provided} key={item.key} x={x} />;
          })}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};
export default Boxes;
