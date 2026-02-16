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
    console.log(response);
    
    const products = response.data.data;
    return { products };
};

function Landing() {
    return (
        <>
            <Hero />
            <FeaturedProducts />
        </>
    )
}

export default Landing;