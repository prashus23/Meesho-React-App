import React from 'react'
import './header.css';
import SearchIcon from '@mui/icons-material/Search';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { Link } from "react-router-dom";


const Header = () => {
  return (

    <header class="header">
        <div class="headerLeft">
            <Link class="logoContainer" to='/'>
                <img src="https://etimg.etb2bimg.com/photo/86809724.cms" />
            </Link>

            {/* seach box */}
            <div class="searchInputContainer">
                <div class="searchIcon">
                    {/* <img src=".search.png" /> */}
                    <SearchIcon style={{color:"grey"}}/>
                </div>
                <form action="" id="inputForm">
                    <input type="text" placeholder="Try Saree, Kurti or Search by Product Code" class="inputSearch" />
                </form>
                <div class="inputCloseSearch">
                    <i class="fa-solid fa-xmark" id="closeSearch"></i>
                </div>

                <div class="searchRecentModal">
                    <h3>Recent Searches</h3>
                    <div class="listofRecent">

                    </div>
                </div>
            </div>
        </div>

        <div class="headerRight">
            <div class="downloadContainer">
                <div class="mobileIcon">
                    {/* <img src="./img/mobile.png" /> */}
                    <PhoneAndroidIcon/>

                </div>
                <p>Download App</p>

                <div class="downloadHoverBtnContainer">
                    <h3>Download From</h3>

                    <a href="" class="downloadBtn">
                        <img src="https://images.meesho.com/images/pow/playstore-icon-big.webp" />
                    </a>
                    <a href="" class="downloadBtn">
                        <img src="https://images.meesho.com/images/pow/appstore-icon-big.webp" />
                    </a>
                </div>
            </div>

            <div class="becomeSupplierContainer">
                <p>Become a Supplier</p>
            </div>

            <div class="profileAndCart">
                <div class="profileContainer">
                    <div class="profileIcon">
                        {/* <img src="./img/user.png" /> */}
                        <PersonIcon/>
                    </div>
                    <p>Profile</p>
                </div>

                <div class="CartContainer">
                    <div class="CartIcon">
                        {/* <img src="./img/cart.png" /> */}
                        <ShoppingCartIcon/>
                    </div>
                    <p>Cart</p>
                </div>
            </div>
        </div>
    </header>
    )
}

export default Header
