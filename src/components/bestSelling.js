import React from "react";
import API from "../service/api";
import { Products } from "./products";


export const BestSelling = () => {


    return(
    
    <div class="our-products minimal-our-products">
    <div class="container container--type-4">
      <div class="our-products__title-and-action d-flex">
        <h4 class="our-products__title">Best Selling</h4>
        <div class="product-tabs__action">
          <a href="#">See all product</a>
        </div>
      </div>

      <div class="row">
       

        <Products/>

      </div>
    </div>
  </div>)

    

}
