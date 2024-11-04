export async function getAllProducts() {
    const response = await fetch('https://dummyjson.com/products')

    // TODO: error handling

    const content = await response.json();

    return content.products;
}