import React, { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa";
import { useBasket } from "../../contexts/BasketContext";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAddressesAsync } from "../../redux/addresses/addressSlice";
import {
  RadioGroup,
  Stack,
  Radio,
  Image,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
} from "@chakra-ui/react";

import { getCitiesAsync } from "../../redux/addresses/citiesSlice";
import { getCountiesAsync } from "../../redux/addresses/countiesSlice";
import { getNeighborhoodsAsync } from "../../redux/addresses/neighborhoodsSlice";
import { getAddressTypesAsync } from "../../redux/addresses/addressTypesSlice";

let filtered = [];
let currentAddress = {};
function Checkout() {
  const user = JSON.parse(localStorage.getItem("user"));

  const addresses = useSelector((state) => state.addresses.addresses);
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("1");
  //state
  const [city, setCity] = useState(0);
  const [county, setCounty] = useState(0);
  const [neighborhood, setNeighborhood] = useState(0);
  const [postCode, setPostCode] = useState("");
  const [openAddress, setOpenAddress] = useState("");
  const [contactName, setContactName] = useState("");
  const [addressName, setAddressName] = useState("");
  const [addressType, setAddressType] = useState(0);

  useEffect(() => {
    dispatch(getAddressesAsync());
  }, [dispatch]);

  //const { addressItems, removeFromAddress } = useAddress();
  const { items } = useBasket();
  const total = items.reduce((acc, obj) => acc + obj.data.unitPrice, 0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef();
  const finalRef = React.useRef();

  if (user !== null) {
    filtered = addresses.filter((item) => item.user.id === user.id);
  }
  currentAddress = Object(filtered.filter((item) => item.id === Number(value)));

  const addressTypes = useSelector((state) => state.addressTypes.addressTypes);
  const cities = useSelector((state) => state.cities.cities);
  const counties = useSelector((state) => state.counties.counties);
  const neighborhoods = useSelector(
    (state) => state.neighborhoods.neighborhoods
  );

  if (user !== null) {
    filtered = addresses.filter((item) => item.user.id === user.id);
  }

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

  useEffect(() => {
    dispatch(getAddressTypesAsync());
  }, [dispatch]);

  const handleSubmitForm = async () => {
    const input = {
      city: {
        id: Number(city),
      },
      county: {
        id: Number(county),
      },

      neighborhood: {
        id: Number(neighborhood),
      },
      user: {
        id: Number(user.id),
      },
      typeOfAddress: {
        id: Number(addressType),
      },
      postCode: postCode,
      addressName: addressName,
      openAddress: openAddress,
    };
    //await addNewAddress(input);
    //emptyBasket();
    onClose();
  };

  return (
    <div className="container mt-5">
      <div className="row">
        {localStorage.getItem("user") ? (
          <div className="col-12 col-md-12 col-lg-7 mt-5">
            <a href="/addressBook">
              <div className="h6 bg-light p-3 border  row justify-content-center">
                <FaPlus size={20} /> ADD NEW ADDRESS
              </div>
            </a>
            <div>
              <RadioGroup onChange={setValue} value={value}>
                <Stack>
                  {filtered.map((address) => (
                    <div
                      key={address.id}
                      className="mt-3 bg-light border h5 p-3 mt-3"
                    >
                      <div
                        to={`/address/${address.id}`}
                        className="d-flex justify-content-between"
                      >
                        <Radio value={String(address.id)}>
                          <div className="row justify-content-between">
                            <div className="col">{address.addressName}</div>
                            <div className="col">
                              {address.openAddress}/{address.county.countyName}/
                              {address.city.cityName}
                            </div>
                          </div>
                        </Radio>
                        <a href="/addressBook">
                          <button type="button">Edit</button>
                        </a>
                      </div>
                    </div>
                  ))}
                </Stack>
              </RadioGroup>
            </div>
          </div>
        ) : (
          <div className="col mt-5">
            <div className="bg-light p-5 border">
              <p className="h6 row justify-content-left ">INFORMATION</p>
              <hr className=" container row justify-content-center hr-text" />
              <p className="mt-5">
                Please login or register to enjoy ritzy goat privileges or you
                can continue to pay as a guest.
              </p>
                <button type="button" onClick={onOpen} className="btn btn-dark w-100 mt-4">
                  Continue as guest
                </button>
              <Link to={"/account"}>
                <button type="button" className="btn btn-dark w-100 mt-2">
                  Go to account
                </button>
              </Link>
            </div>
          </div>
        )}

        <div className=" col mt-5">
          <div className="bg-light p-5 border">
            <p className="h6 row justify-content-left ">SHOPPING SUMMARY</p>
            <hr className=" container row justify-content-center hr-text" />
            <br></br>

            <div>
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
                {user ? (
                  <Link to={"/checkout/payment"}>
                    <button type="button" className="btn btn-dark w-100">
                      Continue
                    </button>
                  </Link>
                ) : (
                  <button type="button" className="btn btn-dark w-100" disabled>
                    Continue
                  </button>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Modal
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
      </Modal>
    </div>
  );
}

export default Checkout;
export { currentAddress };
