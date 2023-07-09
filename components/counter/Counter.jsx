"use client"; //clientコンポーネントとして認識

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Counter: {count}</p>
      <ul>
        <li>
          <button onClick={() => setCount(count + 1)}>Count Up</button>
        </li>
        <li>
          <button onClick={() => setCount(count - 1)}>Count Down</button>
        </li>
        <li>
          <button onClick={() => setCount(0)}>Count Reset</button>
        </li>
      </ul>
    </>
  );
}
