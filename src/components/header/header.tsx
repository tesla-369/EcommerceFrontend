import React, { useRef, useState ,useEffect } from "react";
import "../header/header.css";
// import Logo from "../../assets/images/logo.svg";
import Logo from "../../assets/images/logobutwal.svg";
import SearchIcon from '@mui/icons-material/Search';
import Select from '../selectDrop/select';
import IconCompare from '../../assets/images/icon-compare.svg';
import IconWishlist from '../../assets/images/icon-heart.svg';
import IconCart from '../../assets/images/icon-cart.svg';
import IconAccount from '../../assets/images/icon-user.svg';


import Button from '@mui/material/Button';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

import { ClickAwayListener } from '@mui/base/ClickAwayListener';

import Nav from "./nav/nav";
import '../header/nav/nav.css';



const Header = () => {

    const [isOpenDropDown, setisOpenDropDown] = useState(false);
    const headerRef=useRef<HTMLDivElement>(null);

    const [categories, setcategories] = useState([
        'All Categories',
        'Milks and Dairies',
        'Wines and Drinks',
        'Clothing and beauty',
        'Fresh Organicfood',
        'Baking materials',
        'Vegetables',
        'Fresh Fruit',
        'Bread and juice',
        'Milks and Dairies',
        'Wines and Drinks',
        'Clothing and beauty',
        'Fresh Organicfood',
        'Fresh Organicfood',
        'Fresh Organicfood'

    ]);


    // const countryList = [];

    // const getCountry = async() => { //this is for location,Nepal's Api location
    //   try{

    //   }catch(error : any){
    //     console.log(error.message);
    //   }
    // }

  

    useEffect(() => {
      const handleScroll = () => {
          let position = window.pageYOffset;
          if (headerRef.current) { // Ensure headerRef.current is not null
              if (position > 100) {
                  headerRef.current.classList.add('fixed');
              } else {
                  headerRef.current.classList.remove('fixed');
              }
          }
      };

      window.addEventListener('scroll', handleScroll);

      // Cleanup function to remove the event listener when component unmounts
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return (
    <>
    <div className="headerWrapper" ref= {headerRef}>
      <header >
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-2">
              <img src={Logo} alt="" />
              {/* <h3>Butwal Bazaar</h3> */}
            </div>

            {/* headerSearch start here */}
            <div className='col-sm-5'>
              <div className='headerSearch d-flex align-items-center'>
                <Select data={categories}/>



                <div className='search'>
                    <input type='text' placeholder='Search for items...' />
                    <SearchIcon className='searchIcon cursor'/>
                </div>
              </div>
            </div>
            {/* headerSearch start here */}


          {/* <div className='col-sm-5'> //this is for location,use Nepal location API's
            <Select/> 
          </div> */}
          {/* Iconlists starts here */}
          <div className='col sm-5 d-flex align-items-center'>
          <ClickAwayListener onClickAway = { () => setisOpenDropDown(false)}>
            <ul className='list list-inline mb-0  headerTabs '>
              <li className='list-inline-item'>
                  <span>
                    <img src={IconCompare} alt="iconCompare" /> 
                    <span className='badge bg-success rounded-circle'></span>
                    Compare
                  </span>
              </li>
              <li className='list-inline-item m-4'>
                  <span >
                    <img src={IconWishlist} alt="iconWishlist" /> 
                    <span className='badge bg-success rounded-circle'></span>
                    Wishlist
                  </span>
              </li>
              <li className='list-inline-item m-4'>
                  <span>
                    <img src={IconCart} alt="iconCart" /> 
                    <span className='badge bg-success rounded-circle'></span>
                    Cart
                  </span>
              </li>
              <li className='list-inline-item m-4'>
              
                  <span onClick={() => setisOpenDropDown(!isOpenDropDown)}>
                    <img src={IconAccount} alt="iconAccount" /> 
                    Account
                  </span>
                {
                  isOpenDropDown!== false && 
                              <ul className='dropdownMenu'>
                                <li>
                                <Button className='align-items-center'> <Person2OutlinedIcon/>My Account</Button>
                                <Button><FavoriteBorderOutlinedIcon/>My Wishlist</Button>
                                <Button><SettingsOutlinedIcon/>Settings</Button>
                                <Button><LogoutOutlinedIcon/>Log Out</Button>
                                </li>
                              </ul>
                }
                

              

              </li>
            </ul>
          </ClickAwayListener>
          </div>
          {/* Iconlists ends here */}


          
          </div>
        </div>
      </header>
      <Nav/>
      </div>
    </>
  );
};

export default Header;
