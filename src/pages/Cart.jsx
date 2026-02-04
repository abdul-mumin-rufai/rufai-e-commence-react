import { useSelector } from "react-redux";
import { CartItemsList, CartTotal, SectionTitle } from "../components";
import { Link } from "react-router-dom";

function Cart() {
    // temporal user.
    const user = null;
    // called the numItemInCart state from the cart reducer.
    const numItemInCart = useSelector((state) => state.cartState.numItemInCart);

    if (numItemInCart === 0) {
        return <SectionTitle title='Your cart is empty' />
    }


    return (
        <>
            <SectionTitle title='Your Shopping Cart' />
            <div className="mt-8 grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-8">
                    <CartItemsList />
                </div>
                <div className="lg:col-span-4 lg: pl-4">
                    <CartTotal />
                    {/* logic to show either a user is login or not. */}
                    {user ? <Link to='/checkout' className="btn btn-primary btn-block mt-8">
                        Preceed to checkout
                    </Link> : <Link to='/login' className="btn btn-primary btn-block mt-8">
                        Please login first
                    </Link>}
                </div>
            </div>
        </>
    )
}

export default Cart;