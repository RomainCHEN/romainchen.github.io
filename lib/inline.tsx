import { Fragment, type ReactNode } from 'react';

const PATTERN = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;

/**
 * Content prose is authored with a sliver of Markdown, bold, italic and code , 
 * because writing JSX inside content files makes them unreadable. Rather than
 * setting innerHTML, this turns the markers into real elements, so nothing in a
 * content string can ever inject markup.
 */
export function inline(text: string): ReactNode {
  const parts = text.split(PATTERN).filter((part) => part !== '');

  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={i}>{part.slice(1, -1)}</em>;
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={i}>{part.slice(1, -1)}</code>;
    }
    return <Fragment key={i}>{part}</Fragment>;
  });
}
