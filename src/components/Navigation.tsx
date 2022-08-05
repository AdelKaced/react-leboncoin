import React from "react";
import { ReactComponent as Logo } from '../logo-le-bon-coin.svg';
import SearchIcon from '@mui/icons-material/Search'



const Navigation = () => {
  return (
    <div className="nav">
       <Logo className='logo'/>

      <ul>
     <li>Déposer unne annonce</li>   
     <li><SearchIcon />Rechercher</li>   
      </ul>
    </div>
  );
};

export default Navigation;
