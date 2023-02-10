import React from "react";
import Loginpage from "./Loginpage";
export default function Logoicon() {
    return(
        <>

<div>
            <ul class="contactlogo ">
              <li>
                <button class="btn btn-link" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                  <i class="far fa-user-circle navlogo"></i>
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                  <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasRightLabel"></h5>
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div class="offcanvas-body">
                    <Loginpage />
                  </div>
                </div>
              </li>

              <li className="shopingcartl">

                <button class="btn btn-link" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight5" aria-controls="offcanvasRight">
                  <i class="fas fa-cart-plus navlogo1"></i>
                </button>

                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight5" aria-labelledby="offcanvasRightLabel">
                  <div class="offcanvas-header">
                    <h3 class="offcanvas-title" id="offcanvasRightLabel"></h3>

                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div class="offcanvas-body">
                    < Loginpage />
                  </div>
                </div>

              </li>
            </ul>
          </div>
        
        </>
    )
}