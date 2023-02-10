import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import logo from './logo.png';
import { Link, useNavigate } from "react-router-dom";
import ProductListing from "./Container/ProductListing";
import Searchbar from "./Searchbar";
import SearchInput from "./SearchInput";
 
function Header() {
  const navigate = useNavigate();
  const [image, setImage] = useState([]);
  const [isLoggedin, setIsLoggedin] = useState(false);
  const getUsers = async () => {
    const response = await fetch('https://api.gyros.farm/api/AdminApi/AllProductShop');
    const getUsers = await response.json();
    let data = getUsers.result 
    data.map((res) => {
      res['ImageName'] = "https://api.gyros.farm/Images/" + res.ImageName
    })

    setImage(data)
  }


  const handleLogout = () => {
    localStorage.clear();
    // navigate("/accountlogin")
    navigate("/")
  }


  useEffect(() => {
    getUsers();
  }, []);
  function productDetails(id) {
    console.log("dfghj", id)
    localStorage.setItem("product_id", id)

  }
  const [isOpen, setIsOpen] = useState(false);
  const token = localStorage.getItem('loginToken')

  return (
    <div>
      <div className="bg-green-600 w-full h-6 ">
        <marquee onMouseOver="this.stop();" onMouseOut="this.start();"> <p className="text-white text-sm font-[roboto]">
          <Link to="/BestDeals">
            DEAL OF THE DAY || NO COUPON REQUIRED
          </Link>
        </p></marquee>

      </div>
      <nav className="bg-white border border-green-600 border-b ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className=" flex items-center ">
              <div className=" lg:hidden flex-shrink-0  ">
                <Link to="/">
                  <img
                    className=" logohome"
                    style={{ height: "140px" }}
                    src={logo}
                    alt="Workflow"
                  />
                </Link>
              </div>
              <div className="hidden md:block" style={{ marginLeft: "-1rem" }}>
                <div className="ml-20 flex justify-center space-x-6">
                  <a
                    href="#"
                    className="text-green-600  hover:text-black px-3 py-2 mt-14 md-2  text-base font-medium"

                  >
                    <div class="dropdown ">
                      <a href="#" className=""  >Shop
                        <i class="fas fa-angle-down"></i>
                        <div class="drop-content shopcontent" style={{ textAlign: "center", width: "210px" }}>

                          <div class="row">
                            <div class="col-sm ">
                              <Link to="/Allproducts" style={{ textDecoration: "none" }}>
                                <h1 className='allprodtxt' >All Products</h1>
                              </Link>
                              <Link to="/GiftBoxes" style={{ textDecoration: "none" }}>
                                <h1 className='allprodtxt' >Gift Boxes</h1>
                              </Link>


                              {/* <Link to="/ProductsDetails" style={{ textDecoration: "none" }}>
                                <div >
                                  {image.map((data, index) => {
                                    return (
                                      <h1 onClick={() => productDetails(data.Id)} className="categoryname">{data.CategoryName}</h1>
                                    )
                                  })}
                                </div>
                              </Link> */}
                            </div>
                          </div>


                        </div>
                      </a>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="text-green-600  hover:text-black px-3 py-2 mt-14 rounded-md text-base font-medium"
                  >
                    <div class="dropdown ">
                      <a href="#" className="" >The Revolution
                        <i class="fas fa-angle-down"></i>
                        <div class="drop-content revolution" style={{ textAlign: "center", width: "207px" }}>
                          <div class="row">
                            <div class="col-sm">

                              <Link to="/Farmers" style={{ textDecoration: "none" }}>
                                <h1 className='allprodtxt' href="#">Farmers Book</h1>
                              </Link>

                              <Link to="/Workfarmmers" style={{ textDecoration: "none" }}>

                                <h1 className='allprodtxt' href="#">Work With Farmers</h1>
                              </Link>

                              <Link to="/Colaboration" style={{ textDecoration: "none" }}>
                                <h1 className='allprodtxt' href="#">Collaboration</h1>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="text-green-600  hover:text-black px-3 py-2 mt-14 rounded-md text-base font-medium"
                  >
                    <div class="dropdown">
                      <a href="#" >Engagement
                        <i class="fas fa-angle-down"></i>
                        <div class="drop-content engagecntt" style={{ textAlign: "center", width: "240px" }}>
                          <div class="row">
                            <div class="col-sm">
                              <Link to="/Healthfood" style={{ textDecoration: "none" }}>

                                <h1 className='allprodtxt' href="#">Health and Food</h1>
                              </Link>

                              <Link to="/ExixtingReallife" style={{ textDecoration: "none" }}>
                                <h1 className='allprodtxt' href="#">Existing Real Life Stories</h1>
                              </Link>


                              <Link to="/Testimonial" style={{ textDecoration: "none" }}>

                                <h1 className='allprodtxt' href="#">Testimonials</h1>
                              </Link>

                              <Link to="/FAQ" style={{ textDecoration: "none" }}>
                                <h1 className='allprodtxt' href="#">FAQ's</h1>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </a>

                  <a href="#" className="text-green-600  hover:text-black px-3 py-2 mt-14 rounded-md text-base font-medium" >
                    <Link to="/BestDeals" >
                      BestDeals
                    </Link>
                  </a>

                  <div className="flex-shrink-0">
                    <Link to="/">
                      <img className=" logohome" style={{ height: "140px" }} src={logo} />
                    </Link>
                  </div>

                  <a href="#" className="text-green-600  hover:text-black px-3 py-2 mt-14 rounded-md text-base font-medium"
                  >
                    <div class="dropdown ">
                      <a href="#" style={{ textDecoration: "none" }}  >Track Your Order
                        <i class="fas fa-angle-down"></i>
                        <div class="drop-content shopcontent" style={{ textAlign: "center", width: "210px" }}>

                          <div class="row">
                            <div class="col-sm ">
                              <h1 className='allprodtxt1' ><a href="https://www.delhivery.com/" target="_blank" style={{ textDecoration: "none" }}>Delivery</a></h1>
                              {/* <h1 className='allprodtxt1'  ><a href="https://www.shiprocket.in/shipment-tracking/" target="_blank" style={{ textDecoration: "none" }} >Shiprocket</a></h1> */}
                              <h1 className='allprodtxt1'  ><a href="Orderhistory" style={{ textDecoration: "none" }} >Order History</a></h1>
                            </div>
                          </div>
                        </div> 
                      </a>
                    </div>
                  </a>

                  <a
                    href="#"
                    className="text-green-600  hover:text-black px-3  mt-14 py-2 rounded-md text-base font-medium"  >
                    <Link to="/Ourjourney">
                      Our Journey
                    </Link>
                  </a>

                  <a
                    href="#"
                    className="text-green-600  hover:text-black px-3 mt-14 py-2 rounded-md text-base font-medium"
                  >
                    <div class="dropdown revolution2">
                      <a href="#" >Connect
                        <i class="fas fa-angle-down"></i>
                        <div class="drop-content connn" style={{ textAlign: "center", width: "207px" }}>
                          <div class="row">
                            <div class="col-sm">

                              <Link to="/Career" style={{ textDecoration: "none" }}>

                                <h1 className='allprodtxt' href="#">Career</h1>
                              </Link>

                              <Link to="/Team" style={{ textDecoration: "none" }}>

                                <h1 className='allprodtxt' href="#">Team</h1>
                              </Link>

                              <Link to="/Frenchise" style={{ textDecoration: "none" }}>

                                <h1 className='allprodtxt' href="#">Franchise</h1>
                              </Link>

                              <Link to="/Colaborate" style={{ textDecoration: "none" }}>
                                <h1 className='allprodtxt' href="#">Collaborate with Us</h1>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="text-green-600 mt-14 py-2 rounded-md text-base font-bold"
                  >
                    {/* <Link to="/Loginpage">
                      <i class="far fa-user-circle "></i>
                    </Link> */}

                    <div class="dropdown revolution2 ">
                      <a href="#" >
                        <i class="far fa-user-circle  " ></i>
                        <div class="drop-content connn " style={{ textAlign: "center", width: "207px", color: "green" }}>
                          <div class="row mt-10">
                            <div class="col-sm ">


                              {!token &&
                                <>

                                  <div className="w-full " >
                                    <div className="">
                                      <Link to="/accountlogin">
                                        <div className="font-[popins] text-sm w-6/12 ml-2 -mt-3">Login</div>
                                      </Link>
                                      <Link to="/signuppage">
                                        <div className="font-[popins] text-sm w--6/12 -mt-1 underline mr-12">

                                          Signup Here
                                        </div></Link>
                                    </div>
                                  </div>

                                  <Link to="#" style={{ textDecoration: "none" }}>

                                    <div>
                                      <div className="flex space-x-2 ">
                                        {/* <div className="ml-10 mt-3">
                                      <i class="far fa-user-circle "></i>
                                      </div> */}
                                        <Link to="/accountlogin">
                                          <div className="text-sm font-semibold underline ml-10 -mt-5">My Profile</div>
                                        </Link>
                                      </div>
                                    </div>
                                  </Link>
                                  <Link to="#" style={{ textDecoration: "none" }}>

                                    <div>
                                      <div className="flex space-x-2 ">
                                        {/* <div className="ml-10 -mt-4"></div> */}
                                        <Link to="/orderhistory">
                                          <div className="text-sm font-semibold underline ml-10 -mt-7"> Order History</div>
                                        </Link>
                                      </div>
                                    </div>
                                  </Link>
                                  <Link to="#" style={{ textDecoration: "none" }}>

                                    <div>
                                      <div className="flex space-x-2 ">
                                        {/* <div className="ml-10 -mt-4"></div> */}
                                        <Link to="/GiftBoxes">
                                          <div className="text-sm font-semibold underline ml-10 -mt-9"> Gift Card</div>
                                        </Link>
                                      </div>
                                    </div>
                                  </Link>
                                </>

                              }

                              {token &&
                                <>




                                  <div style={{ textDecoration: "none" }}>

                                    <div>
                                      <div className="flex space-x-2 ">
                                        {/* <div className="ml-10 mt-3">
                                      <i class="far fa-user-circle "></i>
                                      </div> */}
                                        <Link to="/userprofile">
                                          <div className="text-sm font-semibold underline ml-10 -mt-5">My Profile</div>
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                  <Link to="/Career" style={{ textDecoration: "none" }}>

                                    <div>
                                      <div className="flex space-x-2 ">
                                        {/* <div className="ml-10 -mt-4"></div> */}
                                        <Link to="/Orderhistory">
                                          <div className="text-sm font-semibold underline ml-10 -mt-7"> Order History</div>
                                        </Link>
                                      </div>
                                    </div>
                                  </Link>
                                  <Link to="/Career" style={{ textDecoration: "none" }}>

                                    <div>
                                      <div className="flex space-x-2 ">
                                        {/* <div className="ml-10 -mt-4"></div> */}
                                        <Link to="/GiftBoxes">
                                          <div className="text-sm font-semibold underline ml-10 -mt-9"> Gift Card</div>
                                        </Link>
                                      </div>
                                    </div>
                                  </Link>


                                  <div>
                                    <div className="flex space-x-2 ">
                                      {/* <div className="ml-10 -mt-4"></div> */}

                                      <div className="text-sm font-semibold underline ml-8  -mt-5" onClick={handleLogout}> Logout</div>

                                    </div>
                                  </div>
                                </>
                              }






                              {/* <Link to="/Career" style={{ textDecoration: "none" }}>

                                <div>
                                  <div className="flex space-x-2 ">
                                    <div className="ml-10"></div>
                                    <div className="text-sm font-semibold underline">Wishlist</div>
                                  </div>
                                </div>
                              </Link> */}
                              {/* <Link to="/Career" >

                                <div>
                                  <div className="flex space-x-2 ">
                                    <div className="ml-10"></div>
                                    <div className="text-sm font-semibold underline">Rewards</div>
                                  </div>
                                </div>
                              </Link> */}

                              {/* <Link to="/Career" style={{ textDecoration: "none" }}>

                                <div>
                                  <div className="flex space-x-2 ">
                                    <div className="ml-10"></div>
                                    <div className="text-sm font-semibold underline">Logout</div>
                                  </div>
                                </div>
                              </Link> */}


                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="text-green-600  mt-14 py-2 rounded-md text-base font-bold"
                  >
                    <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                      <i class="fas fa-cart-plus"></i>
                    </button>
                    <button type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop" style={{ marginLeft: "20px" }}>
                      <i className="fa fa-search" />
                    </button>

                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                      <div class="offcanvas-header">
                        <h5 id="offcanvasRightLabel">Your Cart</h5>

                        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close">X</button>

                      </div>
                      <div style={{ backgroundColor: "Green" , color: "white" }}>Enjoy Free Shipping on Prepaid Orders</div>
                      <div class="offcanvas-body">
                        <ProductListing />
                      </div>
                    </div>

                  </a>






                  {/* <div className="search-button">
                      <button id="search">
                        <i className="fa fa-search" />
                      </button>
                      <div className="search-popup">
                        <div className="search-bg" />
                        <div className="search-form">
                          <form action="">

                          </form>
                        </div>
                      </div>
                    </div> */}



                  <a
                    href="#"
                    className="text-green-600 mt-14 py-2 rounded-md text-base font-bold"
                  >
                    <div style={{ marginTop: "1rem" }}>
                      <Searchbar />
                    </div>


                  </a>





                  <div class="offcanvas offcanvas-top  -ml-4 fadeShow" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel" style={{height:"108px"}}>
                    <div className="bg-green-600 w-full h-6 ">
                      <marquee onMouseOver="this.stop();" onMouseOut="this.start();"> <p className="text-white text-sm font-[roboto]">
                        <Link to="/BestDeals">
                          DEAL OF THE DAY || NO COUPON REQUIRED
                        </Link>
                      </p></marquee>

                    </div>
                    {/* <div class="form-outline justify-center ml-96 ">
                     
                     <input placeholder="Search Gyros Products..." type="text" id="formControlLg" class="form-control form-control-lg mt-3 " style={{width:"500px"}} />

                    </div> */}
                    <SearchInput/>

                  </div>



                </div>
              </div>
            </div>

            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-green-600 inline-flex items-center justify-center p-2 rounded-md text-green-400 hover:text-white hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6  bg-green-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>

            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >

          {(ref) => (

            <div className=" mobdrop mt-px " id="mobile-menu">

              <div ref={ref} className="px-2 pt-2  space-y-1 sm:px-3">


                <a
                  href="#"
                  className="hover:bg-black-700 text-black block px-3 py-2 rounded-md text-base font-medium"
                >
                  <div class="dropdown shopmobvw ">
                    <a href="#"  >Shop
                      <i class="fas fa-angle-down"></i>
                      <div class="drop-content shopcontent" style={{ textAlign: "center", width: "180px" }}>

                        <div class="row">
                          <div class="col-sm ">
                            <Link to="/Allproducts">
                              <h1 className='allprodtxt' href="#">All Products</h1>
                            </Link>
                          </div>


                          <div class="col-sm">
                            <Link to="/GiftBoxes">
                              <h1 className='allprodtxt' href="#">GiftBoxes</h1>
                            </Link>
                          </div>


                          <div class="col-sm">
                            <Link to="/Aboutproductdetails">
                              <div >
                                {image.map((data, index) => {

                                  // console.log("data",data.id) 
                                  return (
                                    <h1 className="categoryname">{data.CategoryName}</h1>
                                  )
                                })}
                              </div>
                            </Link>
                          </div>

                        </div>


                      </div>
                    </a>
                  </div>
                </a>

                <a
                  href="#"
                  className="text-black  hover:text-black block px-3 py-2 rounded-md text-base font-medium"
                >
                  <div class="dropdown ">
                    <a href="#" className="revol" >The Revolution
                      <i class="fas fa-angle-down"></i>
                      <div class="drop-content" style={{ textAlign: "center", width: "180px" }}>
                        <div class="row">
                          <div class="col-sm">
                            <Link to="/Farmers">

                              <h1 className='allprodtxt' href="#">Work With Farmers</h1>
                            </Link>

                            <Link to="/Colaborate">
                              <h1 className='allprodtxt' href="#">Collaboration</h1>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </a>

                <a
                  href="#"
                  className="text-black  hover:text-black block px-3 py-2 rounded-md text-base font-medium"
                >
                  <div class="dropdown">
                    <a href="#" className="engagemobvw" >Engagement
                      <i class="fas fa-angle-down"></i>
                      <div class="drop-content" style={{ textAlign: "center", width: "180px" }}>
                        <div class="row">
                          <div class="col-sm">
                            <Link to="/Healthfood">

                              <h1 className='allprodtxt' href="#">Health and Food</h1>
                            </Link>

                            <Link to="/ExixtingReallife">
                              <h1 className='allprodtxt' href="#">Existing Real Life Stories</h1>
                            </Link>

                            <Link to="/Farmers">
                              <h1 className='allprodtxt' href="#">Farmers Book</h1>
                            </Link>
                            <Link to="/Testimonial">

                              <h1 className='allprodtxt' href="#">Testimonials</h1>
                            </Link>

                            <Link to="/FAQ">
                              <h1 className='allprodtxt' href="#">FAQ's</h1>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </a>


                <a
                  href="#"
                  className="text-black  hover:text-black block px-3 py-2 rounded-md text-base font-medium"
                >
                  <Link to="/BestDeals" style={{ marginLeft: "0rem" }}>
                    BestDeals
                  </Link>
                </a>
                <a
                  href="https://trackon.in/ " target="_blank"
                  className="text-black  hover:text-black block px-3 py-2 rounded-md text-base font-medium"
                >
                  <div class="dropdown ">
                    <a href="#" style={{ textDecoration: "none", marginLeft: "0rem" }}  >Track Your Order
                      <i class="fas fa-angle-down"></i>
                      <div class="drop-content shopcontent" style={{ textAlign: "center", width: "210px" }}>

                        <div class="row">
                          <div class="col-sm ">

                            <h1 className='allprodtxt1' ><a href="https://trackon.in/" target="_blank" style={{ textDecoration: "none" }}>Trackon</a></h1>
                            <h1 className='allprodtxt1'  ><a href="https://www.shiprocket.in/shipment-tracking/" target="_blank" style={{ textDecoration: "none" }} >Shiprocket</a></h1>

                          </div>
                        </div>


                      </div>
                    </a>
                  </div>
                </a>
                <a
                  href="#"
                  className="text-black  hover:text-black block px-3 py-2 rounded-md text-base font-medium"
                >
                  <Link to="/Ourjourney" style={{ marginLeft: "0rem" }}>
                    Our Journey
                  </Link>
                </a>
                <a
                  href="#"
                  className="text-black hover:text-black block px-3 py-2 rounded-md text-base font-medium"
                >
                  <div class="dropdown revolution2">
                    <a href="#" className="conmobvw">Connect
                      <i class="fas fa-angle-down"></i>
                      <div class="drop-content" style={{ textAlign: "center", width: "150px" }}>
                        <div class="row">
                          <div class="col-sm">

                            <Link to="/Career">

                              <h1 className='allprodtxt' href="#">Career</h1>
                            </Link>

                            <Link to="/Team">

                              <h1 className='allprodtxt' href="#">Team</h1>
                            </Link>

                            <Link to="/Frenchise">

                              <h1 className='allprodtxt' href="#">Frenchise</h1>
                            </Link>

                            <Link to="/Colaborate">

                              <h1 className='allprodtxt' href="#">Collaborate with Us</h1>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </a>
                <a
                  href="#"
                  className="text-green-600  px-3   rounded-md text-sm font-bold flex space-x-2"
                >
                  <i class="far fa-user-circle "></i>
                  <p className="-mt-1">User</p>
                </a>
                <br />
                <a
                  href="#"
                  className="text-green-600   px-3    rounded-md  font-bold flex space-x-2"
                >
                  <i class="fas fa-cart-plus " ></i>
                  <p className="-mt-1">Cart</p>
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
      <hr></hr>
    </div>
  );
}

export default Header;