import { Link } from 'react-router-dom';
import { useState } from 'react';
import { formatPrice, customFetch } from '../utils';
import { useLoaderData } from 'react-router-dom';



export async function loader({params}) { 
    const response = await customFetch(`/products/${params.id}`);
    const singleProduct = response.data.data;
    return { singleProduct };

};
function SingleProduct() {


    return (
        <>
            <div>
                <p className='text-3xl font-bold capitalize'>this is the single product page</p>
            </div>
            

        </>
    )
}

export default SingleProduct;  