import Text from '../Text'

type HeaderProps = {
    readonly title: string,
    readonly subtitle?: string,
    readonly icon: JSX.Element,
}

export default function Header({ title, subtitle, icon }: HeaderProps) {
    return (
        <header className="flex flex-col items-center justify-center gap-2">
            <HeaderTitle title={title} icon={icon} />
            {subtitle && <Text variant={"h3"}>{subtitle}</Text>}
            <HorizontalLine />
        </header>
    )
}

function HeaderTitle({ title, icon }: Readonly<Pick<HeaderProps, "title" | "icon">>) {
    return (
        <div className="flex items-center justify-center gap-2 text-base-content">
            {icon}
            <Text variant={"h3"}>{title}</Text>
        </div>
    )
}

function HorizontalLine() {
    return <hr className="w-full h-px bg-base-200 border-0 my-2" />;
}