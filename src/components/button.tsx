"use client";

import { useEffect, useRef } from "react";

export default function Button() {
  const btnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const btn = btnRef.current!;
    if (!btn) return;

    const handleClick = (e: MouseEvent) => {
      console.log("click");

      const target = e.target as HTMLElement;

      const x = e.clientX - target.offsetLeft;
      const y = e.clientY - target.offsetTop;

      const ripples = document.createElement("span");

      ripples.classList.add("ripple-effect");

      ripples.style.left = x + "px";
      ripples.style.top = y + "px";
      btn.appendChild(ripples);

      setTimeout(() => {
        ripples.remove();
      }, 500);
    };

    btn.addEventListener("click", handleClick);

    return () => {
      btn.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <>
      <button
        ref={btnRef}
        className="bg-blue-500 text-white px-3 py-2 rounded cursor-pointer relative overflow-hidden"
      >
        مشاهده محصول
      </button>
    </>
  );
}
