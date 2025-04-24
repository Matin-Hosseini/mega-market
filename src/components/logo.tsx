import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href={'/'}>
      <Image width={50} height={50} src={'/logos/7.png'} alt="logo" />
    </Link>
  );
}
