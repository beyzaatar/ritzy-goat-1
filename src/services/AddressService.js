export const addNewAddress = async (input) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const { data } = await fetch("http://localhost:8080/api/addresses/add", {
    method: "POST",
    body: JSON.stringify(input),
    headers: {
      Authorization: "Bearer " + user.accessToken,
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return data;
};
