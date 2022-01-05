import React from 'react'
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchProductImages } from '../../services/ProductsService';
import ImageGallery from 'react-image-gallery'

function Gallery({ productId }) {
    const { id } = useParams();
    const { isLoading, error, data } = useQuery(["productImage", id], () => fetchProductImages(id))
    if (isLoading) return 'Loading...'

    if (error) return 'An error has occurred: ' + error.message

    const images=data.data.map((image) => ({ original: image.imageUrl }))
    return (
        <div>
            <ImageGallery items={images} />
        </div>
    )
}

export default Gallery
