import React from 'react';
import "./product.css";

const Product = () => {
  return (
    <div class="Product_container_You">
        <h1 >Products For You</h1>
        <div class="product_container_you_content">
            <aside class="product_category_you_aside">
                <h3>Category</h3>
                <div class="search_category_input">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="Search"/>
                </div>
                <div class="display_Category_list">
                    <label for="bluetooth" >
                        <input type="checkbox" id="bluetooth"/>
                        <span>bluetooth Headset</span>
                    </label>
                    <label for="chains">
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
                        <input type="checkbox" id="watch"/>
                        <span>watch</span>
                    </label>
                </div>
                
            </aside>    
        </div>
    </div>
  )
}

export default Product
