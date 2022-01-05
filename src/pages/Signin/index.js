import React from "react";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Signin() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleUserName = (value) => {
    setUserName(value);
  };

  const handlePassword = (value) => {
    setPassword(value);
  };

  const sendRequest = () => {
    fetch(`http://localhost:8080/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName: userName,
        password: password,
      }),
    })
      .then((res) => {
        res.json();
      })
      .then((result) => {
        localStorage.clear();
        localStorage.setItem("tokenKey", result.message);
        localStorage.setItem("currentUser", result.userId);
        localStorage.setItem("userName", userName);
      })

      .catch((err) => console.log(err));
  };

  const handleButton = () => {
    sendRequest();
  };

  return (
    <div>
      <Flex align="center" width="full" justifyContent="center">
        <Box pt={10}>
          <Box textAlign="center">
            <Heading>Login</Heading>
          </Box>
          <Box my={5} textAlign="left">
            <form>
              <FormControl id="user-name">
                <FormLabel>User name</FormLabel>
                <Input
                  name="UserName"
                  placeholder="User Name"
                  onChange={(i) => handleUserName(i.target.value)}
                />
              </FormControl>

              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={(i) => handlePassword(i.target.value)}
                />
              </FormControl>

              
                <Button
                  colorScheme="teal"
                  mt="10"
                  width="full"
                  type="submit"
                  onClick={() => handleButton("login")}
                >
                  LOGIN
                </Button>
              
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}

export default Signin;
