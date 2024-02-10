'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

import { YA_METRIKA_COUNTER_ID } from './config';

export const YaMetrikaCounter = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;

    if (window.ym) {
      window.ym(YA_METRIKA_COUNTER_ID, 'hit', url);
    }
  }, [pathname, searchParams]);

  return null;
};
