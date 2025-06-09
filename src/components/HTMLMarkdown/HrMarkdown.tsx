const HrMarkdown = ({ ...props }: React.HTMLAttributes<HTMLHRElement>) => {
  return <hr className="my-4 border-base-200 h-px" {...props} />;
};

export default HrMarkdown;