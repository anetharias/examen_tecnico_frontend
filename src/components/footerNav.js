import React from "react";


export const footerNav = () => {

    return(
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
    )
}