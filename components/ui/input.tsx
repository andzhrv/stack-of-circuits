import { forwardRef, InputHTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  leftSection?: React.ReactNode;
  rightSection?: React.ReactNode;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, leftSection, rightSection, error, ...props }, ref) => {
    return (
      <>
        <div className={cn('flex h-9 w-full', className)}>
          {leftSection ? (
            <div className="flex h-9 px-3 items-center rounded-l-md text-sm shadow-sm border-y border-l border-input bg-secondary">
              {leftSection}
            </div>
          ) : null}
          <input
            type={type}
            className={cn(
              'flex h-9 w-full rounded-none first:rounded-l-md last:rounded-r-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 z-10',
              {
                '[&:not(:focus)]:border-destructive': !!error
              }
            )}
            ref={ref}
            {...props}
          />
          {rightSection ? (
            <div className="flex h-9 px-3 items-center rounded-r-md text-sm shadow-sm border-y border-r border-input bg-secondary">
              {rightSection}
            </div>
          ) : null}
        </div>
        {error ? (
          <div className="text-destructive text-sm mt-2">{error}</div>
        ) : null}
      </>
    );
  }
);
Input.displayName = 'Input';

export { Input };
