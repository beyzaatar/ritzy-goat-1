import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
//import { useAddress } from "../../contexts/AddressContext"
import { getAddressesAsync } from "../../redux/addresses/addressSlice";
import { getCitiesAsync } from "../../redux/addresses/citiesSlice";
import { getCountiesAsync } from "../../redux/addresses/countiesSlice";
import { getNeighborhoodsAsync } from "../../redux/addresses/neighborhoodsSlice";
import { getAddressTypesAsync } from "../../redux/addresses/addressTypesSlice";
import { addNewAddress } from "../../services/AddressService";

import { BsHouseDoorFill } from "react-icons/bs";
import {
  Input,
  Select,
  Textarea,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

let filtered = [];
function AddNewAddress() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  //state
  const [city, setCity] = useState(0);
  const [county, setCounty] = useState(0);
  const [neighborhood, setNeighborhood] = useState(0);
  const [postCode, setPostCode] = useState("");
  const [openAddress, setOpenAddress] = useState("");
  const [contactName, setContactName] = useState("");
  const [addressName, setAddressName] = useState("");
  const [addressType, setAddressType] = useState(0);

  //const { items, removeFromBasket, emptyBasket} = useBasket();
  //const { isOpen, onOpen, onClose } = useDisclosure();
  //   const initialRef = React.useRef();
  //   const finalRef = React.useRef();

  const addresses = useSelector((state) => state.addresses.addresses);
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
        cityName:city.cityName
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
      contactName:contactName
    };
    await addNewAddress(input);
    console.log(input)
  };

  const updateSubmitForm = (address) => {
    const input = {
      city: {
        id: Number(address.city.id),
        cityName:address.city.cityName
      },
      county: {
        id: Number(address.county.id),
      },

      neighborhood: {
        id: Number(address.neighborhood.id),
      },
      user: {
        id: Number(address.user.id),
      },
      typeOfAddress: {
        id: Number(address.typeOfAddress.id),
      },
      postCode: address.postCode,
      addressName: address.addressName,
      openAddress: address.openAddress,
      contactName:address.user.userName
    };
    console.log(input)
  };

  return (
    <div className="container">
      <div className="row ">
        <div className="col mt-5">
          <div className="card text-center">
            <div className="card-body">
              <div className=" row justify-content-md-center mt-3">
                <BsHouseDoorFill size="40" />
              </div>
              <a href="/" className="btn btn-dark mt-3">
                ADD NEW ADDRESS
              </a>
            </div>
          </div>
          <ul className=" list-group">
            {filtered.map((address) => (
              <li key={address.id} onClick={()=>updateSubmitForm(address)} className="mt-3 list-group-item ">
                <div >
                  <p className="h6">{address.addressName}</p>
                  <p >
                    {address.openAddress}/{address.county.countyName}/
                    {address.city.cityName}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="col-12 col-md-12 col-lg-8 mt-5">
          <div className="h4">YOUR ADDRESS INFORMATION</div>
          <form className="w-50">
            <FormControl>
              <FormLabel>Contact name</FormLabel>
              <Input
                placeholder="Please enter your name and surname"
                onChange={(e) => setContactName(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>City</FormLabel>
              <Select
                placeholder="Please select your city"
                onChange={(e) => setCity(e.target.value)}
                value={city.cityName}
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
                placeholder="Please enter your zip code"
                onChange={(e) => setPostCode(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Address description</FormLabel>
              <Input
                placeholder="Please enter your address name (exp: David's home)"
                onChange={(e) => setAddressName(e.target.value)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Open address</FormLabel>
              <Textarea
                placeholder="Please enter your open address"
                onChange={(e) => setOpenAddress(e.target.value)}
              />
            </FormControl>

            <button type="button" onClick={handleSubmitForm} className="btn btn-dark w-100 mb-5 mt-5">
              SAVE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddNewAddress;
