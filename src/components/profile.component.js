import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../services/auth.service";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Select,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" },
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }

    const { currentUser } = this.state;

    return (
      <div className="container">
        {this.state.userReady ? (
          <div>
            <Flex align="center" width="full" justifyContent="center">
              <Box pt={10}>
                <Box textAlign="center">
                  <Heading>Personal Info</Heading>
                </Box>
                <Box my={5} textAlign="left">
                  <form>
                    <FormControl my={5} id="first-name">
                      <FormLabel>First name</FormLabel>
                      <Input
                        focusBorderColor="black"
                        placeholder="Please enter your name"
                        size="md"
                        defaultValue={currentUser.username.toUpperCase()}
                      />
                    </FormControl>

                    <FormControl my={5} id="last-name">
                      <FormLabel>Last name</FormLabel>
                      <Input
                        type="email"
                        focusBorderColor="black"
                        placeholder="Please enter your email"
                        size="md"
                        defaultValue="ZAKUTO"
                      />
                    </FormControl>

                    <FormControl my={5}>
                      <FormLabel>Gender</FormLabel>

                      <RadioGroup defaultValue="2">
                        <Stack spacing={4} direction="row">
                          <Radio value="1">Women</Radio>
                          <Radio value="2">Men</Radio>
                          <Radio value="3">Other</Radio>
                        </Stack>
                      </RadioGroup>
                    </FormControl>

                    <FormControl my={5}>
                      <FormLabel>Birth Date</FormLabel>

                      <Select variant="flushed" placeholder="1">
                        <option value="option2"> 2</option>
                        <option value="option3"> 3</option>
                      </Select>

                      <Select variant="flushed" placeholder="January">
                        <option value="option1"> February</option>
                        <option value="option2"> March</option>
                      </Select>

                      <Select variant="flushed" placeholder="2021">
                        <option value="option2"> 2020</option>
                        <option value="option3"> 2019</option>
                      </Select>
                    </FormControl>

                    <FormControl my={5} id="email">
                      <FormLabel>E Mail</FormLabel>
                      <Input
                        focusBorderColor="black"
                        placeholder="Please enter your surname"
                        size="md"
                        defaultValue={currentUser.email}
                      />
                    </FormControl>

                    <FormControl my={5} id="phone">
                      <FormLabel>Phone</FormLabel>
                      <Input
                        focusBorderColor="black"
                        placeholder="Please enter your phone"
                        size="md"
                        defaultValue="123456789"
                      />
                    </FormControl>

                    <FormControl>
                      <br />
                      <button
                        type="button"
                        className="btn btn-outline-dark w-75"
                      >
                        Save
                      </button>
                    </FormControl>
                  </form>
                </Box>
              </Box>
            </Flex>
          </div>
        ) : null}
      </div>
    );
  }
}
