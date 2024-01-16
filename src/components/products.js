import React, { useEffect, useState } from "react";
import API from "../service/api";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const getDataApi = async () => {
    try {
      const responseProducts = await API.utils.products();
      console.log("[LOG] [ RESPONSE PRODUCTS ]", responseProducts.data);
      responseProducts.data.Laptops['productos'].map(product => console.log(product))
      setProducts(responseProducts.data);
      setLoading(true)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getDataApi();
  }, []);

  return (
    <> {loading ? products.Laptops['productos'].map(product => ( <div class="col-6 col-md-4 col-xl-3">
    <div class="product-grid-item product-grid-item--type-2 product-grid-item--type-5">
      <div class="product-grid-item__tag">Online exclusive</div>

      <div
        class="product-grid-item__images product-grid-item__images--ratio-100-122 js-product-grid-images"
        data-current-image="0"
      >
        <div class="product-grid-item__images-arrows">
          <div class="product-grid-item__previous-image js-product-grid-previous-image">
            <i class="lnil lnil-chevron-left"></i>
          </div>

          <div class="product-grid-item__next-image js-product-grid-next-image">
            <i class="lnil lnil-chevron-right"></i>
          </div>
        </div>

        <div class="product-grid-item__image js-product-grid-image active">
          <a href="product.html">
            <img
              data-id="1"
              alt="Image"
              data-sizes="auto"
              data-srcset={`${product.img_sm} 320w,${product.img_md} 480w `}
              class="lazyload js-slider-item-image active"
            />
          </a>
        </div>

        

       

        <div class="product-grid-item__quick-shop">
          <a href="#">Quick shop</a>
        </div>
      </div>

      <div class="product-grid-item__feature">{product.marca_nombre}</div>

      <div class="product-grid-item__name">
        <a href="product.html">
         {product.nombre}
        </a>
      </div>

      <div class="product-grid-item__price">
        <span class="product-grid-item__price-new">${product.costo.toFixed(2)}</span>

        <span class="product-grid-item__price-old">${product.precio.toFixed(2)}</span>
      </div>
    </div>
  </div> )):<> </>} </>
    
  );
};
