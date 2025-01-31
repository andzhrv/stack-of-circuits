'use client';

import { LocaleToggle } from '@/components/entities/locale-toggle';

export const Footer = () => {
  return (
    <footer className="flex justify-between items-center shrink-0 px-6 md:px-12 lg:px-20 h-[4rem] border-t-[1px]">
      <div className="text-sm text-muted-foreground">
        &copy; 2025 Stack of Circuits
      </div>
      <LocaleToggle />
    </footer>
  );
};
