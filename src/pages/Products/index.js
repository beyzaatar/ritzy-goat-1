import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductsAsync } from "../../redux/products/productsSlice";
import { useEffect } from "react";
import Filters from "../../components/Filters/index";
import { getProductImagesAsync } from "../../redux/productImages/productImagesSlice";
import { Grid } from "@chakra-ui/react";
import Card from "../../components/Card";
import { Divider } from "@chakra-ui/react";

let filtered = [];

function Products() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);
  const currentCategory = useSelector(
    (state) => state.products.currentCategory1
  );

  filtered = products;
  if (currentCategory !== 0) {
    filtered = products.filter(
      (item) => item.categoryLevel1.id === currentCategory
    );
  }

  useEffect(() => {
    dispatch(getProductsAsync());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getProductImagesAsync());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="row justify-content-md-center mt-3 ">
        <div className="col-20 col-md-20 col-lg-20 bg-light mt-3 me-4 p-5 border">
          <Filters />
          <Divider />

          <Grid templateColumns="repeat(3, 1fr)" gap={3}>
            {filtered.map((product) => (
              <div
                className="col-20 col-md-20 col-lg-20 bg-white mt-5 me-4 p-5 border"
                key={product.id}
              >
                <Card item={product} />
              </div>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Products;
