import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchProductDetail } from "../../services/ProductsService";
import Gallery from "../../components/Gallery/index";
import {
  useToast,
  
} from "@chakra-ui/react";
import { BiHeart } from "react-icons/bi";
import { useBasket } from "../../contexts/BasketContext";
import { useFavorite } from "../../contexts/FavoriteContext";

function ProductDetail() {
  const toast = useToast();
  
  const position = "top-right";
  const { id } = useParams();
  const { addToBasket } = useBasket();
  const { addToFavorite } = useFavorite();
  const { isLoading, error, data } = useQuery(["productDetail", id], () =>
    fetchProductDetail(id)
  );
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  //const findBasketItem=items.find((item)=>item.id===id);

  return (
    <div className="container">
      <div className="col-20 col-md-20 col-lg-20 bg-light mt-3 me-4 p-5 border">
        <div className="container">
          <div className="row justify-content-left">
            <div className="col-6">
              <Gallery />
            </div>
            <div className="col-5">
              <p className="h2 row justify-content-left ">
                {data.data.productName}
              </p>
              <h5 className=" row justify-content-left ">
                {data.data.description}
              </h5>
              <br></br>
              <p className="h5 row justify-content-left ">
                {data.data.unitPrice} $
              </p>
              <br></br>
              <p className="h5 row justify-content-md-left ">
                Color:{data.data.color.colorName}
              </p>
              <br></br>
              <p className="h5 row justify-content-md-left ">Select Size:</p>
              <button
                type="button"
                className="h5 row justify-content-md-left btn btn-link"
              >
                Size Chart
              </button>
              <br></br>

              <div className=" justify-content-left">
                <span className="border mb-5 mr-5 p-2">34</span>
                <span className="border mb-5 mr-5 p-2">34</span>
                <span className="border mb-5 mr-5 p-2">34</span>
                <span className="border mb-5 mr-5 p-2">34</span>
                <br></br>
                <br></br>
                <span className="border mb-5 mr-5 p-2">34</span>
                <span className="border mb-5 mr-5 p-2">34</span>
                <span className="border mb-5 mr-5 p-2">34</span>
              </div>
              <br></br>
              <button
                type="button"
                className="btn btn-dark w-100 "
                onClick={() => {
                  addToBasket(data);

                  toast({
                    title: "Added to Cart",
                    description: "The product has been added to your cart.",
                    status: "success",
                    duration: 1000,
                    isClosable: true,
                    position: position,
                  });
                }}
              >
                Add To Basket
              </button>
              <br></br>
              <br></br>
              <button
                type="button"
                className="btn btn-outline-dark w-100 "
                onClick={() => {
                  addToFavorite(data);
                  toast({
                    title: "Added to Favorites",
                    description:
                      "The product has been added to your favorites.",
                    status: "success",
                    duration: 1000,
                    isClosable: true,
                    position: position,
                  });
                }}
              >
                <div>
                  <BiHeart
                    className="btn-group btn-group-justified"
                    size={20}
                  />
                </div>
                <strong>Add to Favorites</strong>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

/* <div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
                <div class="btn-group me-2" role="group" aria-label="First group">
                  <button type="button" class="btn btn-outline-secondary"><strong>XXS</strong></button>
                  <button type="button" class="btn btn-outline-secondary"><strong>XS</strong></button>
                  <button type="button" class="btn btn-outline-secondary"><strong>S</strong></button>
                  <button type="button" class="btn btn-outline-secondary"><strong>M</strong></button>
                  <button type="button" class="btn btn-outline-secondary"><strong>L</strong></button>
                </div>
              </div>
              <div class="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
                <div class="btn-group me-2" role="group" aria-label="First group">
                  <button type="button" class="btn btn-outline-secondary"><strong>XL</strong></button>
                  <button type="button" class="btn btn-outline-secondary"><strong>2XL</strong></button>
                  <button type="button" class="btn btn-outline-secondary"><strong>3XL</strong></button>

                </div>
              </div> */
