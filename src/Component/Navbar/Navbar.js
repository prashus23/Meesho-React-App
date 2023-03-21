import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    // <!--navigation-->
    <nav>
      <ul>
        <ul>
          Women Ethnic
          <div class="subMenu">
            <div id="womenEthic" class="submenuList">
              <ul className="all-women">
                All Women Ethnic
                <li className="all-women">
                  Sarees
                  <li>All Sarees</li>
                  <li>Silk Sarees</li>
                  <li>Cotton Silk Sarees</li>
                  <li>Cotton Sarees</li>
                  <li>Georgette Sarees</li>
                  <li>Chiffon Sarees</li>
                  <li>Satin Sarees</li>
                  <li>Embroidered Sarees</li>
                </li>
              </ul>
            </div>
          </div>
        </ul>
        <li>View All</li>

        <li>
          Women Western
          <div class="subMenu">
            <div id="womenWestern" class="submenuList"></div>
          </div>
        </li>
        <li>
          Men
          <div class="subMenu">
            <div id="men" class="submenuList"></div>
          </div>
        </li>
        <li>
          Kids
          <div class="subMenu">
            <div id="kids" class="submenuList"></div>
          </div>
        </li>
        <li>
          Home & Kitchen
          <div class="subMenu">
            <div id="HomeAndKitchen" class="submenuList"></div>
          </div>
        </li>
        <li>
          Beauty & Health
          <div class="subMenu">
            <div id="beautyAndHealth" class="submenuList"></div>
          </div>
        </li>
        <li>
          Jewellery & Accessories
          <div class="subMenu">
            <div id="JewelleryAndAccessories" class="submenuList"></div>
          </div>
        </li>
        <li>
          Bags & Footwear
          <div class="subMenu">
            <div id="BagsFootWarId" class="submenuList"></div>
          </div>
        </li>
        <li>
          Electronics
          <div class="subMenu">
            <div id="ElectronicsId" class="submenuList"></div>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
