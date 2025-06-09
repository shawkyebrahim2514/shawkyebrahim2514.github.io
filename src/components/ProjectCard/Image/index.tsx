import { useState } from 'react'
// import ImageOverlay from './ImageOverlay';
import MainImage from './MainImage';

export type ImageProps = {
    readonly imgSrc: string,
    readonly isSmallScreen: boolean,
}

export default function Image({ imgSrc, isSmallScreen }: ImageProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onMouseOver={() => { setIsHovered(true) }}
            onFocus={() => { setIsHovered(true) }}
            onMouseOut={() => { setIsHovered(false) }}
            onBlur={() => { setIsHovered(false) }}
            className={`relative overflow-hidden rounded-xl border border-base-300 shadow-md flex-none ${isSmallScreen ? 'w-full h-[250px]' : 'max-w-xs h-auto'}`}
        >
            <MainImage imgSrc={imgSrc} isHovered={isHovered} />
            {/* <ImageOverlay isHovered={isHovered} /> */}
        </div>
    )
}