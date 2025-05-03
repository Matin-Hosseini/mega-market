import HeaderHoverCard from '@/components/HeaderHoverCard';
import { Button } from '@/components/ui/button';
import { CartIcon } from '@/icons/cart';
import Image from 'next/image';
import Link from 'next/link';
import ProductBox from './productBox';

export default function Cart() {
  return (
    <HeaderHoverCard trigger={<CartIcon />}>
      <div className="flex items-center justify-between ">
        <span className="text-gray-500">4 کالا</span>
        <Link href={'/cart'}>مشاهده سبد خرید</Link>
      </div>
      <div className="my-5  divide-red-500">
        {[1, 2, 3, 4].map((item) => (
          <ProductBox key={item} />
        ))}
      </div>

      <Button className="w-full flex items-center justify-around">
        <span>ورود و تسویه</span>
        <div className="border border-white h-[90%]"></div>
        <span>490,000,000 تومان</span>
      </Button>
    </HeaderHoverCard>
  );
}
