import React, { Component } from "react";
import { Link } from "react-router-dom";
import { VscAccount, VscSignOut } from "react-icons/vsc";
import { VscHeart, VscSearch } from "react-icons/vsc";
import { BsHandbag } from "react-icons/bs";
import { Input, InputGroup, InputLeftElement, Button } from "@chakra-ui/react";


import AuthService from "../../services/auth.service";

import EventBus from "../../common/EventBus";

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();
    

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }

    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser } = this.state;
    return (
      <div className="container">
     
        <header className="blog-header py-2 border-bottom">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 pt-1">
              <Link to={"/home"} className="ml-5 text-dark">
                Ritzy Goat
              </Link>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<VscSearch />}
                />
                <Input
                  type="text"
                  focusBorderColor="none"
                  variant="flushed"
                  placeholder="Search a brand or product"
                />
              </InputGroup>
            </div>

            <div className="justify-content-end align-items-center">
              <ul className="nav mr-5 align-items-center">
                <li className="p-3 text-dark">
                  <Link to="/sellWithUs/info">
                    <Button colorScheme="teal" size="xs">
                      Sell with us
                    </Button>
                  </Link>
                </li>

                {currentUser ? (
                  <>
                    <li className="me-2">
                      <Link to="/profile" className="text-dark">
                        <VscAccount />
                        {currentUser.username}
                      </Link>
                    </li>
                    
                    <li className="me-2">
                      <Link to="/obsessions" className="text-dark">
                        <VscHeart />
                        Obsessions
                      </Link>
                    </li>

                    <li className="me-2">
                      <Link to="/basket" className="text-dark">
                        <VscHeart />
                        Basket
                      </Link>
                    </li>

                    <li className="me-2">
                      <Link
                        to="/account"
                        onClick={this.logOut}
                        className="text-dark"
                      >
                        <VscSignOut />
                        Sign Out
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="me-2">
                      <Link to="/account" className="text-dark">
                        <VscAccount />
                        Account
                      </Link>
                    </li>
                    <li className="me-2">
                      <Link to="/obsessions" className="text-dark">
                        <VscHeart />
                        Obsessions
                      </Link>
                    </li>

                    <li className="me-2">
                      <Link to="/basket" className="text-dark">
                        <BsHandbag />
                        Basket
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default NavigationBar;
