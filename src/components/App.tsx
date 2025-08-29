interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
}

const products: Product[] = [
    {
    id: 1,
    name: "MacBook Pro 14-inch",
    price: 1999.99,
    inStock: true
  },
  {
    id: 2,
    name: "iPhone 15",
    price: 799.99,
    inStock: false
  },
  {
    id: 3,
    name: "AirPods Pro",
    price: 249.99,
    inStock: true
  },
  {
    id: 4,
    name: "iPad Air",
    price: 599.99,
    inStock: true
  },
  {
    id: 5,
    name: "Apple Watch Series 9",
    price: 399.99,
    inStock: false
  },
  {
    id: 6,
    name: "Magic Mouse",
    price: 79.99,
    inStock: true
  },
  {
    id: 7,
    name: "Studio Display",
    price: 1599.99,
    inStock: false
  },
  {
    id: 8,
    name: "Magic Keyboard",
    price: 179.99,
    inStock: true
  }
]

function getInStockProducts(products: Product[]): Product[] {
  return products.filter(product => product.inStock)
}

const inStockProducts = getInStockProducts(products);

console.log(inStockProducts)

export default function App() {
  return <div>Check the console</div>
}