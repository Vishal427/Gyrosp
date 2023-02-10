import React from 'react';
import './App.css';
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './home';

// import {useDispatch,useSelector} from 'react-redux'



import Aboutproductdetails from './Aboutproductdetails'; 
import Fulldescriptionimage from './Fulldescriptionimage'
import Loginpage from './Loginpage';
import Address from './Address';
// import Popup from './Popup';

import Createaccount from './Createaccount';
import Forgetpass from './Forgetpass';
import Emaillogin from './Emaillogin';
import Mobilelogin from './Mobilelogin';
import Shoppingpage from './Shoppingpaje';
import Privacilinkpg from './Privacilinkpg';
import BestDeals from './BestDeals';
import Allproducts from './Allproducts';
import GiftBoxes from './GiftBoxes';
import Farmers from './Frammers';
import Ourjourney from './Ourjourney';
import Colaborate from './Colaborate';
import Healthfood from './Healthfood';
import ExixtingReallife from './ExistingReallife';
import Farmersbook from './Farmmerbook';
import Testimonial from './Testimonial';
import FAQ from './FAQ';
import Career from './Career';
import Team from './Team';
import Frenchise from './Frenchise';
import Termcondition from './Termcondition';
import Shippingpolicy from './Shippingpolicy';
import Refundpolicy from './Refundpolicy';
import Cancellationpolicy from './Cancellationpolicy';
import ProductsDetails from './ProductsDetails';
 import ScrollTop from './ScrollTop';
import ProductListing from './Container/ProductListing';
import Blog from './Blog';
import Logoicon from './Logoicon';
import Checkoutpage from './Container/Checkoutpage';
// import Whatsapp from './whatsapp';
import ProductComponent from './Container/ProductComponent';
import IncDecCounter from './IncDecCounter'
import Workfarmmers from './Workfarmmers';
import Colaboration from './Colaboration';
import Addaddress from './Addaddress'; 
import Standout from './Standout';
import Productfaq from './Productfaq';
import Searchbar from './Searchbar';
import Orderplaced from './Orderplaced';
import Placeorder from './Placeorder';
import Orderhistory from './Orderhistory';
import AccountLogin from './Accounts/AccountLogin';
import SignupPage from './Accounts/SignupPage';
import Otppage from './Accounts/Otppage';
import Checkoutprice from './Checkoutprice';
import Sitemap from './Sitemap';
import Deliveryestimate from './Deliveryestimate';
import Review from './Review';
import Title from './Title';
import Invoicepage from './Invoicepage'
import Checkkout from './Checkkout';

