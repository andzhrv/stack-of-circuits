import { forwardRef, HTMLAttributes } from 'react';

import { parseLinksFromText } from '@/utils/parse-links-from-text';

import { ExternalLink } from '../ui/external-link';
import { Paragraph } from '../ui/paragraph';

const ParagraphWithLinks = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ children, ...props }, ref) => (
  <Paragraph ref={ref} {...props}>
    {typeof children === 'string'
      ? parseLinksFromText(children).map((item, index) => {
          if (typeof item === 'string') {
            return item;
          } else {
            return (
              <ExternalLink key={index} href={item.link} target="_blank">
                {item.title}
              </ExternalLink>
            );
          }
        })
      : children}
  </Paragraph>
));

ParagraphWithLinks.displayName = 'ParagraphWithLinks';

export { ParagraphWithLinks };
