import { memo } from "react"

function MainImage({ imgSrc, isHovered }: { imgSrc: string, isHovered: boolean }) {
    return (
        <img
            className={`w-full h-full object-cover transition-transform duration-300 ${isHovered ? 'scale-110' : 'scale-100'}`}
            src={imgSrc}
            alt={imgSrc} />
    )
}

export default memo(MainImage);