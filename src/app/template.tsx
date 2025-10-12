"use client";
import { useState } from "react";

const Template = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1> Template {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Klik Me
      </button>
      {children}
    </div>
  );
};

export default Template;
