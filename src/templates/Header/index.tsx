import Logo from '@/components/logo';
import { CartIcon } from '@/icons/cart';
import { HeartIcon } from '@/icons/heart';
import { Search, UserRound } from 'lucide-react';
import Link from 'next/link';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import HeaderHoverCard from '@/components/HeaderHoverCard';

export default function Header() {
  return (
    <header className=" bg-slate-200 ">
      <div className="container mx-auto">
        <div className="flex item-center justify-between">
          <div className="flex items-center gap-2">
            <Logo />
            <div className="flex items-center bg-blue-50 p-3 rounded">
              <input
                type="text"
                placeholder="جستجو..."
                className="py-1 px-2 w-80 focus:outline-0"
              />
              <Search />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <HeaderHoverCard trigger={<HeartIcon />}>
              <div className="flex items-center justify-between ">
                <span className="text-gray-500">4 کالا</span>
                <Link href={'/cart'}>مشاهده سبد خرید</Link>
              </div>
              <div className="my-5  divide-red-500">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="flex items-center gap-2 py-2">
                    <div>
                      <Image
                        src={'/images/products/product.jpg'}
                        width={50}
                        height={40}
                        alt="محصول"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm">
                        لپ تاپ 15.6 اینچی ایسوس مدل Asus Rog Strix G16{' '}
                      </h3>
                      <p className="text-gray-600 text-xs">120,000,000 تومان</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button className="w-full flex items-center justify-around">
                <span>ورود و تسویه</span>
                <div className="border border-white h-[90%]"></div>
                <span>490,000,000 تومان</span>
              </Button>
            </HeaderHoverCard>

            <HeaderHoverCard trigger={<CartIcon />}>
              <div className="flex items-center justify-between ">
                <span className="text-gray-500">4 کالا</span>
                <Link href={'/cart'}>مشاهده سبد خرید</Link>
              </div>
              <div className="my-5  divide-red-500">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="flex items-center gap-2 py-2">
                    <div>
                      <Image
                        src={'/images/products/product.jpg'}
                        width={50}
                        height={40}
                        alt="محصول"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm">
                        لپ تاپ 15.6 اینچی ایسوس مدل Asus Rog Strix G16{' '}
                      </h3>
                      <p className="text-gray-600 text-xs">120,000,000 تومان</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button className="w-full flex items-center justify-around">
                <span>ورود و تسویه</span>
                <div className="border border-white h-[90%]"></div>
                <span>490,000,000 تومان</span>
              </Button>
            </HeaderHoverCard>

            <div>
              <Link
                className="flex items-cente gap-2 rounded border p-2 border-blue-500 text-blue-500 hover:bg-blue-50"
                href="/login"
              >
                <UserRound />
                <span> ورود|عضویت</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
