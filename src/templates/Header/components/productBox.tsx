import Image from 'next/image';

export default function ProductBox() {
  return (
    <div className="flex items-center gap-2 py-2">
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
  );
}
