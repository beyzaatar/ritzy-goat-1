import React from 'react'
import { MdOutlineArrowBackIos } from 'react-icons/md';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import {
    NumberInputField,
    Input,
    NumberInput,
    Grid,
    FormControl,
    FormLabel,
    Select,
    Divider,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    
    Box,
 

} from '@chakra-ui/react'
import { Link } from 'react-router-dom';

function SellWithUsDirectDeposit() {
    return (
        <div className='container w-100 h-100 p-5 '>
            <main>
                <Link to={"/sellWithUs/DirectDepositVerify"}> <MdOutlineArrowBackIos className="btn-group btn-group-left" size={25} /></Link>
                <div className='container w-100 h-75 p-1 '>
                    <p className="h2 row justify-content-md-center ">Direct Deposit</p>
                </div>

                <br></br>
                <div className='container w-50 h-100 p-2'>
                    <form>
                        <p className="h5 row justify-content-md-left ">1.Bank Account Information</p>

                        <div className="mb-3">
                            <FormLabel for="exampleInputEmail1" className="form-label">IBAN NUMBER *</FormLabel>
                            <NumberInput focusBorderColor='black' >
                                <NumberInputField placeholder="TR__ ____ ____ ____ ____ ____ __" />
                            </NumberInput>
                        </div>
                        <div className="mb-3">
                            <FormLabel for="exampleInputPassword1" className="form-label">NAME SURNAME OF THE ACCOUNT OWNER *</FormLabel>
                            <Input focusBorderColor='black' placeholder="Name-Surname" />
                        </div>

                        {/* <Grid templateColumns='repeat(3, 1fr)' gap={3}>
                            <FormControl id="category-1-id">
                                <FormLabel>MONTH *</FormLabel>
                                <NumberInput focusBorderColor='black' >
                                    <NumberInputField placeholder="AA" />
                                </NumberInput>
                            </FormControl>
                            <FormControl id="category-2-id">
                                <FormLabel>YEAR *</FormLabel>
                                <NumberInput focusBorderColor='black' >
                                    <NumberInputField placeholder="YY" />
                                </NumberInput>
                            </FormControl>

                            <FormControl id="category-3-id">
                                <FormLabel>CVV *</FormLabel>
                                <NumberInput focusBorderColor='black' >
                                    <NumberInputField placeholder="_ _ _" />
                                </NumberInput>

                            </FormControl>
                        </Grid> */}
                        <br></br>
                        <p className="h5 row justify-content-md-left ">2. Security Information</p>
                        <h3>
                            We require this information to verify your account,
                            ensure security and comply with federal regulations.
                            Please provide your Legal Name, Date of Birth and
                            last four digits of your Turkish Identity Number.
                            The legal name you enter must match the name
                            associated with your Turkish Identity Number & Date of Birth.
                        </h3>
                        <br></br>


                        <Grid templateColumns='repeat(2, 1fr)' gap={3}>
                            <FormControl id="category-1-id">
                                <FormLabel>Legal first name</FormLabel>
                                <Input focusBorderColor='black' placeholder="Name" />
                            </FormControl>
                            <FormControl id="category-2-id">
                                <FormLabel>Legal last name</FormLabel>
                                <Input focusBorderColor='black' placeholder="Surname" />
                            </FormControl>
                        </Grid>
                        <br></br>
                        <FormLabel>Date of Birth (MM/DD/YYYY)</FormLabel>
                        <Grid templateColumns='repeat(3, 1fr)' gap={3}>
                            <FormControl id="month-id">
                                <Select placeholder=' ' focusBorderColor='black'>
                                    <option value='option1'> 01</option>
                                    <option value='option2'> 02</option>
                                    <option value='option3'> 03</option>
                                    <option value='option3'> 04</option>
                                    <option value='option3'> 05</option>
                                    <option value='option3'> 06</option>
                                    <option value='option3'> 07</option>
                                    <option value='option3'> 08</option>
                                    <option value='option3'> 09</option>
                                    <option value='option3'> 10</option>
                                    <option value='option3'> 11</option>
                                    <option value='option3'> 12</option>

                                </Select>
                            </FormControl>
                            <FormControl id="day-id">
                                <Select placeholder=' ' focusBorderColor='black'>
                                    <option value='option1'> 01</option>
                                    <option value='option2'> 02</option>
                                    <option value='option3'> 03</option>
                                    <option value='option3'> 04</option>
                                    <option value='option3'> 05</option>
                                    <option value='option3'> 06</option>
                                    <option value='option3'> 07</option>
                                    <option value='option3'> 08</option>
                                    <option value='option3'> 09</option>
                                    <option value='option3'> 10</option>
                                    <option value='option3'> 11</option>
                                    <option value='option3'> 12</option>
                                </Select>
                            </FormControl>

                            <FormControl id="year-id">
                                <Select placeholder=' ' focusBorderColor='black'>
                                    <option value='option1'> 1990</option>
                                    <option value='option2'> 1991</option>
                                    <option value='option3'> 1992</option>
                                    <option value='option3'> 1993</option>
                                    <option value='option3'> 1994</option>
                                    <option value='option3'> 1995</option>
                                </Select>

                            </FormControl>
                        </Grid>
                        <br></br>
                        <div className="mb-3">
                            <FormLabel for="exampleInputEmail1" className="form-label">
                                Last four digits of your TC* (required)
                            </FormLabel>
                            <NumberInput focusBorderColor='black' >
                                <NumberInputField placeholder="_ _ _ _" />
                            </NumberInput>
                        </div>
                        <button type="submit" className="btn btn-dark w-full w-100">Submit</button>
                        <br></br>
                    </form>
                    <br></br>
                    <br></br>
                    <Divider></Divider>
                    <br></br>

                    <Accordion allowMultiple>
                        <AccordionItem>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton>
                                            <Box className="h5" flex='1' textAlign='left'>
                                                Q: Why does The RitzyGoat need this information?
                                            </Box>
                                            {isExpanded ? (
                                                <AiOutlineMinus fontSize='20px' />
                                            ) : (
                                                <AiOutlinePlus fontSize='20px' />
                                            )}
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        A: This is a new process put in place for your security and to comply
                                        with federal regulations. Please update your details as soon as possible
                                        to avoid interruption to your payments.
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>
                    </Accordion>

                    <br></br>
                    <Divider/>
                    <br></br>

                    <Accordion allowMultiple>
                        <AccordionItem>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton>
                                            <Box className="h5" flex='1' textAlign='left'>
                                                Q: How will my information be used?
                                            </Box>
                                            {isExpanded ? (
                                                <AiOutlineMinus fontSize='20px' />
                                            ) : (
                                                <AiOutlinePlus fontSize='20px' />
                                            )}
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        A: Your information will be used to verify your
                                        consignor account payment details. See our Terms
                                        of Service for more details.
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>
                    </Accordion>

                    <br></br>
                    <Divider/>
                    <br></br>

                    <Accordion allowMultiple>
                        <AccordionItem>
                            {({ isExpanded }) => (
                                <>
                                    <h2>
                                        <AccordionButton>
                                            <Box className="h5" flex='1' textAlign='left'>
                                                Q: What happens if I don’t provide this information?
                                            </Box>
                                            {isExpanded ? (
                                                <AiOutlineMinus fontSize='20px' />
                                            ) : (
                                                <AiOutlinePlus fontSize='20px' />
                                            )}
                                        </AccordionButton>
                                    </h2>
                                    <AccordionPanel pb={4}>
                                        A: If you do not provide this information,
                                        we will not be able to verify your account
                                        and process your consignor payments.
                                    </AccordionPanel>
                                </>
                            )}
                        </AccordionItem>
                    </Accordion>
                    <br></br>

                    <p className=" row justify-content-md-center ">Need help? Contact us at</p>
                    <a href='https://mail.google.com/mail/u/0/?pli=1#inbox?compose=DmwnWrRnZNCfwqJrwcRHwXnLBwlsvLSqrbSXFGVVWpBDlLCZsPSwdCPppSRfWknBRmvtSQnStlgQ'><u  className="h6 row justify-content-md-center ">beyza.atar@farmerscaravan.com</u></a>

                </div>


            </main >
        </div >
    )
}

export default SellWithUsDirectDeposit
