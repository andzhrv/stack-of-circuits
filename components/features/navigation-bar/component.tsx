'use client';

import Link from 'next/link';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';

import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
import { useScopedI18n } from '@/locales/client';

const NAVIGATION_BAR_LINKS = [
  {
    href: '/guides',
    textKey: 'guides'
  },
  {
    href: '/tools',
    textKey: 'tools'
  }
] as const;

export const NavigationBar = ({ className }: { className: string }) => {
  const t = useScopedI18n('NavigationBar');

  return (
    <>
      <Drawer>
        <DrawerTrigger asChild>
          <Button
            className={cn(
              'flex justify-center items-center sm:hidden',
              className
            )}
            variant="outline"
            size="icon"
          >
            <HamburgerMenuIcon className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <nav className="px-8 py-6">
            <ul>
              {NAVIGATION_BAR_LINKS.map((link, index) => (
                <li className="mb-3" key={index}>
                  <Link href={link.href} className="text-lg font-bold">
                    {t(link.textKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </DrawerContent>
      </Drawer>
      <NavigationMenu className={cn('hidden sm:block', className)}>
        <NavigationMenuList>
          {NAVIGATION_BAR_LINKS.map((link, index) => (
            <NavigationMenuItem key={index}>
              <Link href={link.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {t(link.textKey)}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </>
  );
};
