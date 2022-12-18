import PoChara from '../../assets/role/role_po.png';
import PoCharaLight from '../../assets/role/role_po_light.png';
import Hole from '../../assets/role/hole.png';

import MmChara from '../../assets/role/role_mm.png';
import MmCharaLight from '../../assets/role/role_mm_light.png';

import EeChara from '../../assets/role/role_team1.png';
import EeCharaLight from '../../assets/role/role_team1_light.png';

import GgChara from '../../assets/role/role_team2.png';
import GgCharaLight from '../../assets/role/role_team2_light.png';

export const PoCharacter = (
  <div className="chara rotate-180">
    <img src={Hole} alt="" className="" />
    <img src={PoCharaLight} alt="" className="top-2" />
    <img src={PoChara} alt="" className="" />
  </div>
);
export const MmCharacter = (
  <div className="chara bottom-[-4px] ">
    <img src={Hole} alt="" className="bottom-2" />
    <img src={MmCharaLight} alt="" className="bottom-4" />
    <img src={MmChara} alt="" className="" />
  </div>
);

export const EeCharacter = (
  <div className="chara rotate-180">
    <img src={Hole} alt="" className="" />
    <img src={EeCharaLight} alt="" className="top-2" />
    <img src={EeChara} alt="" className="" />
  </div>
);
export const GgCharacter = (
  <div className="chara rotate-180">
    <img src={Hole} alt="" className="" />
    <img src={GgCharaLight} alt="" className="top-2" />
    <img src={GgChara} alt="" className="" />
  </div>
);
