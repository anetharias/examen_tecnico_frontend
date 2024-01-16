import API from "./service/api";
import React, { useEffect, useState } from "react";
import "./App.css";
import "./styles/global.css";
import {Menu} from "./components/menu";
import { BestSelling } from "./components/bestSelling";
import { OurJournals } from "./components/Ourjournal";
import SimpleSlider from "./components/simpleSlider";
import MultipleSlider from "./components/multipleSlider";


const App = () => {
  const [footer, setFooter] = useState([]);
  const [menu, setMenu] = useState([]);
  const [products, setProducts] = useState([]);
  const [lienzo, setLienzo] = useState([]);
  const [slider, setSlider] = useState([]);

  const getDataApi = async () => {
    try {
      const responseFooter = await API.utils.footer();
      console.log("[LOG] [ RESPONSE FOOTER ]", responseFooter.data);
      setFooter(responseFooter.data);

      const responseMenu = await API.utils.menu();
      console.log("[LOG] [ RESPONSE MENU ]", responseMenu.data);
      setMenu(responseMenu.data);

      const responseSliders = await API.utils.sliders();
      console.log("[LOG] [ RESPONSE SLIDERS ]", responseSliders.data);
      setSlider(responseSliders.data);

      const responseLienzo = await API.utils.lienzo();
      console.log("[LOG] [ RESPONSE LIENZO ]", responseLienzo.data);
      setLienzo(responseLienzo.data);

      const responseProducts = await API.utils.products();
      console.log("[LOG] [ RESPONSE PRODUCTS ]", responseProducts.data);
      setProducts(responseProducts.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getDataApi();
  }, []);

  return (
    <div class="home-minimal">
      <div id="main">


        <Menu/>

        <div class="canvas-cart js-canvas-cart">
          <div class="canvas-cart__overlay js-close-canvas-cart"></div>

          <div class="canvas-cart__content">
            <div class="canvas-cart__d-flex">
              <div class="canvas-cart__top-and-products">
                <div class="canvas-cart__heading d-flex align-items-center">
                  <h3 class="canvas-cart__h3">Cart (3)</h3>

                  <div class="canvas-cart__close">
                    <a href="#" class="js-close-canvas-cart">
                      <i class="lnil lnil-close"></i>
                    </a>
                  </div>
                </div>

                <ul class="header-cart__items">
                  <li class="cart-item d-flex">
                    <p class="cart-item__image cart-item__image--ratio-100-122">
                      <a href="product.html">
                        <img
                          alt="Image"
                          data-sizes="auto"
                          data-srcset="assets/products/2/28a.jpg 400w,
                      assets/products/2/28a.jpg 800w"
                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          class="lazyload"
                        />
                      </a>
                    </p>

                    <p class="cart-item__details">
                      <a href="product.html" class="cart-item__title">
                        Slim fit modal cotton shirt
                      </a>
                      <span class="cart-item__variant">Grey, M</span>
                      <span class="cart-ietm__price">
                        2 <i>x</i> $113.99
                      </span>
                    </p>

                    <div class="cart-item__quantity">
                      <div class="cart-product__quantity-field">
                        <div class="quantity-field__minus js-quantity-down">
                          <a href="#">-</a>
                        </div>
                        <input
                          type="text"
                          value="1"
                          class="quantity-field__input js-quantity-field"
                        />
                        <div class="quantity-field__plus js-quantity-up">
                          <a href="#">+</a>
                        </div>
                      </div>
                    </div>

                    <p class="cart-item__delete">
                      <a href="#">
                        <i class="lnil lnil-close"></i>
                      </a>
                    </p>
                  </li>

                  <li class="cart-item d-flex">
                    <p class="cart-item__image cart-item__image--ratio-100-122">
                      <a href="product.html">
                        <img
                          alt="Image"
                          data-sizes="auto"
                          data-srcset="assets/products/2/27_1-a.jpg 400w,
                      assets/products/2/27_1-a.jpg 800w"
                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          class="lazyload"
                        />
                      </a>
                    </p>

                    <p class="cart-item__details">
                      <a href="product.html" class="cart-item__title">
                        Suede sport shoes
                      </a>
                      <span class="cart-item__variant">Bold Brown, 40</span>
                      <span class="cart-ietm__price">
                        1 <i>x</i> $45.5
                      </span>
                    </p>

                    <div class="cart-item__quantity">
                      <div class="cart-product__quantity-field">
                        <div class="quantity-field__minus js-quantity-down">
                          <a href="#">-</a>
                        </div>
                        <input
                          type="text"
                          value="1"
                          class="quantity-field__input js-quantity-field"
                        />
                        <div class="quantity-field__plus js-quantity-up">
                          <a href="#">+</a>
                        </div>
                      </div>
                    </div>

                    <p class="cart-item__delete">
                      <a href="#">
                        <i class="lnil lnil-close"></i>
                      </a>
                    </p>
                  </li>

                  <li class="cart-item d-flex">
                    <p class="cart-item__image cart-item__image--ratio-100-122">
                      <a href="product.html">
                        <img
                          alt="Image"
                          data-sizes="auto"
                          data-srcset="assets/products/2/29a.jpg 400w,
                      assets/products/2/29a.jpg 800w"
                          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                          class="lazyload"
                        />
                      </a>
                    </p>

                    <p class="cart-item__details">
                      <a href="product.html" class="cart-item__title">
                        Pebbled crossbody belt bag
                      </a>
                      <span class="cart-ietm__price">
                        1 <i>x</i> $129.99
                      </span>
                    </p>

                    <div class="cart-item__quantity">
                      <div class="cart-product__quantity-field">
                        <div class="quantity-field__minus js-quantity-down">
                          <a href="#">-</a>
                        </div>
                        <input
                          type="text"
                          value="1"
                          class="quantity-field__input js-quantity-field"
                        />
                        <div class="quantity-field__plus js-quantity-up">
                          <a href="#">+</a>
                        </div>
                      </div>
                    </div>

                    <p class="cart-item__delete">
                      <a href="#">
                        <i class="lnil lnil-close"></i>
                      </a>
                    </p>
                  </li>
                </ul>
              </div>

              <div class="canvas-cart__bottom">
                <div class="header-cart__subtotal d-flex">
                  <div class="subtotal__title">Subtotal</div>

                  <div class="subtotal__value">$272.47</div>
                </div>

                <div class="header-cart__action">
                  <a href="checkout.html" class="header-cart__button">
                    Checkout
                  </a>
                  <a href="cart.html" class="header-cart__button">
                    View cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="canvas-menu js-canvas-menu">
          <div class="canvas-menu__overlay js-close-canvas-menu"></div>

          <div class="canvas-menu__content">
            <div class="canvas-menu__close">
              <a href="#" class="js-close-canvas-menu">
                <i class="lnil lnil-close"></i>
                <span>Close</span>
              </a>
            </div>

            <div class="canvas-menu__switchers">
              <div class="canvas-menu__switcher">
                <i class="lnil lnil-chevron-down"></i>
                <select>
                  <option>$ USD</option>
                  <option>EUR</option>
                  <option>CAD</option>
                </select>
              </div>

              <div class="canvas-menu__switcher">
                <i class="lnil lnil-chevron-down"></i>
                <select>
                  <option>ENG</option>
                  <option>POL</option>
                </select>
              </div>
            </div>

            <ul class="canvas-menu__nav">
              <li>
                <a href="index.html" class="canvas-nav__item">
                  Home
                </a>

                <div class="nav__mega-menu">
                  <div class="mega-menu__standard-column">
                    <div class="standard-column__title">Styles</div>

                    <ul class="standard-column__nav">
                      <li>
                        <a href="index.html">Default</a>
                      </li>
                      <li>
                        <a href="index-2.html">Full Width</a>
                      </li>
                      <li>
                        <a href="index-3.html">Modern</a>
                      </li>
                      <li>
                        <a href="index-4.html">
                          Collections{" "}
                          <span class="nav__item-tag nav__item-tag--hot">
                            hot
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="index-5.html">Dark Skin</a>
                      </li>
                      <li>
                        <a href="index-6.html">
                          Classic{" "}
                          <span class="nav__item-tag nav__item-tag--hot">
                            hot
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="index-7.html">
                          Best Selling{" "}
                          <span class="nav__item-tag nav__item-tag--hot">
                            hot
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="index-8.html">Sidebar</a>
                      </li>
                      <li>
                        <a href="index-9.html">Minimal</a>
                      </li>
                      <li>
                        <a href="index-10.html">Shoppable</a>
                      </li>
                    </ul>
                  </div>

                  <div class="mega-menu__standard-column">
                    <div class="standard-column__title">Topic</div>

                    <ul class="standard-column__nav">
                      <li>
                        <a href="index.html">Furniture 1</a>
                      </li>
                      <li>
                        <a href="index.html">Furniture 2 </a>
                      </li>
                      <li>
                        <a href="index.html">
                          Decoration{" "}
                          <span class="nav__item-tag nav__item-tag--new">
                            new
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="index.html">
                          Cosmetic{" "}
                          <span class="nav__item-tag nav__item-tag--new">
                            new
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="index.html">
                          Jewellry{" "}
                          <span class="nav__item-tag nav__item-tag--new">
                            new
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="index.html">Bags</a>
                      </li>
                      <li>
                        <a href="index.html">Shoes</a>
                      </li>
                      <li>
                        <a href="index.html">Gadgets</a>
                      </li>
                      <li>
                        <a href="index.html">Plants</a>
                      </li>
                      <li>
                        <a href="index.html">Perfume</a>
                      </li>
                      <li>
                        <a href="index.html">Single Product</a>
                      </li>
                      <li>
                        <a href="index.html">Wine</a>
                      </li>
                      <li>
                        <a href="index.html">Bakery </a>
                      </li>
                    </ul>
                  </div>

                  <div class="mega-menu__standard-column">
                    <div class="standard-column__title">Brands</div>

                    <div class="menu-brands__items">
                      <div class="menu-brand-item">
                        <a href="#">
                          <img
                            alt="Image"
                            src="assets/images/default/menu_brand_1.png"
                          />
                        </a>
                      </div>

                      <div class="menu-brand-item">
                        <a href="#">
                          <img
                            alt="Image"
                            src="assets/images/default/menu_brand_2.png"
                          />
                        </a>
                      </div>

                      <div class="menu-brand-item">
                        <a href="#">
                          <img
                            alt="Image"
                            src="assets/images/default/menu_brand_3.png"
                          />
                        </a>
                      </div>

                      <div class="menu-brand-item">
                        <a href="#">
                          <img
                            alt="Image"
                            src="assets/images/default/menu_brand_4.png"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a href="shop.html" class="canvas-nav__item">
                  Shop
                </a>

                <div class="nav__mega-menu">
                  <div class="mega-menu__standard-column">
                    <div class="standard-column__title">Shop</div>

                    <ul class="standard-column__nav">
                      <li>
                        <a href="shop.html">Grid 3 Column</a>
                      </li>
                      <li>
                        <a href="shop-2.html">
                          Grid 4 Column{" "}
                          <span class="nav__item-tag nav__item-tag--default">
                            default
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="shop-3.html">Listing</a>
                      </li>
                      <li>
                        <a href="shop-4.html">Collection</a>
                      </li>
                      <li>
                        <a href="shop-5.html">Metro</a>
                      </li>
                      <li>
                        <a href="shop-6.html">
                          Categories{" "}
                          <span class="nav__item-tag nav__item-tag--hot">
                            hot
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="shop-7.html">With Sidebar 1</a>
                      </li>
                      <li>
                        <a href="shop-8.html">With Sidebar 2</a>
                      </li>
                      <li>
                        <a href="shop-9.html">Instagram</a>
                      </li>
                      <li>
                        <a href="shop-10.html">Vertical Menu</a>
                      </li>
                    </ul>

                    <div class="standard-column__title">Product layouts</div>

                    <ul class="standard-column__nav">
                      <li>
                        <a href="product.html">Default</a>
                      </li>
                      <li>
                        <a href="product-layout-2.html">
                          Sticky Info{" "}
                          <span class="nav__item-tag nav__item-tag--hot">
                            hot
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="product-layout-3.html">With Sidebar</a>
                      </li>
                      <li>
                        <a href="product-layout-4.html">Color Background</a>
                      </li>
                      <li>
                        <a href="product-layout-4.html">Vertical Menu</a>
                      </li>
                      <li>
                        <a href="product-layout-4.html">Width 1170</a>
                      </li>
                      <li>
                        <a href="product-layout-4.html">
                          Sticky Info 2{" "}
                          <span class="nav__item-tag nav__item-tag--new">
                            new
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="product-layout-4.html">
                          Sticky Info 3{" "}
                          <span class="nav__item-tag nav__item-tag--new">
                            new
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="product-layout-4.html">
                          Grid Gallery (4 images){" "}
                          <span class="nav__item-tag nav__item-tag--new">
                            new
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="product-layout-4.html">
                          Grid Gallery (5 images){" "}
                          <span class="nav__item-tag nav__item-tag--new">
                            new
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="product-layout-4.html">
                          Sticky Tabs Accordion{" "}
                          <span class="nav__item-tag nav__item-tag--new">
                            new
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="mega-menu__standard-column">
                    <div class="standard-column__title">Product types</div>

                    <ul class="standard-column__nav">
                      <li>
                        <a href="product-type-1.html">Simple</a>
                      </li>
                      <li>
                        <a href="product-type-2.html">Various</a>
                      </li>
                      <li>
                        <a href="product-type-3.html">Colors Swatches</a>
                      </li>
                      <li>
                        <a href="product-type-4.html">Images Swatches</a>
                      </li>
                      <li>
                        <a href="product-type-5.html">Groupped</a>
                      </li>
                      <li>
                        <a href="product-type-6.html">Affiliate</a>
                      </li>
                      <li>
                        <a href="product-type-7.html">Featured Video</a>
                      </li>
                      <li>
                        <a href="product-type-8.html">
                          Guarantee Safe Checkout
                        </a>
                      </li>
                      <li>
                        <a href="product-type-9.html">Countdown Timer</a>
                      </li>
                      <li>
                        <a href="product-type-10.html">
                          Pre-orders{" "}
                          <span class="nav__item-tag nav__item-tag--hot">
                            hot
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="product-type-1.html">On Sale</a>
                      </li>
                      <li>
                        <a href="product-type-1.html">Out of Stock</a>
                      </li>
                      <li>
                        <a href="product-type-10.html">
                          With Button Paypal{" "}
                          <span class="nav__item-tag nav__item-tag--hot">
                            hot
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="product-type-1.html">Bundle</a>
                      </li>
                    </ul>
                  </div>

                  <div class="mega-menu__standard-column">
                    <div class="standard-column__title">Others</div>

                    <ul class="standard-column__nav">
                      <li>
                        <a href="cart.html">Shopping Cart</a>
                      </li>
                      <li>
                        <a href="checkout.html">Checkout</a>
                      </li>
                      <li>
                        <a href="order-complete.html">Order Complete</a>
                      </li>
                      <li>
                        <a href="wishlist.html">Wishlist</a>
                      </li>
                      <li>
                        <a href="cart.html">Order Tracking</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li>
                <a href="product.html" class="canvas-nav__item">
                  Product
                </a>

                <ul class="nav__dropdown-menu">
                  <li>
                    <a href="product.html">
                      Product Layout 1{" "}
                      <span class="nav__item-tag nav__item-tag--default">
                        default
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="product-layout-2.html">Product Layout 2</a>
                  </li>
                  <li>
                    <a href="product-layout-3.html">Product Layout 3</a>
                  </li>
                  <li>
                    <a href="product-layout-4.html">Product Layout 4</a>
                  </li>
                  <li>
                    <a href="product-type-1.html">Product Type 1</a>
                  </li>
                  <li>
                    <a href="product-type-2.html">Product Type 2</a>
                  </li>
                  <li>
                    <a href="product-type-3.html">Product Type 3</a>
                  </li>
                  <li>
                    <a href="product-type-4.html">Product Type 4</a>
                  </li>
                  <li>
                    <a href="product-type-5.html">Product Type 5</a>
                  </li>
                  <li>
                    <a href="product-type-6.html">Product Type 6</a>
                  </li>
                  <li>
                    <a href="product-type-7.html">Product Type 7</a>
                  </li>
                  <li>
                    <a href="product-type-8.html">Product Type 8</a>
                  </li>
                  <li>
                    <a href="product-type-9.html">
                      Product Type 9{" "}
                      <span class="nav__item-tag nav__item-tag--hot">hot</span>
                    </a>
                  </li>
                  <li>
                    <a href="product-type-10.html">
                      Product Type 10{" "}
                      <span class="nav__item-tag nav__item-tag--new">new</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="blog.html" class="canvas-nav__item">
                  Blog
                </a>

                <ul class="nav__dropdown-menu">
                  <li>
                    <a href="blog.html">Blog full width</a>
                  </li>
                  <li>
                    <a href="blog-with-sidebar.html">Blog with sidebar</a>
                  </li>
                  <li>
                    <a href="post.html">Blog post</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" class="canvas-nav__item">
                  Pages
                </a>

                <ul class="nav__dropdown-menu">
                  <li>
                    <a href="404.html">404 Page </a>
                  </li>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="cart.html">Cart</a>
                  </li>
                  <li>
                    <a href="checkout.html">Checkout</a>
                  </li>
                  <li>
                    <a href="coming-soon.html">Coming Soon</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                  <li>
                    <a href="wishlist.html">Wishlist</a>
                  </li>
                </ul>
              </li>
            </ul>

            <div class="canvas-menu__about-and-social">
              <span class="canvas-menu-about__heading">About</span>
              <div class="canvas-menu-about__description">
                The inspiration got from natural, color pastel & activities the
                daily.{" "}
              </div>
              <ul class="canvas-menu__social">
                <li>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <SimpleSlider/>

        <BestSelling/>

        <MultipleSlider/>

        <div className="minimal-tweet">
          <div class="container container--type-4">
            <div class="minimal-tweet__content">
              Indica algo sobre ti, y que te ha parecido este examen
            </div>
            <p>soy una persona muy social y responsable, este examen me parecio un reto ya que tuve que agregar 
              plugins extras y aprender mas cosas que no sabia pero me ayudo bastante a seguir aprendiendo que es lo que me gusta
              y seguir practicando la programación, espero me den la oprtunidad de seguir aprendiendo y aportar mis conocimientos. 
            </p>
            <ul class="minimal-tweet__meta">
              <li>
                <a href="#">@thiago.lfc</a>
              </li>
              <li>posted on 15 Dec, 2022</li>
            </ul>
          </div>
        </div>

        <OurJournals/>
        
        <footer class="footer footer--type-2">
        <div class="container container--type-3">
          <div class="row">
            <div class="col-lg-3 footer__first-column">
              <h5 class="footer__logo">DUROTAN</h5>

              <ul class="footer__address">
                <li>
                  268 Elizaberth Ave Str, Brooklyn,
                  <br />
                  CA, 90025
                </li>
                <li>+0082 561 43 34</li>
                <li>
                  <a href="mailto:support@durotan.com">support@durotan.com</a>
                </li>
              </ul>

              <ul class="footer__socials">
                <li>
                  <a href="https://twitter.com" target="_blank">
                    <i class="lnil lnil-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com" target="_blank">
                    <i class="lnil lnil-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com" target="_blank">
                    <i class="lnil lnil-Instagram"></i>
                  </a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 footer__second-column">
              <h6 class="footer__heading">FAQS</h6>

              <ul class="footer__menu">
                <li>
                  <a href="#">Information</a>
                </li>
                <li>
                  <a href="#">Payment</a>
                </li>
                <li>
                  <a href="#">Shipping</a>
                </li>
                <li>
                  <a href="#">Returns</a>
                </li>
                <li>
                  <a href="#">Gift Card</a>
                </li>
                <li>
                  <a href="#">Guest purchase</a>
                </li>
                <li>
                  <a href="#">Electronic receipt</a>
                </li>
                <li>
                  <a href="#">Terms &amp; Conditions</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 footer__third-column">
              <h6 class="footer__heading">Company</h6>

              <ul class="footer__menu">
                <li>
                  <a href="#">About Durotan</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Our Journals</a>
                </li>
              </ul>
            </div>

            <div class="col-lg-3 footer__fourth-column">
              <h6 class="footer__heading">Newsletter</h6>

              <form class="footer__newsletter">
                <div class="footer__newsletter-description">
                  Be the first to get the latest news about trends, promotions
                  and much more!
                </div>

                <input
                  type="email"
                  class="footer__newsleter-input"
                  placeholder="Enter your mail address"
                />

                <div class="footer__newsletter-privacy-policy">
                  By subscribing, you accept the{" "}
                  <a href="#">Privacy Policy</a>
                </div>

                <button
                  type="submit"
                  class="second-button footer__newsletter-button"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          <div class="copyright">
            <div class="row">
              <div class="col-lg-3 copyright__first-column">
                © 2022 <span>DUROTAN</span>. All rights reserved
              </div>

              <div class="col-lg-6 copyright__payment">
                <span>Accept for</span>{" "}
                <img
                  src="assets/images/default/payment.png"
                  alt="Payment method"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>

        <div class="search-popup js-search-popup">
          <div class="search-popup__close">
            <a href="#" class="js-close-search-popup">
              <i class="lnil lnil-close"></i>
            </a>
          </div>

          <div class="container container--type-4">
            <h5 class="search-popup__title">Search</h5>

            <ul class="search-popup__categories">
              <li>
                <a href="#" class="active">
                  All
                </a>
              </li>
              <li>
                <a href="#">Clothings</a>
              </li>
              <li>
                <a href="#">Shoes</a>
              </li>
              <li>
                <a href="#">Bags</a>
              </li>
              <li>
                <a href="#">Accessories</a>
              </li>
            </ul>

            <form class="search-popup__form">
              <input
                type="text"
                class="search-popup__input"
                placeholder="Search here..."
              />
            </form>

            <div class="search-popups__results">
              <h6 class="search-popup__results-heading">Search results</h6>

              <div class="search-popups__results-products d-flex">
                <div class="result-product">
                  <div class="result-product__image result-product__image--ratio-100-122">
                    <a href="product.html">
                      <img
                        src="assets/products/2/26a.jpg"
                        alt="Product image"
                      />
                    </a>
                  </div>

                  <div class="result-product__name">
                    <a href="product.html">
                      Double-breasted wool Tailored coat
                    </a>
                  </div>

                  <div class="result-product__price">$56.99</div>
                </div>

                <div class="result-product">
                  <div class="result-product__image result-product__image--ratio-100-122">
                    <a href="product.html">
                      <img
                        src="assets/products/2/27_1-a.jpg"
                        alt="Product image"
                      />
                    </a>
                  </div>

                  <div class="result-product__name">
                    <a href="product.html">Slim fit modal cotton shirt</a>
                  </div>

                  <div class="result-product__price">$59.99</div>
                </div>

                <div class="result-product">
                  <div class="result-product__image result-product__image--ratio-100-122">
                    <a href="product.html">
                      <img
                        src="assets/products/2/28a.jpg"
                        alt="Product image"
                      />
                    </a>
                  </div>

                  <div class="result-product__name">
                    <a href="product.html">Wool/Cashmera basic cardigan</a>
                  </div>

                  <div class="result-product__price">$49.5</div>
                </div>

                <div class="result-product">
                  <div class="result-product__image result-product__image--ratio-100-122">
                    <a href="product.html">
                      <img
                        src="assets/products/2/29a.jpg"
                        alt="Product image"
                      />
                    </a>
                  </div>

                  <div class="result-product__name">
                    <a href="product.html">Regular fit striped cotton shirt</a>
                  </div>

                  <div class="result-product__price">$79.99</div>
                </div>

                <div class="result-product">
                  <div class="result-product__image result-product__image--ratio-100-122">
                    <a href="product.html">
                      <img
                        src="assets/products/2/30a.jpg"
                        alt="Product image"
                      />
                    </a>
                  </div>

                  <div class="result-product__name">
                    <a href="product.html">Slim fit modal cotton shity</a>
                  </div>

                  <div class="result-product__price">
                    <span class="result-product__price-new">$79.99</span>

                    <span class="result-product__price-old">$99.99</span>
                  </div>
                </div>
              </div>

              <div class="search-popup__results-action">
                <a href="#" class="fifth-button">
                  All results (12)
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
