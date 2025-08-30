enum Status {
  PENDING,
  PROCESSING,
  SHIPPED,
  DELIVERED
}

type paymentMethod = "credit" | "debit" | "paypal";

interface Order {
  id: number;
  customerName: string;
  total: number;
  status: Status;
  paymentMethod: paymentMethod;
}

function processOrder(order: Order, status: Status): string {
  order.status = status;
  return `Order #${order.id} for ${order.customerName} has been updated to ${order.status}`
}

function calculateFee(paymentMethod: paymentMethod, total: number): number {
  if (paymentMethod === "credit") {
    return total * 1.029
  } else if (paymentMethod === "debit") {
    return total * 1.015
  } else if (paymentMethod === "paypal") {
    return total * 1.035
  }
  return 0
}

const order: Order = {
  id: 101,
  customerName: "Alice Smith",
  total: 100,
  status: Status.PENDING,
  paymentMethod: "paypal"
};

console.log(processOrder(order, Status.PROCESSING));
console.log(`Order total with fee: $${calculateFee(order.paymentMethod, order.total).toFixed(2)}`);

export default function App() {
  return <div>Check the console</div>
}