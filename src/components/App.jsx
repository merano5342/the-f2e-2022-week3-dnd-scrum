import { useState, useEffect } from 'react';
import { useWindowSize } from './Hooks/useWindowSize';

import Footer from './Footer';
import Entrance from './Entrance';
import Stage1 from './Stage1';
import Stage2 from './Stage2';
import Stage3 from './Stage3';
import Stage4 from './Stage4';
import Stage5 from './Stage5';
import Final from './Final';

const AlertDialog = () => {
  return (
    <div className="alert h-full w-full text-center text-xl">
      <h3 className="rounded bg-tint px-6 py-2">
        為了更好的瀏覽體驗
        <br />
        建議使用更寬一點的螢幕
        <span className="text-lg"> (大於920px)</span>
      </h3>
    </div>
  );
};

const App = () => {
  const [page, setPage] = useState(0);
  const [sizeAlert, setSizeAlert] = useState(false);
  const size = useWindowSize();
  useEffect(() => {
    if (size.width < 920) {
      setSizeAlert(true);
    } else {
      setSizeAlert(false);
    }
  }, [size]);

  return (
    <div className="warper ">
      <div className="panel ">
        {sizeAlert && <AlertDialog />}
        {page === 0 && <Entrance setPage={setPage} />}
        {page === 1 && <Stage1 setPage={setPage} />}
        {page === 2 && <Stage2 setPage={setPage} />}
        {page === 3 && <Stage3 setPage={setPage} />}
        {page === 4 && <Stage4 setPage={setPage} />}
        {page === 5 && <Stage5 setPage={setPage} />}
        {page === 6 && <Final setPage={setPage} />}
      </div>

      <Footer />
    </div>
  );
};

export default App;
