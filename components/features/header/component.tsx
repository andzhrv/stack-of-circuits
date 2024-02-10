'use client';

import Link from 'next/link';

import { Logo } from '@/components/entities/logo';
import { ThemeToggle } from '@/components/entities/theme-toggle';

import { NavigationBar } from '../navigation-bar';

export const Header = () => {
  return (
    <header className="flex justify-between items-center shrink-0 mx-6 md:mx-12 lg:mx-20 h-[4rem]">
      <Link href="/">
        <Logo className="h-[42px]" />
      </Link>
      <div className="flex">
        <NavigationBar className="mr-4" />
        <ThemeToggle />
      </div>
    </header>
  );
};
