import { useEffect, useState } from "react";
import "./App.css";
import { FeaturedPage } from "./pages/Featured";
import { HomePage } from "./pages/Home";
import { ProductPage } from "./pages/Product";
import { RecommendedPage } from "./pages/Recommended";
import { ShopPage } from "./pages/Shop";
import { getAllProducts } from "./api/products";
import { ProductCart } from "./components/ProductCart";

// App
//  HomePage
//    Button
//    Input
//    ProductList
//  ShopPage
//  FeaturedPage
//  RecommendedPage
//  ProductPage

const PAGE_NAMES = ["home", "shop", "featured", "recommended", "product"];

export const HOME_PAGE = PAGE_NAMES[0];
export const SHOP_PAGE = PAGE_NAMES[1];
export const FEATURED_PAGE = PAGE_NAMES[2];
export const RECOMMENDED_PAGE = PAGE_NAMES[3];
export const PRODUCT_PAGE = PAGE_NAMES[4];

function App() {
  const [page, setPage] = useState(HOME_PAGE);
  const [pageData, setPageData] = useState({});
  const [products, setProducts] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);

  const addProductToCart = (product) => {
    const item = cartProducts.find((item) => item.product.id === product.id);
    if (item !== undefined) {
      modifyCartItemAmount(product.id, 1);
      return;
    }

    setCartProducts([...cartProducts, { product, amount: 1 }]);
  };

  const removeProductFromCart = (productId) => {
    setCartProducts(
      cartProducts.filter((item) => item.product.id !== productId)
    );
  };

  const modifyCartItemAmount = (productId, change) => {
    const item = cartProducts.find((item) => item.product.id === productId);
    if (item !== undefined && item.amount + change <= 0) {
      removeProductFromCart(productId);
      return;
    }

    setCartProducts(
      cartProducts.map((item) => {
        if (item.product.id !== productId) {
          return item;
        }

        return { ...item, amount: item.amount + change };
      })
    );
  };

  let content;
  if (page === HOME_PAGE)
    content = (
      <HomePage
        products={products}
        setPage={setPage}
        setPageData={setPageData}
      />
    );
  else if (page === SHOP_PAGE) content = <ShopPage />;
  else if (page === FEATURED_PAGE)
    content = (
      <FeaturedPage
        products={products}
        setPage={setPage}
        setPageData={setPageData}
      />
    );
  else if (page === RECOMMENDED_PAGE) content = <RecommendedPage />;
  else if (page === PRODUCT_PAGE)
    content = (
      <ProductPage
        pageData={pageData}
        products={products}
        addProductToCart={addProductToCart}
      />
    );
  else content = <div>404 Not Found.</div>;

  const applyLinkStyling = (activePage) => {
    return `site-nav-link ${page === activePage ? "active-page" : ""}`;
  };

  useEffect(() => {
    getAllProducts().then(setProducts);
  }, []);

  return (
    <>
      <div id="site-wrapper">
        <div id="site-nav-wrapper">
          <nav id="site-nav">
            <a
              className={applyLinkStyling(HOME_PAGE)}
              onClick={() => setPage(HOME_PAGE)}
            >
              Home
            </a>
            <a
              className={applyLinkStyling(SHOP_PAGE)}
              onClick={() => setPage(SHOP_PAGE)}
            >
              Shop
            </a>
            <a
              className={applyLinkStyling(FEATURED_PAGE)}
              onClick={() => setPage(FEATURED_PAGE)}
            >
              Featured
            </a>
            <a
              className={applyLinkStyling(RECOMMENDED_PAGE)}
              onClick={() => setPage(RECOMMENDED_PAGE)}
            >
              Recommended
            </a>
          </nav>

          <div id="site-nav-right">
            <input />
            <button onClick={() => setCartVisible(!cartVisible)}>
              Cart ({cartProducts.length})
            </button>
            <button>Sign In</button>
            <button>Sign Up</button>
          </div>
        </div>

        <div id="site-main-wrapper">{content}</div>
        {cartVisible ? (
          <div id="cart-sidebar">
            <ProductCart
              cart={cartProducts}
              toggleCartVisibility={() => setCartVisible(false)}
              clearCart={() => setCartProducts([])}
              removeProductFromCart={removeProductFromCart}
              modifyCartItemAmount={modifyCartItemAmount}
            />
          </div>
        ) : null}
      </div>
    </>
  );
}

export default App;
