import { Link } from 'react-router-dom';
import { useState } from 'react';
import { formatPrice, customFetch, generateAmountOption } from '../utils';
import { useLoaderData } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { addItem } from '../featuresCart/cartSlice';

const singleProductsQuery = (id) => {
    return {
        queryKey: ['singleProducts', id],
        queryFn:()=> customFetch(`/products/${id}`),
    }
}

export const loader = (queryClient) =>async ({params}) => {
    const response = await queryClient.ensureQueryData(singleProductsQuery(params.id));
    const product = response.data.data;
    return { product };

};


export const SingleProduct =()=> {
    const { product } = useLoaderData();
    const { image, title, price, description, colors, company } = product.attributes;
    const cedisAmount = formatPrice(price);
    const [productColor, setProductColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);
    

    function handleAmount(e) {
        setAmount(parseInt(e.target.value));
    };
    // variable for the reducer dispatch.
    const dispatch = useDispatch();

    // payload for the action
    const cartProduct = {
        cartID: product.id + productColor,
        productID: product.id,
        image,
        title,
        price,
        productColor,
        company,
        amount,
    }
    
    // function to add items to cart. payload describe the action ie more info of the action.
    function addToCart() { 
        dispatch(addItem({product:cartProduct}))
    };


    return (
        <section>
            <div className='text-md breadcrumbs'>
                <ul>
                    <li>
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/products'>
                            Products
                        </Link>
                    </li>
                </ul>
            </div>
            {/* PRODUCT */}
            <div className='mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16'>
                {/* IMAGE */}
                <img src={image} alt={title} className='w-96 h-96 object-cover rounded-lg lg:w-full' />
                {/* PRODUCT INFO */}
                <div>
                    <h1 className='capitalise text-3xl font-bold'>{title}</h1>
                    <h4 className='text-xl text-neutral-content font-bold mt-2'>{company}</h4>
                    <p className='mt-3 text-xl'>{cedisAmount}</p>
                    <p className='mt-6 leading-8'>{description}</p>
                    {/*  COLORS */}
                    <div className='mt-6'>
                        <h4 className='text-md font-medium tracking-wider capitalize'>
                            colors
                        </h4>
                        <div className="mt-2">
                            {
                                colors.map((color) => {
                                    return <button
                                        key={color} type='button' className={`badge w-6 h-6 mr-2 
                                        ${color === productColor && 'border-2 border-accent'}`}
                                        style={{ backgroundColor: color }}
                                        onClick={() => setProductColor(color)}
                                    >

                                    </button>
                                })
                            }
                        </div>
                    </div>
                    {/* AMOUNT */}
                    <div className="form-control w-auto max-w-xs">
                        <label className='label' htmlFor='amount'>
                            <h4 className='text-md font-medium tracking-wider capitalize'>
                                amount
                            </h4>
                        </label>
                        <select className='select select-primary select-bordered select-md'
                            id="amount" value={amount} onChange={handleAmount}>
                            {generateAmountOption(7)}
                        </select>
                    </div>
                    {/* CART BUTTON */}
                    <div className="mt-10">
                        <button
                            className='btn btn-primary btn-md capitalize' onClick={addToCart}
                        >
                            add to bag
                        </button>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default SingleProduct;  