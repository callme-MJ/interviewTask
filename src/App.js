import "./App.css";
import { useState, useEffect } from "react";
export default function App() {
  const [clicked, setClicked] = useState([]);

  useEffect(() => {
    let removedCount = 0;
    const removeLastElement = () => {
        console.log("started");
        setTimeout(() => {
          setClicked(arr => arr.slice(0, arr.length - 1));
          removedCount++;
          if (removedCount < 8) {
            removeLastElement();
          }
        }, 1000);
    };
if (clicked.length === 8) {
  removeLastElement();
}
  }, [clicked]);

  console.log(clicked);
  const clickHandler = (ind) => {
    console.log(ind);
    if (clicked.includes(ind)) {
      return;
    }
    setClicked([...clicked, ind]);
  };
  return (
    <div className="App">
      {[...Array(8)].map((_, i) => (
        <div className="card" onClick={() => clickHandler(i)}>
          <div
            className={clicked.includes(i) ? "item bg-green" : "item bg-yellow"}
          >
            {i + 1}
          </div>
        </div>
      ))}
    </div>
  );
}
