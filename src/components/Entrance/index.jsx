import { useState, useEffect } from 'react';
// import { LazyLoadImage } from 'react-lazy-load-image-component';
import BigLogo from '../../assets/logo/logo.png';
import LeafTint1 from '../../assets/bg/bg_leafTint_1_lt.png';
import LeafTint2 from '../../assets/bg/bg_leafTint_2_lb.png';
import LeafTint3 from '../../assets/bg/bg_leafTint_3_t.png';
import LeafTint4 from '../../assets/bg/bg_leafTint_4_rb.png';

import LeafDark1 from '../../assets/bg/bg_leafDark_1_l.png';
import LeafDark2 from '../../assets/bg/bg_leafDark_2_b.png';
import LeafDark3 from '../../assets/bg/bg_leafDark_3_r.png';
import LeafDark4 from '../../assets/bg/bg_leafDark_4_t.png';
import loadingGif from '../../assets/loading.gif';

// eslint-disable-next-line no-unused-vars
import style from './Entrance.scss';

const LoadingAnimate = () => {
  return (
    <div className="loading relative z-30 flex h-full items-center justify-center ">
      <img src={loadingGif} className=" mb-12 h-[160px]" alt="" />
    </div>
  );
};

const Intro = (props) => {
  const { setPage } = props;
  return (
    <div className="dialog-po relative z-20 flex flex-col items-center">
      <div className="talk-nobody talk mx-10 mt-[20vh] mb-10">
        <h3 className="talk-title">（謎之音）</h3>
        <div className="talk-box text-2xl text-white">
          呦呼，歡迎進入<span className="highlight">「SCRUM 新手村」</span>
          ，在正式加入專案開發之前，需要請你先了解 Scrum 的流程與精神！
          <br />
          <br />
          請接受挑戰任務，成功通過 Scrum 新手村的挑戰任務吧～
        </div>
      </div>
      <button className="btn" onClick={() => setPage(1)}>
        接受挑戰
      </button>
    </div>
  );
};

const Landings = (props) => {
  const { setEnter } = props;
  return (
    <div className="relative z-20 ">
      <div className=" flex flex-col items-center justify-center">
        <img src={BigLogo} alt="" className="logo z-20 max-h-[80vh]" />
        <h2 className="relative top-[-70px] z-20 text-center text-3xl text-white">
          深入敏捷の村一探究竟
        </h2>
        <button className="btn relative top-[-40px] z-20" onClick={() => setEnter(true)}>
          進入村莊
        </button>
      </div>
    </div>
  );
};
const Entrance = (props) => {
  const { setPage } = props;
  const [enter, setEnter] = useState(false);
  const [playAnimation, setPlayAnimation] = useState(true);

  useEffect(() => {
    const onPageLoad = () => {
      setPlayAnimation(false);
    };

    if (document.readyState === 'complete') {
      onPageLoad();
    } else {
      window.addEventListener('load', onPageLoad);
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);

  return (
    <div className="background">
      <div className="entrance">
        {playAnimation && <LoadingAnimate />}
        {/* <LoadingAnimate /> */}
        {enter ? <Intro setPage={setPage} /> : <Landings setEnter={setEnter} />}
        <div className="z-0 h-full">
          <img
            src={LeafDark1}
            alt=""
            className="leaf1 absolute left-[-5px] bottom-[-5px]"
          />
          <img src={LeafDark2} alt="" className="leaf2 absolute bottom-[-5px]" />
          <img
            src={LeafDark3}
            alt=""
            className="leaf1 absolute right-[-5px] top-[-5px]"
          />
          <img src={LeafDark4} alt="" className="leaf2 absolute top-[-5px] " />

          {!enter && (
            <div className="">
              <img
                src={LeafTint1}
                alt=""
                className="leaf1 absolute left-[-5px] top-[-5px]"
              />
              <img
                src={LeafTint2}
                alt=""
                className="leaf2 absolute bottom-[-5px] left-[-5px]"
              />
              <img src={LeafTint3} alt="" className="leaf1 absolute top-[-5px]" />
              <img
                src={LeafTint4}
                alt=""
                className="leaf2 absolute bottom-[-5px] right-[-5px]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Entrance;
