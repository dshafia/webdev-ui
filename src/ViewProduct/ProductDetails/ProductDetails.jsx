import React from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import './ProductDetails.css';
import { SlHandbag } from 'react-icons/sl';
import { productsListData } from '../../Data/productsdata';

const ProductDetails = ({ pid }) => {
    console.log('imageId', pid);
    const navigate = useNavigate();
    return (<>
        {
            productsListData.map((img) => {
                if (pid == img.id) {
                    return (
                        <>
                            <div className='prod-cont'>
                                <div className='prod-title'>{img.title}</div>
                                <label className='prod-date'>{img.type}</label>
                                <div className='prod-price'>${img.price}</div>
                                <div className='prod-image'>
                                    <img style={{ border: '1px solid black' }} src={`${img.img1}`} height='100px' width='70px' alt='product image' />
                                </div>
                                <Button variant="dark" onClick={() => navigate('/products')} >Go back</Button>
                            </div>
                        </>
                    )
                }
            })
        }
    </>
    )
}

export default ProductDetails