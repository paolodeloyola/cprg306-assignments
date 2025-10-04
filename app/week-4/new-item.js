"use client";
import { useState } from "react";

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);
  const inc = () => setQuantity((q) => (q < 20 ? q + 1 : q));
  const dec = () => setQuantity((q) => (q > 1 ? q - 1 : q));

  return (
    <div className="flex items-center gap-4 rounded-xl border border-black/10 shadow px-6 py-4 bg-yellow-200">
      {/* Counter box */}
      <div className="w-14 h-14 flex items-center justify-center rounded-md border-2 border-black text-xl font-bold bg-yellow-100 text-black">
        {quantity}
      </div>

      {/* Minus button */}
      <button
        type="button"
        onClick={dec}
        disabled={quantity === 1}
        aria-label="Decrease"
        className="w-14 h-14 rounded-md flex items-center justify-center
                   bg-zinc-300 hover:bg-zinc-400 active:bg-zinc-500
                   disabled:opacity-60 disabled:cursor-not-allowed transition shadow-sm"
      >
        <span className="block w-5 h-0.5 bg-white rounded-sm" />
      </button>

      {/* Plus button */}
      <button
        type="button"
        onClick={inc}
        disabled={quantity === 20}
        aria-label="Increase"
        className="w-14 h-14 rounded-md flex items-center justify-center text-white
                   bg-blue-600 hover:bg-blue-700 active:bg-blue-800
                   disabled:opacity-60 disabled:cursor-not-allowed transition shadow-sm"
      >
        <span className="relative block w-5 h-5">
          <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5 bg-white rounded-sm" />
          <span className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-white rounded-sm" />
        </span>
      </button>
    </div>
  );
}
