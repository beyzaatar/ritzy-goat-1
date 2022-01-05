import React from "react";
import {
  Image,
  Button,
  // Modal,
  // ModalOverlay,
  // ModalContent,
  // ModalHeader,
  // ModalFooter,
  // ModalBody,
  // ModalCloseButton,
  // useDisclosure,
  // FormControl,
  // FormLabel,
  // Input,
  // Select,
  // Textarea,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useBasket } from "../../contexts/BasketContext";
import { BsFillBagDashFill } from "react-icons/bs";

// import validationSchema from "./validations";
import { addNewAddress } from "../../services/AddressService";

import { useSelector, useDispatch } from "react-redux";

import { useEffect } from "react";

let filtered = [];
function Basket() {
  const user = JSON.parse(localStorage.getItem("user"));
  //state
  // const [city, setCity] = useState(0);
  // const [county, setCounty] = useState(0);
  // const [neighborhood, setNeighborhood] = useState(0);
  // const [postCode, setPostCode] = useState("");
  // const [openAddress, setOpenAddress] = useState("");
  // const [contactName, setContactName] = useState("");
  // const [addressName, setAddressName] = useState("");
  // const [addressType, setAddressType] = useState(0);

  const { items, removeFromBasket, emptyBasket } = useBasket();
  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const initialRef = React.useRef();
  // const finalRef = React.useRef();

  const total = items.reduce((acc, obj) => acc + obj.data.unitPrice, 0);
  const addresses = useSelector((state) => state.addresses.addresses);
  // const addressTypes = useSelector((state) => state.addressTypes.addressTypes);
  // const cities = useSelector((state) => state.cities.cities);
  // const counties = useSelector((state) => state.counties.counties);
  // const neighborhoods = useSelector(
  //   (state) => state.neighborhoods.neighborhoods
  // );

  if (user !== null) {
    filtered = addresses.filter((item) => item.user.id === user.id);
  }

  // useEffect(() => {
  //   dispatch(getAddressesAsync());
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getCitiesAsync());
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getCountiesAsync());
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getNeighborhoodsAsync());
  // }, [dispatch]);

  // useEffect(() => {
  //   dispatch(getAddressTypesAsync());
  // }, [dispatch]);

  // const handleSubmitForm = async () => {
  //   const input = {
  //     city: {
  //       id: Number(city),
  //     },
  //     county: {
  //       id: Number(county),
  //     },

  //     neighborhood: {
  //       id: Number(neighborhood),
  //     },
  //     user: {
  //       id: Number(user.id),
  //     },
  //     typeOfAddress: {
  //       id: Number(addressType),
  //     },
  //     postCode: postCode,
  //     addressName: addressName,
  //     openAddress: openAddress,
  //   };
  //   await addNewAddress(input);
  //   emptyBasket();
  //   onClose();
  // };

  return (
    <div>
      {items.length < 1 && (
        <div className="container ">
          <div className="row justify-content-md-center mt-3 ">
            <div className="col-20 col-md-20 col-lg-20 bg-light mt-5 me-4 p-5 border">
              <div className=" row justify-content-md-center mt-3">
                <BsFillBagDashFill size={50} />
              </div>
              <strong className=" row justify-content-md-center mt-3">
                THE PRODUCT IS NOT IN YOUR BASKET
              </strong>
              <div>
                <h6 className=" row justify-content-md-center mt-3">
                  Discover thousands of products from distinguished brands.
                </h6>
              </div>
            </div>
          </div>
        </div>
      )}

      {items.length > 0 && (
        <>
          <div className="row mt-2">
            <div className="col ">
              <ul className="m-5 ">
                {items.map((item, index) => (
                  <li key={index} className="m-3 ">
                    <Link to={`/product/${item.data.id}`}>
                      <div className="  row justify-content-left">
                        <div className="row mt-3">
                          <div className="col mb-4 ">
                            <Image
                              src="http://res.cloudinary.com/dl39p9dvq/image/upload/v1638872705/lryad81kgtgppd2nlguy.jpg"
                              alt="Dan Abramov"
                            />
                          </div>
                          <div className="col">
                            <p className="h4 row justify-content-md-left ">
                              {item.data.productName}
                            </p>
                            <br></br>
                            <p className="h5 row justify-content-md-left ">
                              {item.data.description}
                            </p>
                            <br></br>
                            <p className="h6 row justify-content-md-left ">
                              {item.data.unitPrice} $
                            </p>
                            <br></br>
                          </div>
                          <div className="col"></div>
                        </div>
                      </div>
                    </Link>
                    <Button onClick={() => removeFromBasket(item.data.id)}>
                      remove from basket
                    </Button>
                    <br></br>
                    <br></br>
                    <hr className=" container row justify-content-left hr-text" />
                  </li>
                ))}
              </ul>
            </div>

            <div className=" col">
              <div className="  w-75 bg-light mt-1 me-4 p-5 border">
                <p className="h6 row justify-content-left ">SHOPPING SUMMARY</p>
                <hr className=" container row justify-content-center hr-text" />
                <br></br>

                <div className="">
                  <ul>
                    <li className="d-flex justify-content-between">
                      <span>TOTAL AMOUNT (INCLUDING VAT)</span>
                      <span>
                        <strong>{total}</strong>
                      </span>
                    </li>
                    <li className="d-flex justify-content-between">
                      <span>Total Discount Amount</span>
                      <span>
                        <strong>0 $</strong>
                      </span>
                    </li>
                    <li className="d-flex justify-content-between">
                      <span>Shipping cost</span>
                      <span>
                        <strong>0 $</strong>
                      </span>
                    </li>
                    <br></br>
                    <hr className=" container row justify-content-center hr-text" />
                    <li className="d-flex justify-content-between">
                      <span>Amount to be paid</span>
                      <span>
                        <strong>{total}</strong>
                      </span>
                    </li>
                    <br></br>
                    <Link to={"/checkout/address"}>
                      <button type="button" className="btn btn-dark w-100">
                        Continue
                      </button>
                    </Link>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Basket;

/* <Modal
  initialFocusRef={initialRef}
  finalFocusRef={finalRef}
  isOpen={isOpen}
  onClose={onClose}
>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Please enter your address</ModalHeader>
    <ModalCloseButton />
    <ModalBody pb={6}>
      <FormControl>
        <FormLabel>Contact name</FormLabel>
        <Input
          ref={initialRef}
          placeholder="Please enter your name and surname"
          onChange={(e) => setContactName(e.target.value)}
        />
      </FormControl>

      <FormControl>
        <FormLabel>City</FormLabel>

        <Select
          ref={initialRef}
          placeholder="Please select your city"
          onChange={(e) => setCity(e.target.value)}
        >
          {cities.map((city) => (
            <option key={city.id} value={city.id}>
              {city.cityName}
            </option>
          ))}
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>County</FormLabel>
        <Select
          ref={initialRef}
          placeholder="Please select your county"
          onChange={(e) => setCounty(e.target.value)}
        >
          {counties.map((county) => (
            <option key={county.id} value={county.id}>
              {county.countyName}
            </option>
          ))}
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>Neighborhood</FormLabel>
        <Select
          ref={initialRef}
          placeholder="Please select your neighborhood"
          onChange={(e) => setNeighborhood(e.target.value)}
        >
          {neighborhoods.map((neighborhood) => (
            <option key={neighborhood.id} value={neighborhood.id}>
              {neighborhood.neighborhoodName}
            </option>
          ))}
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>Address Type</FormLabel>

        <Select
          ref={initialRef}
          placeholder="Please select your address type"
          onChange={(e) => setAddressType(e.target.value)}
        >
          {addressTypes.map((addressType) => (
            <option key={addressType.id} value={addressType.id}>
              {addressType.addressType}
            </option>
          ))}
        </Select>
      </FormControl>

      <FormControl>
        <FormLabel>Zip code</FormLabel>
        <Input
          ref={initialRef}
          placeholder="Please enter your zip code"
          onChange={(e) => setPostCode(e.target.value)}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Address description</FormLabel>
        <Input
          ref={initialRef}
          placeholder="Please enter your address name (exp: David's home)"
          onChange={(e) => setAddressName(e.target.value)}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Open address</FormLabel>
        <Textarea
          ref={initialRef}
          placeholder="Please enter your open address"
          onChange={(e) => setOpenAddress(e.target.value)}
        />
      </FormControl>
    </ModalBody>

    <ModalFooter>
      <Button colorScheme="blue" mr={3} onClick={handleSubmitForm}>
        Save
      </Button>
      <Button onClick={onClose}>Cancel</Button>
    </ModalFooter>
  </ModalContent>
</Modal>; */
