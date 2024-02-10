import { forwardRef, HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

const Paragraph = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <p className={cn('mb-4 text-justify', className)} ref={ref} {...props}>
      {children}
    </p>
  )
);
Paragraph.displayName = 'Paragraph';

export { Paragraph };
