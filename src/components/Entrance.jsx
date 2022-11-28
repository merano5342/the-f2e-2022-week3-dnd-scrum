import { useState } from 'react';
import BigLogo from '../assets/logo/logo.png';
import LeafTint1 from '../assets/bg/bg_leafTint_1_lt.png';
import LeafTint2 from '../assets/bg/bg_leafTint_2_lb.png';
import LeafTint3 from '../assets/bg/bg_leafTint_3_t.png';
import LeafTint4 from '../assets/bg/bg_leafTint_4_rb.png';

import LeafDark1 from '../assets/bg/bg_leafDark_1_l.png';
import LeafDark2 from '../assets/bg/bg_leafDark_2_b.png';
import LeafDark3 from '../assets/bg/bg_leafDark_3_r.png';
import LeafDark4 from '../assets/bg/bg_leafDark_4_t.png';

const Entrance = (props) => {
  const { setPage } = props;
  const [enter, setEnter] = useState(false);
  const Landings = (
    <div className=" relative z-20 ">
      <div className=" flex flex-col items-center justify-center">
        <img src={BigLogo} alt="" className="z-20 max-h-[80vh]" />
        <h2 className="relative top-[-70px] z-20 text-center text-3xl text-white">
          深入敏捷の村一探究竟
        </h2>
        <button className="btn relative top-[-40px] z-20" onClick={() => setEnter(true)}>
          進入村莊
        </button>
      </div>
    </div>
  );
  const Intro = (
    <div className="relative z-20 flex flex-col items-center">
      <div className="talk talk-mm mt-[20vh] mb-10">
        <div className="talk-title absolute">
          <h3>（謎之音）</h3>
        </div>
        <h3 className="text-white">
          呦呼，歡迎進入<span className="highlight">「SCRUM 新手村」</span>
          ，在正式加入專案開發之前，需要請你先了解 Scrum 的流程與精神！
          <br />
          <br />
          請接受挑戰任務，成功通過 Scrum 新手村的挑戰任務吧～
        </h3>
      </div>
      <button className="btn" onClick={() => setPage(1)}>
        接受挑戰
      </button>
    </div>
  );
  return (
    <div className="background">
      <div className="entrance">
        {enter ? Intro : Landings}
        <div className="z-0 h-full">
          <img src={LeafDark1} alt="" className="absolute left-0 bottom-0" />
          <img src={LeafDark2} alt="" className="absolute bottom-0" />
          <img src={LeafDark3} alt="" className="absolute right-0 top-0" />
          <img src={LeafDark4} alt="" className="absolute top-0 " />
          {!enter && (
            <div className="">
              <img src={LeafTint1} alt="" className="absolute left-0 top-0" />
              <img src={LeafTint2} alt="" className="absolute bottom-0 left-0" />
              <img src={LeafTint3} alt="" className="absolute top-0" />
              <img src={LeafTint4} alt="" className="absolute bottom-0 right-0" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Entrance;
