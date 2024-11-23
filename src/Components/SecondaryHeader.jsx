import React, { useState } from 'react'
import '../styles/SecondaryHeader.css'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SearchIcon from '@mui/icons-material/Search';


function SecondaryHeader() {

  const [showShoppingBag, changeShowShoppingBag] = useState(false);
  
  return (
    <div className='secondaryHeaderContainer'>
      <img className='secondaryHeaderLogo' src="https://shorturl.at/NT89O" alt="" />

      <div className='secondaryHeaderFilters'>
        <p>NEW</p>
        <p>BEST SELLERS</p>
        <p>HUDA BEAUTY</p>
        <p>KAYALI</p>
        <p>WISHFUL</p>
        <p>LAST CHANCE</p>
      </div>

      <div className='secondaryHeaderOptions' onMouseLeave={() => changeShowShoppingBag(false)}>
        <SearchIcon className='secondaryHeaderOption' ></SearchIcon>
        <PersonOutlineOutlinedIcon className='secondaryHeaderOption' ></PersonOutlineOutlinedIcon>
        <FavoriteBorderIcon className='secondaryHeaderOption'></FavoriteBorderIcon>
        <ShoppingBagIcon className='secondaryHeaderOption shoppingBag' onMouseEnter={() => changeShowShoppingBag(true)}></ShoppingBagIcon>
      </div>


    </div>
  )
}

export default SecondaryHeader
