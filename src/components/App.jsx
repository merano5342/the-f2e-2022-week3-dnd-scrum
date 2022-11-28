// /* eslint-disable react/jsx-props-no-spreading */
// import { useState } from 'react';
// import { nanoid } from 'nanoid';
// import { Draggable, DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useState } from 'react';
import Backlot1 from './BackLot1';
import Footer from './Footer';
import Entrance from './Entrance';
import Stage1 from './Stage1';

const App = () => {
  const [page, setPage] = useState(0);
  return (
    <div className="app">
      {page === 0 && <Entrance setPage={setPage} />}
      {page === 1 && <Stage1 />}
      {/* <Backlot1 /> */}

      {/* <Stage1 /> */}
      <Footer />
    </div>
  );
};

export default App;
