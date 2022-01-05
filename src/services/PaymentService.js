import { currentAddress } from "../pages/Checkout";
export const addNewPayment = async (input) => {
  const user = JSON.parse(localStorage.getItem("user"));

  let payment = {
    paymentCard: {
      cardHolderName: input.cardHolderName,
      cardNumber: input.cardNumber,
      expireMonth: input.expireMonth,
      expireYear: input.expireYear,
      cvc: input.cvc,
    },

    shippingAddress: {
      address: currentAddress[0].openAddress,
      zipCode: currentAddress[0].postCode,
      contactName: input.cardHolderName,
      city: currentAddress[0].city.cityName,
      country: "Turkey",
    },
    billingAddress: {
      address: currentAddress[0].openAddress,
      zipCode: currentAddress[0].postCode,
      contactName: input.cardHolderName,
      city: currentAddress[0].city.cityName,
      country: "Turkey",
    },
  };
  console.log(payment);

  const { data } = await fetch("http://localhost:8080/api/payment", {
    method: "POST",
    body: JSON.stringify(payment),
    headers: {
      Authorization: "Bearer " + user.accessToken,
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return data;
};
