import React from "react";
import { useBasket } from "../../contexts/BasketContext";
import { Image, Divider, Grid, Box } from "@chakra-ui/react";

function CartSummary() {
  const { items } = useBasket();
  const total = items.reduce((acc, obj) => acc + obj.data.unitPrice, 0);

  return (
    <Box margin="10">
      <div className=" container w-100 h-25 p-3">
        <Image
          className=" container w-25 h-100"
          src="http://res.cloudinary.com/dl39p9dvq/image/upload/v1638872705/lryad81kgtgppd2nlguy.jpg"
          alt="Dan Abramov"
        />
        <br></br>
        <p className="h5 row justify-content-md-center ">SHOPPING SUMMARY</p>
        <Divider />
        <Grid templateColumns="repeat(2, 1fr)" gap={2}>
          <Box margin="5">
            <h6 className="row justify-content-md-left ">
              Total Amount (Including VAT)
            </h6>
          </Box>
          <Box margin="5">{total} $</Box>
        </Grid>
        <Grid templateColumns="repeat(2, 1fr)" gap={2}>
          <Box margin="5">
            <h6 className="row justify-content-md-left ">Shipping cost</h6>
          </Box>
          <Box margin="5">0,00 $</Box>
        </Grid>
        <Divider />
        <Grid templateColumns="repeat(2, 1fr)" gap={2}>
          <Box margin="5">
            <h6 className="row justify-content-md-left ">Amount to be paid</h6>
          </Box>
          <Box margin="5">{total} $</Box>
        </Grid>
      </div>
    </Box>
  );
}

export default CartSummary;
