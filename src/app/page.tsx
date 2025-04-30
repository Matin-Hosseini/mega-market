import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="container mx-auto">
      <Link href={'/products'}>products</Link>
      <div className="container mx-auto flex items-center gap-10"></div>
      <Button variant={'secondary'}>متن دکمه</Button>
    </main>
  );
}
