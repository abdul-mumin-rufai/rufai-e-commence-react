import Filters from "../components/Filters";
import Pagination from "../components/Pagination";
import ProductsContainer from "../components/ProductsContainer";
import { customFetch } from "../utils";

const url = '/products';
export async function loader({ request }) {
    const response = await customFetch(url);
    const products = response.data.data;
    const meta = response.data.meta;
    return { products, meta };
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