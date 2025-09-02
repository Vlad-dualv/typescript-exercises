interface Rectangle {
  width: number;
  height: number;
}

function calculateArea(rectangle: Rectangle): number {
  return rectangle.width * rectangle.height
}

const myRectangle: Rectangle = {width: 5, height: 10}
console.log(calculateArea(myRectangle))

export default function App() {
  return <div>Check the console for results</div>
}