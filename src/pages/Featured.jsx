import { ProductCard } from "../components/ProductCard";
import "../styles/FeaturedPage.css";
import "../styles/product-list.css";

export function FeaturedPage({ products, setPage, setPageData }) {
  products = products.slice(0, 8);

  const createProductCard = (product) => {
    return (
      <ProductCard
        product={product}
        setPage={setPage}
        setPageData={setPageData}
      />
    );
  };

  return (
    <>
      <div>
        <div></div>
        <div>
          <h2>Featured Products</h2>
          <div className="product-list">{products.map(createProductCard)}</div>
        </div>
      </div>
    </>
  );
}
