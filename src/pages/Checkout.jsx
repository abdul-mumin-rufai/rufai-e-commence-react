import { useSelector } from "react-redux";
import { CheckoutFormInput, SectionTitle, CartTotal } from '../components';
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";


// redirect the user to the login page if they are not logged in and trying to access the checkout page.
export const loader = (store) => () => {
    const user = store.getState().userState.user;
    if (!user) {
        toast.warn('login is required to access the checkout page.');
        return redirect('/login');
    }
    return null;
 }
 export const Checkout =()=> {

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