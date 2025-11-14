'use client';

import { forwardRef, HTMLAttributes } from 'react';
import Markdown, { Components } from 'react-markdown';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';

import { cn } from '@/lib/utils';

import { Paragraph } from '../ui/paragraph';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '../ui/table';
import { Title } from '../ui/title';

import 'katex/dist/katex.min.css';

const getComponents = (theme: string | undefined): Partial<Components> => ({
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
    <Title level={4} className="mb-2">
      {children}
    </Title>
  ),
  p: ({ children }) => <Paragraph>{children}</Paragraph>,
  ul: ({ children }) => <ul className="mb-4">{children}</ul>,
  img: ({ src, alt }) =>
    typeof src === 'string' ? (
      <Image
        className={cn({ invert: theme === 'dark' })}
        src={src}
        width={300}
        height={200}
        alt={alt || ''}
      />
    ) : null,
  table: ({ children }) => <Table>{children}</Table>,
  thead: ({ children }) => <TableHeader>{children}</TableHeader>,
  tbody: ({ children }) => <TableBody>{children}</TableBody>,
  tr: ({ children }) => <TableRow>{children}</TableRow>,
  th: ({ children }) => (children ? <TableHead>{children}</TableHead> : null),
  td: ({ children }) => <TableCell>{children}</TableCell>
});

const Article = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & { children: string | null | undefined }
>(({ className, children, ...props }, ref) => {
  const { resolvedTheme } = useTheme();

  return (
    <article
      className={cn('flex flex-col my-8', className)}
      ref={ref}
      {...props}
    >
      <Markdown
        components={getComponents(resolvedTheme)}
        remarkPlugins={[[remarkGfm, { singleTilde: false }], remarkMath]}
        rehypePlugins={[rehypeKatex]}
      >
        {children}
      </Markdown>
    </article>
  );
});
Article.displayName = 'Article';

export { Article };
