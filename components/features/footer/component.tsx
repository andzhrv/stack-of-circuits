'use client';

import { LocaleToggle } from '@/components/entities/locale-toggle';

export const Footer = () => {
  return (
    <footer className="flex justify-between items-center shrink-0 mx-6 md:mx-12 lg:mx-20 h-[4rem]">
      <div className="text-sm text-muted-foreground">
        &copy; 2024 Stack of Circuits
      </div>
      <LocaleToggle />
    </footer>
  );
};
