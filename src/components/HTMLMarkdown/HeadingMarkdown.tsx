type HeadingMarkdownProps = React.HTMLAttributes<HTMLHRElement> & {
    headingNumber: "one" | "two" | "three" | "four" | "five" | "six",
};

const headingClasses = {
    one: "text-4xl font-bold",
    two: "text-3xl font-bold",
    three: "text-2xl font-bold",
    four: "text-xl font-bold",
    five: "text-lg font-bold",
    six: "text-base font-bold",
};

const HeadingMarkdown = ({ headingNumber, children, ...props }: HeadingMarkdownProps) => {
    return (
        <div className={headingClasses[headingNumber]} {...props}>
            {children}
        </div>
    );
};

export default HeadingMarkdown;