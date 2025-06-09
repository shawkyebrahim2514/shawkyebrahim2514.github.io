import Button from './Button'

type ListButtonsProps = {
    readonly elements: string[];
}

export default function ListButtons({ elements }: ListButtonsProps) {
    return (
        <div className="flex flex-wrap gap-2 items-center">
            {elements.map((tech) => {
                return (
                    <Button key={tech} text={tech} size='sm' className="btn-ghost btn-xs" />
                )
            })}
        </div>
    )
}
