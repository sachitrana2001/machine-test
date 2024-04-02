import React from "react";
import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
} from "@material-tailwind/react";
import Logo from "../../assets/logo.png";
import User from "../../assets/user.png";
import Notification from "../../assets/notification.png";
import Search from "../../assets/search.png";
import Message from "../../assets/message.png";
import Question from "../../assets/question.png";
// profile menu component

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-10 py-5 w-full">
      <img src={Logo} />
      <div className="flex gap-6">
        <img src={Search} className="w-6" />
        <img src={Question} className="w-6" />
        <img src={Notification} className="w-6" />
        <img src={Message} className="w-6" />
        <img src={User} className="w-20 h-6 " />
      </div>
    </div>
  );
};

export default Navbar;
