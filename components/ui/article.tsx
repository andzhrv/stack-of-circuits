import { forwardRef, HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

const Article = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div className={cn('my-8', className)} ref={ref} {...props}>
      {children}
    </div>
  )
);
Article.displayName = 'Article';

export { Article };
