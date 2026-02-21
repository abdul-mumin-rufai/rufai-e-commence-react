import { Form, redirect } from "react-router-dom";
import FormInput from "./FormInput";
import SubmitButton from "./SubmitButton";
import { customFetch, formatPrice } from "../utils";
import { clearCart } from "../featuresCart/cartSlice";
import { toast } from "react-toastify";



export const action = (store, queryClient) => async ({request}) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);
    const user = store.getState().userState.user;
    const { cartItems, numItemsInCart, orderTotal } = store.getState().cartState;

    const data = {
        name,
        address,
        chargeTotal: orderTotal,
        orderTotal: formatPrice(orderTotal),
        cartItems,
        numItemsInCart
    }

    try {
        const response = await customFetch.post('/orders', { data: data }, {
            headers: {
                Authorization:`Bearer ${user.token}`
            }
        });
        queryClient.removeQueries(['orders']); // remove previous query when new order is made.

        store.dispatch(clearCart());
        toast.success('orders place sucessfully');
        return redirect('/orders');
        
    } catch (error) {
        const errorMessage = error?.response?.data?.error?.message || 'error ocuired while processing your orders'
        toast.error(errorMessage);
        if (error?.response?.status === 401 || 403) //undefined or invalid request
            return redirect('/login');
        return null;
    }
};

const CheckoutFormInput = () => {
  return (
      <Form method="POST" className="flex flex-col gap-y-4">
          <h4 className="font-medium text-xl capitalize">
              provider your shipping information
          </h4>
          <FormInput label='first name' name='name' type='text' />
          <FormInput label='address' name='address' type='text' />
          <div className="mt-4">
              <SubmitButton text='Place Your Order'/>
          </div>
      </Form>
  )
}

export default CheckoutFormInput;