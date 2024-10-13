import { forwardRef, HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4;
}

const classNames = {
  1: 'text-2xl md:text-3xl lg:text-4xl',
  2: 'text-xl md:text-2xl',
  3: 'text-lg md:text-xl',
  4: 'text-base md:text-lg'
};

const Title = forwardRef<HTMLHeadingElement, TitleProps>(
  ({ className, level = 1, children, ...props }, ref) => {
    const Tag: 'h1' | 'h2' | 'h3' | 'h4' = `h${level}`;

    return (
      <Tag
        className={cn(
          'scroll-m-20 font-medium tracking-tight',
          classNames[level],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);
Title.displayName = 'Title';

export { Title };
