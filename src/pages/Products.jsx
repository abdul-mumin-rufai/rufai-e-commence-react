import { Filters,Pagination, ProductsContainer } from "../components";
import { customFetch } from "../utils";

const url = '/products';
export async function loader({ request }) {
    // getting the products params
    const params = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
    //getting the products
    const response = await customFetch(url, {params});
    const products = response.data.data;
    const meta = response.data.meta;
    return { products, meta, params};
};

function Products() {
    return (
        <>
            <Filters />
            <ProductsContainer />
            <Pagination />
        </>
    )
}

export default Products; 