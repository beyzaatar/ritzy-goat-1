import React from "react";
import { VscAccount } from "react-icons/vsc";
import { VscHeart, VscSearch } from "react-icons/vsc";
import { BsHandbag } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Input, InputGroup, InputLeftElement, Button } from "@chakra-ui/react";
import { useBasket } from "../../contexts/BasketContext";
import { useFavorite } from "../../contexts/FavoriteContext";

function RgHeader() {
  const { items } = useBasket();
  const { favoriteItems } = useFavorite();
  return (
    <div class="container">
      <header class="blog-header py-2 border-bottom">
        <div class="row flex-nowrap justify-content-between align-items-center">
          <div class="col-4 pt-1">
            <a
              href="/"
              class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
            >
              <span class="fs-4">Ritzy Goat</span>
            </a>
          </div>

          <div class="col-4 d-flex justify-content-end align-items-center">
            <InputGroup>
              <InputLeftElement pointerEvents="none" children={<VscSearch />} />
              <Input
                type="text"
                focusBorderColor="none"
                variant="flushed"
                placeholder="Search a brand or product"
              />
            </InputGroup>
          </div>

          <div class="col-4 d-flex justify-content-end align-items-center">
            <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
              <li>
                <Link to="/account" className="nav-link text-dark">
                  <VscAccount />
                  Account
                </Link>
              </li>
              <li>
                <Link to="/favorite" className="nav-link text-dark">
                  <VscHeart />
                  Favorites ({favoriteItems.length})
                </Link>
              </li>
              <li>
                <Link to="/basket" className="nav-link text-dark">
                  <BsHandbag />
                  Basket ({items.length})
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}

export default RgHeader;
