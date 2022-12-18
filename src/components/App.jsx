// /* eslint-disable react/jsx-props-no-spreading */
// import { useState } from 'react';
// import { nanoid } from 'nanoid';
// import { Draggable, DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useState } from 'react';

import Footer from './Footer';
import Entrance from './Entrance';
import Stage1 from './Stage1';
import Stage2 from './Stage2';
import Stage3 from './Stage3';
import Stage4 from './Stage4';
import Stage5 from './Stage5';
import Final from './Final';

const App = () => {
  const [page, setPage] = useState(0);
  return (
    <div className="app">
      {page === 0 && <Entrance setPage={setPage} />}
      {page === 1 && <Stage1 setPage={setPage} />}
      {page === 2 && <Stage2 setPage={setPage} />}
      {page === 3 && <Stage3 setPage={setPage} />}
      {page === 4 && <Stage4 setPage={setPage} />}
      {page === 5 && <Stage5 setPage={setPage} />}
      {page === 6 && <Final setPage={setPage} />}
      <Footer />
    </div>
  );
};

export default App;
