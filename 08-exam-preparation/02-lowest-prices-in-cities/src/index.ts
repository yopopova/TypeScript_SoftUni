const inputCollection: string[] = [
  "New York | Sample Product | 1000.1",
  "Sample Town | Sample Product | 1000",
  "Sofia | Orange | 3",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Peach | 2",
  "New York | Burger | 10",
];

// Output
// Sample Product -> 1000 (Sample Town)
// Orange -> 2 (Sample Town)
// Peach -> 1 (Sample Town)
// Burger -> 10 (New York)

type TownPriceMap = {
  [townName: string]: number;
};

type ProductTownPriceMap = {
  [product: string]: TownPriceMap;
};

const generateProductTownPriceMap = (input: string[]): ProductTownPriceMap => {
  const result: ProductTownPriceMap = {};

  for (const line of input) {
    const [town, product, price] = line.split(" | ");
    const parsedPrice = Number(price);

    if (!result[product]) {
      result[product] = {};
    }

    if (!result[product][town]) {
      result[product][town] = parsedPrice;
    } else {
      if (result[product][town] > parsedPrice) {
        result[product][town] = parsedPrice;
      }
    }
  }

  return result;
};

