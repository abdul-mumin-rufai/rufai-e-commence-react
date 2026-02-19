import { Hero } from "../components";
import { customFetch } from "../utils";
import FeaturedProducts from "../components/FeaturedProducts";


const url = '/products?featured=true';

const FeaturedProductsQuery = {
    queryKey: ['featuredPorducts'],
    queryFn:()=> customFetch(url),
}

export const loader = (queryClient) =>async () => {
    const response = await queryClient.ensureQueryData(FeaturedProductsQuery); 
    const products = response.data.data;
    return { products };
};

export const Landing =()=> {
    return (
        <>
            <Hero />
            <FeaturedProducts />
        </>
    )
}

export default Landing;