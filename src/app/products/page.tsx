import ProductBox from '@/components/productBox';
import Link from 'next/link';

export default function ProductsPage() {
  return (
    <div>
      <h1>this is the products page</h1>
      <Link href={'/'}>home page</Link>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
          <ProductBox />
        </div>
      </div>
    </div>
  );
}
