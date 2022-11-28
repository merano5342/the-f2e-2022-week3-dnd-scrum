import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Items = (props) => {
  const { item, i } = props;
  return (
    <div key={item.key}>
      <Draggable draggableId={item.id} index={i}>
        {(provided, snapshot) => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            className=""
          >
            {item.content}
          </div>
        )}
      </Draggable>
    </div>
  );
};

const Boxes = (props) => {
  const { x, boxs } = props;

  return (
    <div key={x} className="mx-4">
      <h1 className="mb-4 bg-tint pb-2 text-4xl">box {x}</h1>
      <Droppable droppableId={x} key={x}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`min-h-[100px] `}
          >
            {/* item 物件們 */}
            {boxs[x].map((item, i) => (
              <Items item={item} i={i} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};
export default Boxes;
