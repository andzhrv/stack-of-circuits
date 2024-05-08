import { forwardRef, HTMLAttributes } from 'react';
import Markdown, { Components } from 'react-markdown';
import Image from 'next/image';
import remarkGfm from 'remark-gfm';

import { cn } from '@/lib/utils';

import { Paragraph } from '../ui/paragraph';
import { Title } from '../ui/title';

const components: Partial<Components> = {
  h1: ({ children }) => <Title className="mb-4">{children}</Title>,
  h2: ({ children }) => (
    <Title level={2} className="mb-4">
      {children}
    </Title>
  ),
  h3: ({ children }) => (
    <Title level={3} className="mb-4">
      {children}
    </Title>
  ),
  h4: ({ children }) => (
    <Title level={4} className="mb-4">
      {children}
    </Title>
  ),
  p: ({ children }) => <Paragraph>{children}</Paragraph>,
  img: ({ src, alt }) =>
    typeof src === 'string' ? (
      <Image src={src} width={300} height={200} alt={alt || ''} />
    ) : null
};

const Article = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & { children: string | null | undefined }
>(({ className, children, ...props }, ref) => (
  <article className={cn('flex flex-col my-8', className)} ref={ref} {...props}>
    <Markdown components={components} remarkPlugins={[remarkGfm]}>
      {children}
    </Markdown>
  </article>
));
Article.displayName = 'Article';

export { Article };
