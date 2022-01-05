import React from "react";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Select,
  Radio, RadioGroup, 
  Stack
} from "@chakra-ui/react";

function PersonalInfo() {
  return (
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
                  defaultValue="Aziz"
                />
              </FormControl>

              <FormControl  my={5} id="last-name">
                <FormLabel>Last name</FormLabel>
                <Input
                  type="email"
                  focusBorderColor="black"
                  placeholder="Please enter your email"
                  size="md"
                  defaultValue="Avcı"
                />
              </FormControl>

              

              <FormControl  my={5}>
                <FormLabel>Gender</FormLabel>

                <RadioGroup defaultValue="2">
                  <Stack spacing={4} direction="row">
                    <Radio value="1">
                      Women
                    </Radio>
                    <Radio value="2">Men</Radio>
                    <Radio value="3">Other</Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>

              <FormControl  my={5}>
                <FormLabel>Birth Date</FormLabel>

                <Select variant='flushed' placeholder="1">
                 
                  <option value="option2"> 2</option>
                  <option value="option3"> 3</option>
                </Select>

                <Select variant='flushed'  placeholder="January">
                  <option value="option1"> February</option>
                  <option value="option2"> March</option>
                </Select>

                <Select variant='flushed'  placeholder="2021">
                  <option value="option2"> 2020</option>
                  <option value="option3"> 2019</option>
                </Select>
              </FormControl>

              <FormControl  my={5} id="email">
                <FormLabel>E Mail</FormLabel>
                <Input
                  focusBorderColor="black"
                  placeholder="Please enter your surname"
                  size="md"
                  defaultValue="aziz@gmail.com"
                />
              </FormControl>

              <FormControl  my={5} id="phone">
                <FormLabel>Phone</FormLabel>
                <Input
                  focusBorderColor="black"
                  placeholder="Please enter your phone"
                  size="md"
                  defaultValue="+905462236894"
                />
              </FormControl>

              <FormControl>
                <br />
                <button type="button" className="btn btn-outline-dark w-75">
                  Save
                </button>
              </FormControl>
            </form>
          </Box>
        </Box>
      </Flex>
    </div>
  );
}

export default PersonalInfo;
