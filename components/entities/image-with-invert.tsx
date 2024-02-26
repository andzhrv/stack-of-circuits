'use client';

import type { ImageProps } from 'next/image';
import Image from 'next/image';
import { useTheme } from 'next-themes';

import { cn } from '@/lib/utils';

interface Props extends ImageProps {
  className?: string;
}

export const ImageWithInvert = ({ className, alt, ...props }: Props) => {
  const { resolvedTheme } = useTheme();

  return (
    <Image
      className={cn(className, { invert: resolvedTheme === 'dark' })}
      alt={alt}
      {...props}
    />
  );
};
