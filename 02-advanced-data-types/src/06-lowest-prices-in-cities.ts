type ProductType = {
  [productName: string]: { townName: string; productPrice: number };
};

function lowestPriceInCities(arr: string[]): void {
  const productInfo: ProductType = {};

  arr.forEach((city) => {
    const [townName, productName, productPrice] = city.split(" | ");
    const parsedProductPrice = parseFloat(productPrice);

    if (!productInfo[productName] || productInfo[productName].productPrice > parsedProductPrice) {
      productInfo[productName] = { townName, productPrice: parsedProductPrice };
    }
  });

  Object.keys(productInfo).forEach((productName) => {
    const { townName, productPrice } = productInfo[productName];
    console.log(`${productName} -> ${productPrice} (${townName})`);
  });
}

lowestPriceInCities([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);