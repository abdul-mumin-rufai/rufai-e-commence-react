import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { customFetch } from "../utils";

export const loader = (store) => async ({ request }) => {
    const user = store.getState().userState.user;

    if (!user) {
        toast.warn('log in to view your orders');
        return redirect('/login');
    }
    
    const params = Object.fromEntries([...new URL(request.url).searchParams.entries()]);

    try {
        const response = await customFetch.get('/orders', {
            params, headers: {
                Authorization: `Bearer ${user.token}`
            }
        });
        return {orders:response.data.data, meta:response.data.meta}
        
    } catch (error) {
        const errorMessage = error?.response?.data?.error?.message || 'error ocuired while processing your orders'
        toast.error(errorMessage);
        if (error?.response?.status === 401 || 403) //undefined or invalid request
            return redirect('/login');
        return null;
    }
};

function Orders() {

    return (
        <h1 className="text-3xl">
            Orders
        </h1>
    )
}

export default Orders;