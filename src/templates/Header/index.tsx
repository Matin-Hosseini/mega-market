import Logo from '@/components/logo';
import { CartIcon } from '@/icons/cart';
import { HeartIcon } from '@/icons/heart';
import { Search, UserRound } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="container mx-auto">
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
          <div>
            <HeartIcon />
          </div>
          <div>
            <CartIcon />
          </div>
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
    </header>
  );
}
