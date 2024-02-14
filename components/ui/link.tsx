import { ReactNode } from 'react';
import NextLink, { LinkProps } from 'next/link';

import { cn } from '@/lib/utils';

interface LinksListItemProps extends LinkProps {
  className?: string;
  children?: ReactNode;
}

export const Link = ({ className, children, ...props }: LinksListItemProps) => {
  return (
    <NextLink
      className={cn(
        'text-muted-foreground underline underline-offset-4',
        className
      )}
      {...props}
    >
      {children}
    </NextLink>
  );
};
