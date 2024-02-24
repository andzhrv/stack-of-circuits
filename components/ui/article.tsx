import { forwardRef, HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

const Article = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <article
      className={cn('flex flex-col my-8', className)}
      ref={ref}
      {...props}
    >
      {children}
    </article>
  )
);
Article.displayName = 'Article';

export { Article };
