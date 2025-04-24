'use client';

import { ButtonHTMLAttributes, useEffect, useRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import cn from '@/utils/cn';

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: React.ReactNode;
}

export default function Button({
  children,
  className,
  shape,
  size,
  ...props
}: ButtonProps) {
  const btnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const btn = btnRef.current!;
    if (!btn) return;

    const applyRippleEffect = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      const x = e.clientX - target.offsetLeft;
      const y = e.clientY - target.offsetTop;

      const ripples = document.createElement('span');

      ripples.classList.add('ripple-effect');

      ripples.style.left = x + 'px';
      ripples.style.top = y + 'px';
      btn.appendChild(ripples);

      setTimeout(() => {
        ripples.remove();
      }, 500);
    };

    btn.addEventListener('click', applyRippleEffect);

    return () => {
      btn.removeEventListener('click', applyRippleEffect);
    };
  }, []);

  return (
    <>
      <button
        ref={btnRef}
        className={cn(buttonVariants({ shape, size, className }))}
        {...props}
      >
        {children}
      </button>
    </>
  );
}

const buttonVariants = cva(
  'bg-blue-500 text-white px-3 py-2 rounded cursor-pointer relative overflow-hidden',
  {
    variants: {
      shape: {
        subtle: '',
        contained: '',
      },
      variant: {
        primary: '',
        secondary: '',
      },
      size: {
        sm: '',
        md: '',
        lg: '',
      },
    },
    defaultVariants: {
      shape: 'subtle',
      variant: 'primary',
      size: 'md',
    },
  },
);
