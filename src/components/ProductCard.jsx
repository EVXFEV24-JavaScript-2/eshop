import { PRODUCT_PAGE } from "../App";

export function ProductCard({ product, setPage, setPageData }) {
  const navigateToProduct = () => {
    setPageData({ productId: product.id });
    setPage(PRODUCT_PAGE);
  };

  return (
    <div className="home-product-card" onClick={navigateToProduct}>
      <img src={product.thumbnail} width="90px" height="90px" />
      <h3>{product.title}</h3>
      <span>{product.category}</span>
    </div>
  );
}
