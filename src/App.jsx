import { useState } from "react";
import "./App.css";
import { FeaturedPage } from "./pages/Featured";
import { HomePage } from "./pages/Home";
import { ProductPage } from "./pages/Product";
import { RecommendedPage } from "./pages/Recommended";
import { ShopPage } from "./pages/Shop";

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

const HOME_PAGE = PAGE_NAMES[0];
const SHOP_PAGE = PAGE_NAMES[1];
const FEATURED_PAGE = PAGE_NAMES[2];
const RECOMMENDED_PAGE = PAGE_NAMES[3];
const PRODUCT_PAGE = PAGE_NAMES[4];

function App() {
  const [page, setPage] = useState(HOME_PAGE);

  let content;
  if (page === HOME_PAGE) content = <HomePage />;
  else if (page === SHOP_PAGE) content = <ShopPage />;
  else if (page === FEATURED_PAGE) content = <FeaturedPage />;
  else if (page === RECOMMENDED_PAGE) content = <RecommendedPage />;
  else if (page === PRODUCT_PAGE) content = <ProductPage />;
  else content = <div>404 Not Found.</div>;

  const applyLinkStyling = (activePage) => {
    return `site-nav-link ${page === activePage ? "active-page" : ""}`;
  };

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
            <span>Cart</span>
            <button>Sign In</button>
            <button>Sign In</button>
          </div>
        </div>

        <div id="site-main-wrapper">{content}</div>
      </div>
    </>
  );
}

export default App;
