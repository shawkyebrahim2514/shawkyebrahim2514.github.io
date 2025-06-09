import Header from './Header';

type CenteredSectionProps = {
    readonly title: string,
    readonly subtitle?: string,
    readonly icon: JSX.Element,
    readonly children: JSX.Element | JSX.Element[],
}

export default function CenteredSection({ title, subtitle, icon, children }: CenteredSectionProps) {
    return (
        <div className="flex flex-col items-center text-center p-6">
            <Header title={title} subtitle={subtitle} icon={icon} />
            {children}
        </div>
    )
}
