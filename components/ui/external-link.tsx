import { AnchorHTMLAttributes, PropsWithChildren } from 'react';

import { cn } from '@/lib/utils';

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  className?: string;
}

export const ExternalLink = ({
  className,
  children,
  ...props
}: PropsWithChildren<ExternalLinkProps>) => {
  return (
    <a
      className={cn(
        'text-muted-foreground underline underline-offset-4',
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
};
