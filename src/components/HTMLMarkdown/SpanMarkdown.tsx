import { useMemo } from 'react';
import type { Element, RootContent } from 'hast';
import { Fragment, jsx, jsxs } from 'react/jsx-runtime';
import { markdownComponents } from '.';
import { toJsxRuntime } from 'hast-util-to-jsx-runtime';
import Button from '../Button';
import { v4 as uuid } from 'uuid';

const SpanMarkdown = ({ node, className, ...props }: any) => {
    const classes = useMemo(() => className?.split(' ') ?? [], [className]);
    const contentJSXElementsFromAST = useMemo(() => {
        let content = node?.children;
        if (typeof content === 'string') return content;
        let result = node?.children.map((element: any) => toJsxRuntime(element as RootContent, {
            Fragment, jsx, jsxs, passNode: true, components: {
                ...markdownComponents,
                br: () => null,
            },
        }));
        return result?.map((element: any) => (
            <Fragment key={uuid()}>{element}</Fragment>
        ));
    }, [node?.children]);

    // Highlight area or text
    const highlightClass = classes.includes('highlight-area')
        ? 'font-bold bg-base-200 text-primary px-2'
        : 'font-bold text-primary';

    // `[[Button]]`
    if (classes.includes("button")) {
        return (
            <Button
                key={classes.join()}
                size='sm'
                className="m-2"
            >
                {contentJSXElementsFromAST}
            </Button>
        )
    }

    return (
        <span className={highlightClass} {...props}>
            {contentJSXElementsFromAST}
        </span>
    );
};

export default SpanMarkdown;