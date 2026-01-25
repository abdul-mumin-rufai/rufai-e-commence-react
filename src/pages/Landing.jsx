import { Hero } from "../components";
import { customFetch } from "../utils";
import FeaturedProducts from "../components/FeaturedProducts";


const url = '/products?featured=true';

export async function loader() {
    const response = await customFetch(url);
    const products = response.data.data;
    return { products };
}

function Landing() {
    return (
        <>
            <Hero />
            <FeaturedProducts />
        </>
    )
}

export default Landing;