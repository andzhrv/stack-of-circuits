import { forwardRef, HTMLAttributes, ReactNode } from 'react';

import { cn } from '@/lib/utils';

export interface StatisticProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  value: string;
}

const Statistic = forwardRef<HTMLDivElement, StatisticProps>(
  ({ className, title, value, ...props }, ref) => {
    return (
      <div className={cn('flex flex-col', className)} ref={ref} {...props}>
        <div className="tracking-tight text-sm font-medium">{title}</div>
        <div className="text-2xl font-bold">{value}</div>
      </div>
    );
  }
);
Statistic.displayName = 'Statistic';

const StatisticWrapper = forwardRef<
  HTMLDivElement,
  { className?: string; children: ReactNode }
>(({ className, children, ...props }, ref) => {
  return (
    <div
      className={cn('grid grid-cols-2 gap-x-4 gap-y-6', className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});
StatisticWrapper.displayName = 'StatisticWrapper';

export { Statistic, StatisticWrapper };
