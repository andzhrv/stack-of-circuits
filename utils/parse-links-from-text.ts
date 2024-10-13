const linkRegExp = /\[([^\]]+)\]\(([^\)]+)\)/g;

export const parseLinksFromText = (text: string) => {
  const result: (string | { title: string; link: string })[] = [];
  let lastPosition = 0;

  const matches = text.matchAll(linkRegExp);

  for (const match of matches) {
    result.push(text.slice(lastPosition, match.index));
    lastPosition = (match.index || 0) + match[0].length;

    result.push({ title: match[1], link: match[2] });
  }

  result.push(text.slice(lastPosition));

  return result;
};
