import SectionTitle from "./SectionTitle";
import ProductsGrid from "./ProductsGrid";

const FeaturedProducts = () => {
  return (
      <div className="container mx-auto px-4 py-8">
          <SectionTitle title="Featured Products" />
          <ProductsGrid />
      </div>
  )
}

export default FeaturedProducts;