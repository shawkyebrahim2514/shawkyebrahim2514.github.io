import Header from './Header';
import Content from './Content';

type MainSectionProps = {
    readonly title?: string,
    readonly link?: string,
    readonly subtitle?: string,
    readonly style?: React.CSSProperties,
    readonly children: React.ReactNode,
}

export default function MainSection({ title, link, subtitle, children }: MainSectionProps) {
    return (
        <div className="flex flex-col gap-4 p-6">
            {title && <Header title={title} link={link} subtitle={subtitle} />}
            <Content>{children}</Content>
        </div>
    )
}