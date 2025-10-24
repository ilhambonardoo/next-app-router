"use client";

import { useState } from "react";

export default function AdminProductPage() {
  const [status, setStatus] = useState("");
  const revalidate = async () => {
    const res = await fetch(
      "http://localhost:3000/api/revalidate?tag=products&secret=J0404231063",
      {
        method: "POST",
      }
    );
    if (!res.ok) {
      setStatus("Failed to revalidate");
    } else {
      const response = await res.json();
      if (response.revalidate) {
        setStatus("Revalidation successful");
      }
    }
  };
  return (
    <>
      <div className="w-3/6 bg-stone-500 h-96 rounded-2xl flex justify-center items-center">
        <h1>{status}</h1>
        <div
          className="bg-black text-zinc-50 p-3 m-5 w-fit  cursor-pointer rounded-2xl"
          onClick={() => {
            revalidate();
          }}
        >
          Revalidate
        </div>
      </div>
    </>
  );
}
