import {
  ComponentPropsWithoutRef,
  ElementRef,
  forwardRef,
  ReactNode
} from 'react';
import Link, { LinkProps } from 'next/link';

import { cn } from '@/lib/utils';

const LinksList = forwardRef<ElementRef<'ul'>, ComponentPropsWithoutRef<'ul'>>(
  ({ className, children, ...props }, ref) => {
    return (
      <ul
        ref={ref}
        className={cn(
          'grid gap-3 p-4 auto-rows-fr md:grid-cols-[1fr_1fr] lg:grid-cols-[1fr_1fr_1fr]',
          className
        )}
        {...props}
      >
        {children}
      </ul>
    );
  }
);
LinksList.displayName = 'LinksList';

interface LinksListItemProps extends LinkProps {
  className?: string;
  title: string;
  children?: ReactNode;
}

const LinksListItem = forwardRef<HTMLAnchorElement, LinksListItemProps>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <Link
          ref={ref}
          className={cn(
            'block h-full select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </li>
    );
  }
);
LinksListItem.displayName = 'LinksListItem';

export { LinksListItem, LinksList };
