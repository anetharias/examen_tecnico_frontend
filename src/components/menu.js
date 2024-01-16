import React, {useEffect, useState} from "react";
import API from "../service/api";



export const Menu = () => {

    const [menu, setMenu] = useState([]);

    const getDataApi = async () => {
        try {
         
          const responseMenu = await API.utils.menu();
          console.log("[LOG] [ RESPONSE MENU ]", responseMenu.data);
          setMenu(responseMenu.data);
    
          
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      useEffect(() => {
        getDataApi();
      }, []);

    return ( 
        <header class="header header--type-7">
        <div class="header__promo-bar">
          <a href="#">
            <i class="lnil lnil-tag"></i> Sign up for our newsletter and
            receive <span>15% OFF</span> your first scent purchase!
          </a>
        </div>
    
        <div class="container container--type-5">
          <div class="header__container d-flex align-items-center">
            <div class="header__mobile-menu">
              <div class="mobile-menu__open">
                <a href="#" class="js-open-mobile-menu">
                  <i class="lnil lnil-menu"></i>
                </a>
              </div>
    
              <div class="mobile-menu js-mobile-menu">
                <div class="mobile-menu__overlay js-close-mobile-menu"></div>
    
                <div class="mobile-menu__content">
                  <div class="mobile-menu__close">
                    <a href="#" class="js-close-mobile-menu">
                      <i class="lnil lnil-close"></i>
                    </a>
                  </div>
    
                  <h3 class="mobile-menu__logo">DUROTAN</h3>
    
                  <ul class="mobile-menu__nav">
                    <li class="mobile-menu__dropdown">
                      <a href="index.html">Home</a>
                      <ul class="mobile-menu__dropdown-menu js-mobile-menu-dropdown-menu">
                        <li>
                          <a href="index.html">Home Page 1</a>
                        </li>
                        <li>
                          <a href="index-2.html">Home Page 2</a>
                        </li>
                        <li>
                          <a href="index-3.html">Home Page 3</a>
                        </li>
                        <li>
                          <a href="index-4.html">Home Page 4</a>
                        </li>
                        <li>
                          <a href="index-5.html">Home Page 5</a>
                        </li>
                        <li>
                          <a href="index-6.html">Home Page 6</a>
                        </li>
                        <li>
                          <a href="index-7.html">Home Page 7</a>
                        </li>
                        <li>
                          <a href="index-8.html">Home Page 8</a>
                        </li>
                        <li>
                          <a href="index-9.html">Home Page 9</a>
                        </li>
                        <li>
                          <a href="index-10.html">Home Page 10</a>
                        </li>
                      </ul>
                      <div class="mobile-menu__dropdown-btn js-mobile-menu-dropdown-btn">
                        <span class="lnil lnil-chevron-down"></span>
                      </div>
                    </li>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li class="mobile-menu__dropdown">
                      <a href="shop.html">Shop</a>
                      <ul class="mobile-menu__dropdown-menu js-mobile-menu-dropdown-menu">
                        <li>
                          <a href="shop.html">Shop Page </a>
                        </li>
                        <li>
                          <a href="product.html">Shop Details</a>
                        </li>
                        <li>
                          <a href="cart.html">Cart Page</a>
                        </li>
                      </ul>
                      <div class="mobile-menu__dropdown-btn js-mobile-menu-dropdown-btn">
                        <span class="lnil lnil-chevron-down"></span>
                      </div>
                    </li>
                    <li class="mobile-menu__dropdown">
                      <a href="404.html">Pages</a>
                      <ul class="mobile-menu__dropdown-menu js-mobile-menu-dropdown-menu">
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
                      <div class="mobile-menu__dropdown-btn js-mobile-menu-dropdown-btn">
                        <span class="lnil lnil-chevron-down"></span>
                      </div>
                    </li>
                    <li class="dropdown">
                      <a href="blog.html">News</a>
                      <ul class="mobile-menu__dropdown-menu js-mobile-menu-dropdown-menu">
                        <li>
                          <a href="blog.html">Blog 1</a>
                        </li>
                        <li>
                          <a href="blog-with-sidebar.html">Blog 2</a>
                        </li>
                        <li>
                          <a href="post.html">Blog Single</a>
                        </li>
                      </ul>
                      <div class="mobile-menu__dropdown-btn js-mobile-menu-dropdown-btn">
                        <span class="lnil lnil-chevron-down"></span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
    
            <h1 class="header__logo">
              <a href="index.html">DUROTAN</a>
            </h1>
    
            <ul class="header__nav">
              {menu.map(category => (<> <li> <a href="index.html" class="nav__item">
              {category.category.name}
                </a>  </li>  </>))}
              <li>
                <a href="index.html" class="nav__item">
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
                <a href="shop.html" class="nav__item">
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
                  </div>
    
                  <div class="mega-menu__standard-column">
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
    
                  <div class="mega-menu__banner">
                    <img
                      alt="Image"
                      data-sizes="auto"
                      data-srcset="assets/images/default/megamenu_promo.jpg 362w,
                  assets/images/default/megamenu_promo.jpg 724w"
                      src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
                      class="lazyload"
                    />
                  </div>
                </div>
              </li>
              <li>
                <a href="product.html" class="nav__item">
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
                      <span class="nav__item-tag nav__item-tag--hot">
                        hot
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="product-type-10.html">
                      Product Type 10{" "}
                      <span class="nav__item-tag nav__item-tag--new">
                        new
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="blog.html" class="nav__item">
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
                <a href="#" class="nav__item">
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
    
            <ul class="header__right">
              <li>
                <a href="#" class="js-open-popup-search">
                  <i class="lnil lnil-search-alt"></i>
                </a>
              </li>
              <li>
                <a href="account.html">
                  <i class="lnil lnil-user"></i>
                </a>
              </li>
              <li class="header__cart">
                <a href="cart.html" class="js-open-canvas-cart">
                  <i class="lnil lnil-cart"></i>
                  <span>2</span>
                  <p class="cart__total-price">$225.00</p>
                </a>
              </li>
              <li class="header__canvas-menu">
                <a href="#" class="js-open-canvas-menu">
                  <i class="lnil lnil-menu"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      
      )
}

 
