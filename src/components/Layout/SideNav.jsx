import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import rocket from "../../assets/rocket.png";
import bills from "../../assets/bills.png";
import blocks from "../../assets/blocks.png";
import discount from "../../assets/discount.png";
import fuel from "../../assets/fuel.png";
import group from "../../assets/group.png";
import heart from "../../assets/heart.png";
import hut from "../../assets/hut.png";
import settings from "../../assets/settings.png";
import speed from "../../assets/speed.png";
import user from "../../assets/user.png";
import profile from "../../assets/profile.png";
import arrowRight from "../../assets/arrow-right.png";
export function SideBar() {
  const ICONS = [
    rocket,
    speed,
    hut,
    group,
    blocks,
    settings,
    fuel,
    discount,
    profile,
    bills,
    heart,
  ];
  return (
    <div className="bg-blue h-screen fixed z-50 flex flex-col gap-4 items-center w-24 p-4  shadow-blue-gray-900/5">
      <img
        src={arrowRight}
        className="mt-10 h-10 w-10 bg-blue -mr-24 rounded-full border-2 border-white "
      />
      <div className="mt-10 flex flex-col gap-8">
        {ICONS?.map((logo, index) => (
          <img src={logo} className="w-5" key={index} />
        ))}
      </div>
    </div>
  );
}