// import RegistrationPage from './Auth/RegistrationPage';
// import LoginNew from './Auth/LoginNew';
import UserProfile from './Accounts/UserProfile';
import EditProfile from './Accounts/EditProfile';
import Header from './Header';
import Sizebutton from './Sizebutton';
import Paymentsucess from './Paymentsucess'
import Addreview from './Addreview';
import Coupon from './Coupon'
import Newusercoupon from './Newusercoupon'
import CouponList from './CouponList'
import Wallet from './Wallet'
import { OrderSucess } from './OrderSucess';
import { Cancelpopup } from './Cancelpopup';
import { Cancelmessage } from './Cancelmessage';
import { Invoiceupdated } from './Invoiceupdated';
import { Fulldescriptionupdate } from './Fulldescriptionupdate';
import { Walletsucess } from './Walletsucess';
import { Payviawallet } from './Payviawallet';
export default function App() {
  
  return (
<>

<Router>
<div className="App">

  <Routes>
  <Route exact path='/' element={[< Home />]}></Route> 
  <Route exact path='/Newusercoupon' element={<Newusercoupon/>}></Route> 
  <Route exact path='/Checkkout' element={<Checkkout/>}></Route> 
  <Route exact path='/Wallet' element={<Wallet/>}></Route>
  <Route exact path='/Title' element={<Title/>}></Route>
  <Route exact path='/CouponList' element={<CouponList/>}></Route>
  <Route exact path='/Sizebutton' element={<Sizebutton/>}></Route>
  <Route exact path='/Coupon' element={<Coupon/>}></Route>
  <Route exact path='/Aboutproductdetails' element={< Aboutproductdetails />}></Route>
  <Route exact path='/Fulldescriptionimage' element={< Fulldescriptionimage />}></Route>
  <Route exact path='/Invoicepage' element={< Invoicepage />}></Route>
  <Route exact path='/Loginpage' element={< Loginpage />}></Route>
  <Route exact path='/Createaccount' element={< Createaccount />}></Route>
  <Route exact path='/Sitemap' element={<Sitemap/>}></Route>
  <Route exact path='/Blog' element={< Blog />}></Route>
  {/* <Route exact path='/Popup' element={<Popup />}></Route>  */}
  <Route exact path='/Forgetpass' element={< Forgetpass />}></Route>
  <Route exact path='/Emaillogin' element={< Emaillogin />}></Route>
  <Route exact path='/Mobilelogin' element={< Mobilelogin />}></Route>
  <Route exact path='/Shoppingpage' element={< Shoppingpage />}></Route>
  <Route exact path='/Privacilinkpg' element={< Privacilinkpg />}></Route>
  <Route exact path='/BestDeals' element={< BestDeals />}></Route>
  <Route exact path='/Allproducts' element={< Allproducts />}></Route>
  <Route exact path='/GiftBoxes' element={< GiftBoxes />}></Route>
  <Route exact path='/Farmers' element={< Farmers />}></Route>
  <Route exact path='/Ourjourney' element={< Ourjourney />}></Route>
  <Route exact path='/Healthfood' element={< Healthfood />}></Route>
  <Route exact path='/Colaborate' element={< Colaborate />}></Route>
  <Route exact path='/ExixtingReallife' element={< ExixtingReallife />}></Route>
  <Route exact path='/Farmersbook' element={< Farmersbook />}></Route>
  <Route exact path='/Testimonial' element={< Testimonial />}></Route>
  <Route exact path='/FAQ' element={< FAQ />}></Route>
  <Route exact path='/Career' element={< Career />}></Route>
  <Route exact path='/Team' element={< Team />}></Route>
  <Route exact path='/Paymentsucess' element={< Paymentsucess/>}></Route> 
  <Route exact path='/Frenchise' element={< Frenchise/>}></Route>
  <Route exact path='/termcondition' element={< Termcondition/>}></Route>
  <Route exact path='/Shippingpolicy' element={< Shippingpolicy/>}></Route>
  <Route exact path='/Refundpolicy' element={< Refundpolicy/>}></Route>
  <Route exact path='/Cancellationpolicy' element={< Cancellationpolicy/>}></Route>
  <Route exact path='/ProductsDetails' element={< ProductsDetails/>}></Route>
  <Route exact path='/ProductListing' element={< ProductListing/>}></Route>
  <Route exact path='/Logoicon' element={< Logoicon/>}></Route>
   <Route exact path='/Checkoutpage' element={<Checkoutpage/>}></Route> 
   <Route exact path='/ProductComponent' element={<ProductComponent/>}></Route> 
   <Route exact path='/IncDecCounter' element={<IncDecCounter/>}></Route> 
   <Route exact path='/Workfarmmers' element={<Workfarmmers/>}></Route> 
   <Route exact path='/Colaboration' element={<Colaboration/>}></Route> 
   <Route exact path='/Address' element={<Address/>}></Route> 
   <Route exact path='/Addaddress' element={<Addaddress/>}></Route> 
   <Route exact path='/Standout' element={<Standout/>}></Route> 
   <Route exact path='/Productfaq' element={<Productfaq/>}></Route> 
   <Route exact path='/Searchbar' element={<Searchbar/>}></Route>
   <Route exact path='/Orderplaced' element={<Orderplaced/>}></Route> 
   <Route exact path='/Placeorder' element={<Placeorder/>}></Route> 
   <Route exact path='/Orderhistory' element={<Orderhistory/>}></Route> 
   <Route exact path="/accountlogin" element={[<Header/>,<AccountLogin/>]}/>
   <Route path="/signuppage" element={[<Header/>,<SignupPage/>]}/>
   <Route path="/checkoutprice" element={<Checkoutprice/>}/>
   <Route path="/otppage" element={<Otppage/>}/>
   <Route path="/userprofile" element={<UserProfile/>}/>
   <Route path="/editprofile" element={<EditProfile/>}/>
   <Route exact path='/deliveryestimate' element={<Deliveryestimate/>}></Route>
   <Route path="/Review" element={<Review/>}/>
   <Route path="/Addreview" element={<Addreview/>}/>
   <Route path="/Cancelmessage" element={<Cancelmessage/>}/>
   <Route path="/OrderSucess" element={<OrderSucess/>}/>
   <Route path="/Cancelpopup" element={<Cancelpopup/>}/>
   <Route path="/Fulldescriptionupdate" element={<Fulldescriptionupdate/>}/>
   <Route path="/Invoiceupdated" element={<Invoiceupdated/>}/>
   <Route path="/Walletsucess" element={<Walletsucess/>}/>
  <Route path="/Payviawallet" element = {<Payviawallet/>}></Route>
  </Routes> 

  </div>
  <ScrollTop/>
</Router> 

{/* <ScrollButton /> */}
    
    </>

  );
}