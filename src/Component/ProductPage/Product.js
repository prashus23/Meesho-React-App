import React, { useEffect, useReducer, useState } from "react";
import "./product.css";
// import data from '../../Constant/meesho/data';
import { data } from "../../Constant/meesho/data";

let categories = [];
const Product = () => {
  const [productList, setProductList] = useState([]);
  const [filterList, setFilterList] = useState([]);

  const checkHandler = (e) => {
    const selectCat = e.target.value;
    const checked = e.target.checked;
    console.log(selectCat, checked, "<<<<<");
    if (checked) {
      setFilterList((ps) => [...ps, selectCat]);
    } else {
      const restList = filterList.filter((item) => {
        return item != selectCat;
      });
      setFilterList(restList);
    }
  };
  useEffect(() => {
    const filteredProducts = data.filter((item) => {
      return filterList.includes(item.category);
    });
    console.log(filteredProducts);
    if (filterList.length > 0) {
      setProductList(filteredProducts);
    } else {
      setProductList(data);
    }
  }, [filterList]);
  useEffect(() => {
    data.map((item) => {
      if (!categories.includes(item.category)) {
        categories.push(item.category);
      }
    });
  }, []);

  return (
    <div class="Product_container_You">
      <h1>Products For You</h1>
      <div class="product_container_you_content">
        <div class="product_category_you_aside">
          <h3>Category</h3>
          <div class="search_category_input">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search" />
          </div>
          <div class="display_Category_list">
            {/* <label for="bluetooth" >
                        <input type="checkbox" id="bluetooth"/>
                        <span>bluetooth Headset</span>
                    </label> */}
            {categories.map((category) => {
              return (
                <label for="bluetooth">
                  <input
                    type="checkbox"
                    onChange={(e) => checkHandler(e)}
                    value={category}
                  />
                  <span>{category} </span>
                </label>
              );
            })}
            {/* <label for="chains">
                        <input type="checkbox" id="chains"/>
                        <span>Men Chains</span>
                    </label>
                    <label for="kurtas">
                        <input type="checkbox" id="kurtas"/>
                        <span>Kurtas</span>
                    </label>
                    <label for="accessories">
                        <input type="checkbox" id="accessories"/>
                        <span>Mobile Accessories</span>
                    </label>
                    <label for="sarees">
                        <input type="checkbox" id="sarees"/>
                        <span>sarees</span>
                    </label>
                    <label for="watch">
                        <input onChange={()=>{checkHandler('watch')}} type="checkbox" id="watch"/>
                        <span>watch</span>
                    </label> */}
            {productList.map((item) => {
              return (
                <div className="product-left">
               
                  <img src={ `https://github.com/prashus23/Meesho-React-App/blob/b6c1a3cb65ac2a57545c8834259966b5c6814081/src/Constant/meesho/productImage/${item.img}`} />
                  <h1>{item.name}</h1>
                  <p>{item.review}</p>
                  <h1>{item.price}</h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
