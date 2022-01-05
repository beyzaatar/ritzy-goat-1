import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "react-image-gallery/styles/css/image-gallery.css";

// Authorization importing 
import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Profile from "./components/profile.component";
import BoardUser from "./components/board-user.component";
import BoardModerator from "./components/board-moderator.component";
import BoardAdmin from "./components/board-admin.component";

// RG importing
import Account from "./pages/Account/index";
import Products from "./pages/Products/index";
import ProductDetail from "./pages/ProductDetail/index";
import MyPurchases from "./components/MyPurchases/index";
import MySales from "./components/MySales/index";
import Obsessions from "./components/Obsessions/index";
import Calendar from "./pages/Calendar/index";
// import SellWithUsInfo from "./pages/SellWithUsInfo/index";
// import SellWithUsSelectPiece from "./pages/SellWithUsSelectPiece/index";
// import SellWithUsMethod from "./pages/SellWithUsMethod/index";
// import SellWithUsSet from "./pages/SellWithUsSet/index";
import Menus from "./components/Menus/index";
import Basket from "./pages/Basket/index";
import Payment from "./pages/Payment/index";
import AddNewAddress from "./components/AddNewAddress/index";
import AuthVerify from "./common/auth-verify";
import NavigationBar from "./components/NavigationBar/index";
import Checkout from "./pages/Checkout/index";

//Admin importing
import Admin from "./pages/Admin";
import AdminHome from "./pages/Admin/AdminHome/index"
import AdminOrder from "./pages/Admin/AdminOrder";
import AdminProduct from "./pages/Admin/AdminProduct";
import AdminUser from "./pages/Admin/AdminUser";
import AdminProductDetail from "./pages/Admin/AdminProductDetail";
import NewProduct from "./pages/Admin/AdminProduct/NewProduct"

//Sell with us importing
import SellWithUsInfo from "./pages/SellWithUs/SellWithUsInfo/index";
import SellWithUsMethod from "./pages/SellWithUs/SellWithUsMethod/index";
import SellWithUsPackingList from "./pages/SellWithUs/SellWithUsPackingList/index"
import SellWithUsConsignments from "./pages/SellWithUs/SellWithUsConsignments/index"
import SellWithUsConfirmation from "./pages/SellWithUs/SellWithUsConfirmation/index"
import SellWithUsPaymentOptions from "./pages/SellWithUs/SellWithUsPaymentOptions/index"
import SellWithUsVerify from "./pages/SellWithUs/SellWithUsVerify/index"
import SellWithUsSiteCredit from "./pages/SellWithUs/SellWithUsSiteCredit/index"
import SellWithUsSiteCreditConfirmation from "./pages/SellWithUs/SellWithUsSiteCreditConfirmation/index"
import SellWithUsDirectDeposit from "./pages/SellWithUs/SellWithUsDirectDeposit/index"
import SellWithUsDirectDepositVerify from "./pages/SellWithUs/SellWithUsdirectDepositVerify";

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavigationBar />
        <Menus />

        <div>
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />

            {/* RG ROUTES  */}
            <Route path="/account" component={Account} />
            <Route path="/products" exact component={Products} />
            <Route path="/product/:id" exact component={ProductDetail} />
            <Route path="/account" exact component={Account} />
            <Route path="/myPurchases" exact component={MyPurchases} />
            <Route path="/mySales" exact component={MySales} />
            <Route path="/favorites" exact component={Obsessions} />
            <Route path="/request/appointment" exact component={Calendar} />
           
            <Route path="/basket" exact component={Basket} />
            <Route path="/checkout/address" exact component={Checkout} />
            <Route path="/checkout/payment" exact component={Payment} />
            <Route path="/addressBook" exact component={AddNewAddress} />
            
            {/*ADMIN ROUTES */}
            <Route path="/admin" exact component={Admin} />
            <Route path="/adminHome" exact component={AdminHome}/>
            <Route path="/adminOrder" exact component={AdminOrder}/>
            <Route path="/adminProduct" exact component={AdminProduct}/>
            <Route path="/adminUser" exact component={AdminUser}/>
            <Route path="/adminProductDetail/:id" exact component={AdminProductDetail}/>
            <Route path="/newProduct" exact component={NewProduct}/>

          {/*SELL WITH US routing */}
          <Route path="/sellWithUs/info" exact component={SellWithUsInfo}/>
          <Route path="/sellWithUs/method" exact component={SellWithUsMethod} />
          <Route path="/sellWithUs/packingList" exact component={SellWithUsPackingList} />
          <Route path="/sellWithUs/consignments" exact component={SellWithUsConsignments} />
          <Route path="/sellWithUs/confirmation" exact component={SellWithUsConfirmation} />
          <Route path="/sellwithUs/paymentOptions" exact component={SellWithUsPaymentOptions} />
          <Route path="/sellWithUs/verify" exact component={SellWithUsVerify} />
          <Route path="/sellWithUs/siteCredit" exact component={SellWithUsSiteCredit} />
          <Route path="/sellWithUs/siteCreditConfirmation" exact component={SellWithUsSiteCreditConfirmation} />
          <Route path="/sellWithUs/DirectDeposit" exact component={SellWithUsDirectDeposit} />
          <Route path="/sellWithUs/DirectDepositVerify" exact component={SellWithUsDirectDepositVerify} />
            
          </Switch>
        </div>

        <AuthVerify logOut={this.logOut} />
      </div>
    );
  }
}

export default App;
