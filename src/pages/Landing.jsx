import { Hero } from "../components";
import { customFetch } from "../utils";


const url = '/products?featured=true';

export async function loader() {
    const response = await customFetch(url);
    const featuredProducts = response.data.data;
    return { featuredProducts };
}

function Landing() {
    return (
        <>
            <Hero />
        </>
    )
}

export default Landing;