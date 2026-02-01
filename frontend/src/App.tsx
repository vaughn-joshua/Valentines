import { useState } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <main className="bg-yellow-400 h-screen justify-items-center place-content-center">
      <h1>Will you be my Valentines?</h1>
      <div>
        <button className="btn">Yes</button>
        <button>No</button>
      </div>
    </main>
  );
}

export default App;
