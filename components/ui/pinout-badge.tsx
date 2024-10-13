import { forwardRef, HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const pinoutBadgeVariants = cva(
  'flex justify-center items-center rounded-sm text-white',
  {
    variants: {
      bgColor: {
        violet: 'bg-purple-400',
        violetDark: 'bg-purple-600',
        sky: 'bg-sky-400',
        skyDark: 'bg-sky-600',
        green: 'bg-green-600',
        pink: 'bg-pink-500',
        pinkDark: 'bg-pink-700',
        slate: 'bg-slate-300',
        default: ''
      },
      size: {
        default:
          'w-[3.6rem] h-4 md:w-[4.4rem] md:h-5 text-[0.65rem] md:text-xs',
        square: 'w-4 h-4 md:w-5 md:h-5 text-[0.65rem] md:text-xs text-black'
      }
    },
    defaultVariants: {
      bgColor: 'default',
      size: 'default'
    }
  }
);

interface PinoutBadgeProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pinoutBadgeVariants> {}

const PinoutBadge = forwardRef<HTMLDivElement, PinoutBadgeProps>(
  ({ className, children, bgColor, size, ...props }, ref) => (
    <div
      className={cn(pinoutBadgeVariants({ bgColor, size }), className)}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  )
);
PinoutBadge.displayName = 'PinoutBadge';

export { PinoutBadge };
