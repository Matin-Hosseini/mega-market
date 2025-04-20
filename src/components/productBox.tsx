import Image from "next/image";
import Tag from "./tag";
import { CpuIcon } from "@/icons/cpu";
import Link from "next/link";
import { HeartPlusIcon } from "@/icons/heart-plus";
import { CartPlusIcon } from "@/icons/cart-plus";

export default function ProductBox() {
  return (
    <div className="shadow-lg p-2 rounded-md text-sm">
      <div className="flex items-center justify-between">
        <Tag title="30%" />
        <div className="bg-blue-500 text-white px-2 py-1 rounded">
          01:36:51:48
        </div>
      </div>
      <Link href={"/product/id"} className="flex justify-center ">
        <Image
          src={"/images/products/product.jpg"}
          width={"200"}
          height={"200"}
          alt="product"
        />
      </Link>
      <div>
        <div className="flex items-center justify-around text-gray-600 mb-3">
          <div className="flex flex-col items-center ">
            <CpuIcon className="text-xl" />
            <span className="text-sm">core i7</span>
          </div>
          <div className="flex flex-col items-center">
            <CpuIcon className="text-xl" />
            <span className="text-sm">i7</span>
          </div>
          <div className="flex flex-col items-center">
            <CpuIcon className="text-xl" />
            <span className="text-sm">i7</span>
          </div>
        </div>

        <Link href={"/product/id"}>
          <h2 className="line-clamp-2 text-sm mb-4">
            لپ تاپ 15.6 اینچی ایسوس مدل ASUS Rog Strix Scar 18 15.6 inches 1TB
            SSD
          </h2>
        </Link>

        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-2">
            <button className="p-2 bg-blue-50 text-blue-500 text-xl rounded cursor-pointer">
              <HeartPlusIcon />
            </button>
            <button className="p-2 bg-blue-50 text-blue-500 text-xl rounded">
              <CartPlusIcon />
            </button>
          </div>
          <div className="flex flex-col items-end">
            <span className=" text-md text-blue-500">56,000,000 تومان</span>
            <span className="text-gray-500 line-through text-xs">
              56,000,00 تومان
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
