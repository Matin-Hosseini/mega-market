'use client';

import { Button } from '@/components/ui/button';
import useLocalStorage from '@/hooks/localStorage';
import Link from 'next/link';

export default function Home() {
  const handler = () => {
    const storage = useLocalStorage('theme');

    storage[1]('matin');
  };

  return (
    <main className="container mx-auto">
      <Link href={'/product'}>products</Link>
      <div className="container mx-auto flex items-center gap-10"></div>
      <Button
        onClick={() => {
          handler();
        }}
        variant={'outline'}
      >
        متن دکمه
      </Button>
    </main>
  );
}
