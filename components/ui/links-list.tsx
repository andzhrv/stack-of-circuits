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
  description: string;
  children?: ReactNode;
}

const LinksListItem = forwardRef<HTMLAnchorElement, LinksListItemProps>(
  ({ className, title, description, children, ...props }, ref) => {
    return (
      <li>
        <Link
          ref={ref}
          className={cn(
            'flex items-center h-full select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          {children ? <div className="basis-10 mr-2">{children}</div> : null}
          <div>
            <h3 className="text-sm font-medium leading-none mb-1">{title}</h3>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {description}
            </p>
          </div>
        </Link>
      </li>
    );
  }
);
LinksListItem.displayName = 'LinksListItem';

export { LinksListItem, LinksList };
