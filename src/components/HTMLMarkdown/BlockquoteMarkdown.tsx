import { useMemo } from 'react';
import type { Element, RootContent } from 'hast';
import MainSection from '../MainSection';
import { toJsxRuntime } from 'hast-util-to-jsx-runtime';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { markdownComponents } from '.';
import { v4 as uuid } from 'uuid';

type BlockquoteMarkdownProps = {
  node: any,
  className?: string,
};

const BlockquoteMarkdown = ({ node, className }: BlockquoteMarkdownProps) => {
  const contentJSXElementsFromAST = useMemo(() => {
    let content = node?.children.map((element: any) => toJsxRuntime(element as RootContent, {
      Fragment, jsx, jsxs, passNode: true, components: {
        ...markdownComponents,
        br: () => null,
      },
    }));
    return content?.map((element: any) => (
      <Fragment key={uuid()}>{element}</Fragment>
    ));
  }, [node?.children]);

  return (
    <blockquote className="bg-base-200 border-l-4 border-primary p-4 rounded my-4">
      {contentJSXElementsFromAST}
    </blockquote>
  );
};

export default BlockquoteMarkdown;