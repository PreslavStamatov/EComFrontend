import React from 'react'
import '../styles/Header.css'
import LanguageIcon from '@mui/icons-material/Language';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import BestSellersHover from './BestSellersHover';
import { useState } from 'react';

function Header() {

  const [hoverContent, changeHoverContent] = useState('');
  const [showHoverContent, changeShowHoverContent] = useState(false);

  const customizeHover = (e) => {
    handleHover();
    changeHoverContent(e.target.innerText);
  }

  const handleHover = () => {
    changeShowHoverContent(true);
    document.getElementsByClassName('upperHeader')[0].style.backgroundColor = 'rgba(161, 161, 161, 0.5)'
    document.getElementsByClassName('lowerHeader')[0].style.backgroundColor = 'rgba(161, 161, 161, 0.5)'
    document.getElementsByClassName('upperHeader')[0].style.backgroundImage = 'none'
    document.getElementsByClassName('lowerHeader')[0].style.backgroundImage = 'none'
    Array.from(document.getElementsByClassName('black-on-hover')).forEach((e) => e.style.color='black');
    Array.from(document.getElementsByClassName('headerOption')).forEach((e) => e.style.color='black');
    document.getElementsByClassName('searchbarContainer')[0].style.borderBottom = '2px solid black'
    document.getElementById('search-placeholder').style.color = 'black'
  }
  const handleMouseLeave = () => {
    changeShowHoverContent(!showHoverContent)
    document.getElementsByClassName('upperHeader')[0].style.backgroundColor = 'rgba(255, 255, 255, 0)'
    document.getElementsByClassName('lowerHeader')[0].style.backgroundColor = 'rgba(255, 255, 255, 0)'
    document.getElementsByClassName('upperHeader')[0].style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(20, 20, 20, 0.2))'
    document.getElementsByClassName('lowerHeader')[0].style.backgroundImage = 'linear-gradient(rgba(20, 20, 20, 0.2), rgba(0, 0, 0, 0.007))'
    Array.from(document.getElementsByClassName('black-on-hover')).forEach((e) => e.style.color='white');
    Array.from(document.getElementsByClassName('headerOption')).forEach((e) => e.style.color='white');
    document.getElementsByClassName('searchbarContainer')[0].style.borderBottom = '2px solid white'
    document.getElementById('search-placeholder').style.color = 'white'
  }

  return (
    <>
    <div className='header'>
      <div className='upperHeader'>

        <div className='regionSettings'>
          <LanguageIcon style={{fontSize:'20px'}} className='black-on-hover'></LanguageIcon>
          <p className='black-on-hover'>BULGARIA | EN</p>
          <KeyboardArrowDownIcon style={{color: 'white'}} className='black-on-hover'></KeyboardArrowDownIcon>
        </div>

        <div className='logoContainer'>
          <img className='headerLogo' src="https://shorturl.at/NT89O" alt="" />
        </div>

        <div className='headerOptions'>
          <p style={{color: 'white', fontSize:'13px'}} className='black-on-hover'>JOIN LOYALTY</p>
          <PersonOutlineOutlinedIcon className='headerOption' ></PersonOutlineOutlinedIcon>
          <FavoriteBorderIcon className='headerOption'></FavoriteBorderIcon>
          <ShoppingBagIcon className='headerOption'></ShoppingBagIcon>
        </div>

      </div>

      <div className='lowerHeader'>

        <div className='headerFilters'>
          <p className='headerFilter' onMouseOver={customizeHover} onMouseLeave={() => handleMouseLeave()}>NEW</p>
          <p className='headerFilter' onMouseOver={customizeHover} onMouseLeave={() => handleMouseLeave()}>BEST SELLERS</p>
          <p className='headerFilter' onMouseOver={customizeHover} onMouseLeave={() => handleMouseLeave()}>HUDA BEAUTY</p>
          <p className='headerFilter' onMouseOver={customizeHover} onMouseLeave={() => handleMouseLeave()}>KAYALI</p>
          <p className='headerFilter' onMouseOver={customizeHover} onMouseLeave={() => handleMouseLeave()}>WISHFUL</p>
          <p className='headerFilter' onMouseOver={customizeHover} onMouseLeave={() => handleMouseLeave()}>LAST CHANCE</p>
        </div>

        <div className='searchbarContainer'>
          <p id='search-placeholder' style={{color: 'white', fontSize:'14px'}}>Search</p>
          <SearchIcon className='black-on-hover' style={{color: 'white'}}></SearchIcon>
        </div>

      </div>

      
      
      
    </div>

    {(showHoverContent && hoverContent==='NEW') && <BestSellersHover state={{showHoverContent, changeShowHoverContent}} effectToggle={handleHover} effectUntoggle={handleMouseLeave}></BestSellersHover>}
    {(showHoverContent && hoverContent==='BEST SELLERS') && <BestSellersHover state={{showHoverContent, changeShowHoverContent}} effectToggle={handleHover} effectUntoggle={handleMouseLeave}></BestSellersHover>}
    {(showHoverContent && hoverContent==='HUDA BEAUTY') && <BestSellersHover state={{showHoverContent, changeShowHoverContent}} effectToggle={handleHover} effectUntoggle={handleMouseLeave}></BestSellersHover>}
    {(showHoverContent && hoverContent==='KAYALI') && <BestSellersHover state={{showHoverContent, changeShowHoverContent}} effectToggle={handleHover} effectUntoggle={handleMouseLeave}></BestSellersHover>}
    {(showHoverContent && hoverContent==='WISHFUL') && <BestSellersHover state={{showHoverContent, changeShowHoverContent}} effectToggle={handleHover} effectUntoggle={handleMouseLeave}></BestSellersHover>}
    {(showHoverContent && hoverContent==='LAST CHANCE') && <BestSellersHover state={{showHoverContent, changeShowHoverContent}} effectToggle={handleHover} effectUntoggle={handleMouseLeave}></BestSellersHover>}

    </>
  )
}

export default Header
