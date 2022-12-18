import Logo from '../assets/logo/logo_txt.png';
import { PoCharacter, MmCharacter, EeCharacter, GgCharacter } from './unit/Character';

const Entrance = (props) => {
  const { setPage } = props;
  return (
    <div className="background2 ">
      <div className="final">
        <div className="top-light" />

        <div className=" flex flex-col items-center justify-center">
          <img src={Logo} alt="" className="z-20 max-h-[40vh]" />
          <h2 className="relative top-[-14px] z-20 text-center text-3xl text-white">
            恭喜你通過
          </h2>
          <div className="dialog dialog-po">
            <div className="talk">
              <h2 className="highlight">《 敏捷任務 - 最初の試煉 》</h2>
            </div>
          </div>
          <button className="highlight pt-4" onClick={() => setPage(0)}>
            再玩一次
          </button>
        </div>

        <div className="characters flex justify-center">
          {PoCharacter}
          {MmCharacter}
          {EeCharacter}
          {GgCharacter}
        </div>
      </div>
    </div>
  );
};
export default Entrance;
