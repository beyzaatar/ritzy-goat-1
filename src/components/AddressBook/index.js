import React from "react";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { getAddressesAsync } from "../../redux/addresses/addressSlice";
import { getCitiesAsync } from "../../redux/addresses/citiesSlice";
import { getCountiesAsync } from "../../redux/addresses/countiesSlice";
import { getNeighborhoodsAsync } from "../../redux/addresses/neighborhoodsSlice";
import { useEffect } from "react";
//import { addNewAddress } from "../../services/AddressService";

let filtered = [];
function AddressBook() {
  const dispatch = useDispatch();

  const addresses = useSelector((state) => state.addresses.addresses);
  const cities = useSelector((state) => state.cities.cities);
  const counties = useSelector((state) => state.counties.counties);
  const neighborhoods = useSelector(
    (state) => state.neighborhoods.neighborhoods
  );

  filtered = addresses;
  // if (currentCategory !== 0) {
  //   filtered = products.filter(
  //     (item) => item.categoryLevel1.id === currentCategory
  //   );
  // }

  useEffect(() => {
    dispatch(getAddressesAsync());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCitiesAsync());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCountiesAsync());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getNeighborhoodsAsync());
  }, [dispatch]);

  return (
    <div>
      <Flex align="center" width="full" justifyContent="center">
        <Box pt={5}>
          <Box textAlign="center">
            <Heading>YOUR ADDRESS INFORMATION</Heading>
          </Box>
          <Box my={5} textAlign="left">
            <form>
              <FormControl id="city">
                <FormLabel>CITY</FormLabel>
                <Select placeholder="select city">
                  {cities.map((city) => (
                    <option key={city.id} value={city}>
                      {city.cityName}
                    </option>
                  ))}
                </Select>
              </FormControl>

              <FormControl id="county">
                <FormLabel>COUNTY </FormLabel>
                <Select placeholder="select county">
                  {counties.map((county) => (
                    <option key={county.id} value={county.id}>
                      {county.countyName}
                    </option>
                  ))}
                </Select>
              </FormControl>

              <FormControl id="neighbourhood">
                <FormLabel>NEIGHBOURHOOD</FormLabel>
                <Select placeholder="select neighborhood">
                  {neighborhoods.map((neighborhood) => (
                    <option key={neighborhood.id} value={neighborhood.id}>
                      {neighborhood.neighborhoodName}
                    </option>
                  ))}
                </Select>
              </FormControl>

              <FormControl id="address">
                <FormLabel>ADDRESS</FormLabel>
                <Textarea placeholder="please enter your open address" />
              </FormControl>

              <FormControl id="address-description">
                <FormLabel>ADDRESS NAME</FormLabel>
                <Input placeholder="please enter your address name (exp: David's home)" />
              </FormControl>

              <FormControl id="address-type">
                <FormLabel>ADDRESS TYPE</FormLabel>
                <Select placeholder="select address type">
                  <option value="individual">INDIVIDUAL</option>
                  <option value="corporate">CORPORATE</option>
                </Select>
              </FormControl>
              <Button
                colorScheme="teal"
                mt="10"
                width="full"
                backgroundColor="black"
                className="mt-5"
                type="submit"
                onClick={hand}
              >
                SAVE
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}

export default AddressBook;
