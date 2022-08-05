import React, { useState } from "react";
import { ReactComponent as Logo } from "../logo-le-bon-coin.svg";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MessageIcon from "@mui/icons-material/Message";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

const Navigation = () => {
    const [active, setActive] = useState()
  return (
    <div className="nav">
      <div className="navLogo">
        <Logo className="logo" />
        <div>
          <AddCircleOutlineIcon />
          <span className='action'>Déposer une annonce</span>
        </div>
        <div>
          <SearchIcon />
          <span className='action'>Rechercher</span>
        </div>
      </div>
      <ul>
        <li>
          <div className='menu-list'>
            <NotificationsNoneIcon />
            Mes recherches
          </div>
        </li>
        <li>
          <div className='menu-list'>
            <FavoriteBorderIcon />
            Favoris
          </div>
        </li>
        <li>
          <div className='menu-list'>
            <MessageIcon /> Message
          </div>
        </li>
        <li>
          <div className='menu-list'>
            <PersonOutlineIcon /> Se connecter
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
