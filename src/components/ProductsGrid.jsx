import { useLoaderData, Link } from "react-router-dom";
import { formatPrice } from "../utils";


const ProductsGrid = () => {
  const { featuredProducts } = useLoaderData(); 

  return (
    <div className="pt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {featuredProducts.map((product) => {
        const { title, price, image } = product.attributes;
        return <Link key={product.id} to={`/products/${product.id}`} className="card w-full
        hover:shadow-2xl transition duration-300">
          <figure className="flex flex-col items-center px-2 pt-2">
            <img src={image} alt={title} className="rounded-xl h-64 md:h-48 w-full object-cover" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title capitalize tracking-wider">
              {title}
            </h2>
            <span className="text-auto">{ formatPrice(price)}</span>
          </div>
        </Link>
      })}
    </div>
  )
}

export default ProductsGrid;