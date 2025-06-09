import { CSSProperties, useMemo } from 'react'

type ContentProps = {
    readonly children: React.ReactNode,
}

export default function Content({ children }: ContentProps) {
    return (
        <main className="flex justify-start gap-4 items-stretch">
            <div className="flex-grow">
                {children}
            </div>
        </main>
    );
}
