import React from 'react'
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { fetchProductDetail } from "../../../services/ProductsService"
import { Text, Box, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react"
import { Formik } from "formik"
function AdminProductDetail() {
    const { id } = useParams();
    const { isLoading, error, data } = useQuery(["productDetail", id], () => fetchProductDetail(id))
    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    const handleSubmit = () => {
        console.log("submitted");
    };
    return (
        <div className='container'>
            <Text fontSize={"2xl"}>Edit</Text>
            <Formik
                initialValues={{
                    productName: data.data.productName,
                    category1: data.data.categoryLevel1.categoryName,
                    category2: data.data.categoryLevel2.categoryName,
                    category3: data.data.categoryLevel3.categoryName,
                    colorName: data.data.color.colorName,
                    genderName: data.data.gender.genderName,
                    materialName: data.data.material.materialName,
                    sizeName: data.data.size.sizeName,
                    unitPrice: data.data.unitPrice,
                    description: data.data.description,
                    detailedInformation:data.data.detailedInformation
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
                                                Update

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

export default AdminProductDetail
