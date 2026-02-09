import { useSelector } from "react-redux";
import { CheckoutFormInput, SectionTitle, CartTotal } from '../components';

function Checkout() {

    const cartTotal = useSelector((state) => state.cartState.cartTotal);
    if (cartTotal === 0) {
        return <SectionTitle title='your cart is empty'/>
    };
    return (
        <>
            <SectionTitle title='please place your order' />
            <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
                <CheckoutFormInput />
                <CartTotal/>
            </div>
        </>
    )
}

export default Checkout;