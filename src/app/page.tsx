"use client";

import Button from "@/components/button";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Link href={"/products"}>products</Link>
      <Button
        onClick={() => {
          console.log("this is the click");
        }}
        className="text-red-500 bg-red-100"
      >
        مشاهده محصولات
      </Button>
    </main>
  );
}
