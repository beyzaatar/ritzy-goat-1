import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { postProduct } from "../../../services/ProductsService"
import { Text, Box, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react"
import { Formik } from "formik"

function NewProduct() {
    const queryClient = useQueryClient();
    const newProductMutation = useMutation(postProduct, {
        onSuccess: () => queryClient.invalidateQueries()
    });

    const handleSubmit = async (values, bag) => {
        console.log(values);

        newProductMutation.mutate(values, {
            onSuccess: () => {
                console.log("success")
            }

        })
    };
    return (
        <div className='container'>
            <Text fontSize={"2xl"}>New Product</Text>
            <Formik
                initialValues={{
                    productName: "",
                    category1: " ",
                    category2: " ",
                    category3: " ",
                    colorName: " ",
                    genderName: " ",
                    materialName: " ",
                    sizeName: " ",
                    unitPrice: " ",
                    description: " ",
                    detailedInformation: " "
                }}
            onSubmit={handleSubmit}
            >
                {
                    ({ handleSubmit,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        values,
                        isSubmitting }) =>
                        <>
                            <Box>
                                <Box my={"5"} textAlign={"left"}>
                                    <form onSubmit={handleSubmit}>
                                        <FormControl>
                                            <FormLabel>Product Name</FormLabel>
                                            <Input
                                                name='productName'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.productName}
                                                disabled={isSubmitting}
                                                isInvalid={touched.productName && errors.productName}
                                            />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel>Category 1</FormLabel>
                                            <Input
                                                name='category1'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.category1}
                                                disabled={isSubmitting}
                                            />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel>Category 2</FormLabel>
                                            <Input
                                                name='category2'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.category2}
                                                disabled={isSubmitting}
                                            />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel>Category 3</FormLabel>
                                            <Input
                                                name='category3'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.category3}
                                                disabled={isSubmitting}
                                            />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel>Color Name</FormLabel>
                                            <Input
                                                name='colorName'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.colorName}
                                                disabled={isSubmitting}
                                            />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel>Gender Name</FormLabel>
                                            <Input
                                                name='genderName'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.genderName}
                                                disabled={isSubmitting}
                                            />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel>Material Name</FormLabel>
                                            <Input
                                                name='materialName'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.materialName}
                                                disabled={isSubmitting}
                                            />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel>Size Name</FormLabel>
                                            <Input
                                                name='sizeName'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.sizeName}
                                                disabled={isSubmitting}
                                            />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel>Unit Price</FormLabel>
                                            <Input
                                                name='unitPrice'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.unitPrice}
                                                disabled={isSubmitting}
                                            />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel>Description</FormLabel>
                                            <Textarea
                                                name='description'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.description}
                                                disabled={isSubmitting}
                                            />
                                        </FormControl>
                                        <FormControl>
                                            <FormLabel>Detailed Information</FormLabel>
                                            <Textarea
                                                name='detailedInformation'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.detailedInformation}
                                                disabled={isSubmitting}
                                            />
                                        </FormControl>
                                        <FormControl mt={"4"}>
                                            <Button className='w-100 '

                                                type='submit'
                                                isLoading={isSubmitting}
                                            >
                                                SAVE

                                            </Button>
                                        </FormControl>
                                    </form>
                                </Box>
                            </Box>

                        </>

                }

            </Formik>


        </div>
    )
}

export default NewProduct
