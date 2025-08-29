interface CreditCard {
  type: "creditCard";
  number: string;
}

interface Paypal {
  type: "paypal";
  email: string;
}

type PaymentMethod = CreditCard | Paypal;

function processPayment(method: PaymentMethod): string {
  if (method.type === "creditCard") {
    return "Payment by credit card"
  }
  if (method.type === "paypal") {
    return "Payment method by paypal"
  }
  return "Unknown payment method"
}

console.log(processPayment({type: "creditCard", number: "4532-1234-5678-9012"})); // Credit card
console.log(processPayment({type: "paypal", email: "4532-1234-5678-9012"})); // Credit card


export default function App() {
  return <div>Check the console for output</div>;
}

