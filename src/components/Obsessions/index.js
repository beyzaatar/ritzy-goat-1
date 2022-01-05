import React from 'react'
import { Button } from '@chakra-ui/react'
//import { Grid, Divider } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
//import { BsFillBagDashFill } from 'react-icons/bs';
import { useFavorite } from '../../contexts/FavoriteContext'
import { FaHeart } from 'react-icons/fa';


function Obsessions() {

    const { favoriteItems, removeFromFavorite } = useFavorite();


    return (
        <div>
            {favoriteItems.length < 1 &&
                <div className='container '>
                    <div className="row justify-content-md-center mt-3 ">
                        < div className="col-20 col-md-20 col-lg-20 bg-light mt-5 me-4 p-5 border">
                            <div className=" row justify-content-md-center mt-3" ><FaHeart size={50} /></div>
                            <strong className=" row justify-content-md-center mt-3">THE PRODUCT IS NOT IN YOUR FAVORITES</strong>
                            <div>
                                <h6 className=" row justify-content-md-center mt-3">
                                    Discover thousands of products from distinguished brands.
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            }

            {favoriteItems.length > 0 && (
                <>
                    <ul className='m-5'>
                        {
                            favoriteItems.map((favoriteItem) => (
                                <li key={favoriteItem.data.id} >
                                    <Link to={`/product/${favoriteItem.data.id}`}>
                                        <div className='container w-50 row justify-content-left'>
                                            <div className="row mt-3">
                                                <div className="col mb-4 "    >
                                                    <Image className='w-75' src='http://res.cloudinary.com/dl39p9dvq/image/upload/v1638872705/lryad81kgtgppd2nlguy.jpg' alt='Dan Abramov' />

                                                </div>
                                                <div className="col">
                                                    <p className="h4 row justify-content-md-left ">
                                                        {favoriteItem.data.productName}
                                                    </p>
                                                    <br></br>
                                                    <p className="h5 row justify-content-md-left ">
                                                        {favoriteItem.data.description}
                                                    </p>
                                                    <br></br>
                                                    <p className="h6 row justify-content-md-left ">
                                                        {favoriteItem.data.unitPrice} $
                                                    </p>
                                                    <br></br>
                                                </div>
                                                <div className="col">

                                                </div>

                                            </div>
                                        </div>

                                    </Link>
                                    <Button onClick={() => removeFromFavorite(favoriteItem.data.id)}>
                                        remove from favorite
                                    </Button>
                                    <hr className=" container w-50 row justify-content-left hr-text" />
                                </li>
                            ))}
                    </ul>

                    <br></br>
                    <br></br>

                    <br></br>
                    <br></br>


                </>
            )}

        </div>

    )
}

export default Obsessions
