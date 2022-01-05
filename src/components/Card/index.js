import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Card({item}) {
  const property = {
    imageUrl: "https://picsum.photos/200/300",
    imageAlt: "Rear view of modern home with pool",
    beds: 3,
    baths: 2,
    title: "Modern home in city center in the heart of historic Los Angeles",
    formattedPrice: "$1,900.00",
    reviewCount: 34,
    rating: 3,
  };


  return (
    
    <div>
      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        p="5"
      >
        <Link to={`/product/${item.id}`}>
          <Image src={property.imageUrl} alt={property.imageAlt} />
        </Link>

        <Box p="3">
          <Box d="flex" fontWeight="bold" alignItems="baseline" className=" h5  row justify-content-md-left">
          {item.productName}
          </Box>
          <Box mt="1" fontWeight="semiBold" as="h4" lineHeight="tight" className="   row justify-content-md-left">
            {item.description}
          </Box>
          <Box mt="1" fontWeight="Bold" as="h4" lineHeight="tight" className=" h5  row justify-content-md-left">
            {item.unitPrice} $
          </Box>
          {/* <Button colorScheme="teal" size="xs">
            Add To Cart
          </Button> */}
        </Box>
      </Box>
    </div>
    
  );
}

export default Card;
