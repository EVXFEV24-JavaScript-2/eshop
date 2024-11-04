import { useState } from "react";

export function ProductPage({ pageData, products }) {
  const product = products.find((product) => product.id === pageData.productId);

  const [activeImage, setActiveImage] = useState(product.images[0]);

  return (
    <>
      <div>
        <img src={activeImage} width="200px" height="200px" />

        <div>
          {product.images
            .filter((image) => activeImage !== image)
            .map((image) => (
              <img
                src={image}
                width="80px"
                height="80px"
                onClick={() => setActiveImage(image)}
              />
            ))}
        </div>

        <h2>{product.title}</h2>
      </div>
    </>
  );
}
