import { FEATURED_PAGE } from "../App";
import { ProductCard } from "../components/ProductCard";
import "../styles/HomePage.css";
import "../styles/product-list.css";

export function HomePage({ products, setPage, setPageData }) {
  products = products.slice(0, 6);

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
          <h2>Products</h2>
          <span>
            <a onClick={() => setPage(FEATURED_PAGE)}>See All</a>
          </span>
          <div className="product-list">{products.map(createProductCard)}</div>
        </div>
      </div>
    </>
  );
}
