import { redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { customFetch } from "../utils";
import {SectionTitle, ComplexPagination, OrderList} from '../components';


const ordersQuery = (params, user) => {
    return {
        queryKey: ['orders', user.username, params.page ? parseInt(params.page) : 1],
        queryFn: ()=> customFetch.get('/orders', {
                params, headers: {
                    Authorization: `Bearer ${user.token}`
                }
            }),
}
   
}
export const loader = (store, queryClient) => async ({ request }) => {
    const user = store.getState().userState.user;

    if (!user) {
        toast.warn('log in to view your orders');
        return redirect('/login');
    }
    
    const params = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
    
    try {
        const response = await queryClient.ensureQueryData(ordersQuery(params,user))
        return {orders:response.data.data, meta:response.data.meta}// list of orders
        
    } catch (error) {
        const errorMessage = error?.response?.data?.error?.message || 'error ocuired while processing your orders'
        toast.error(errorMessage);
        if (error?.response?.status === 401 || 403) //undefined or invalid request
            return redirect('/login');
        return null;
    }
};

export const Orders=()=> {
    const { meta } = useLoaderData();
    if (meta.pagination.total < 1) {
        return <SectionTitle title='You do not have orders yet!!! Place your orders now.'/>
    }
    return (
        <>
            <SectionTitle title='Your orders' />
            <OrderList />
            <ComplexPagination />
        </>
    );
}

export default Orders;