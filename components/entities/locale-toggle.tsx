'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { useChangeLocale, useCurrentLocale } from '@/locales/client';

export const LocaleToggle = () => {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {locale === 'ru' ? 'Русский' : 'English'}
          <span className="sr-only">Locale toggle</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => changeLocale('en')}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeLocale('ru')}>
          Русский
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
