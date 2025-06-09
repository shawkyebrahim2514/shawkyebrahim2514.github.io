/** @jsxImportSource @emotion/react */

import { useMemo, CSSProperties, memo } from 'react'
import BlurBackground from '../../../BlurBackground';

type ImageOverlayProps = {
    readonly isHovered: boolean,
}

function ImageOverlay({ isHovered }: ImageOverlayProps) {
    return (
        <div
            className={`absolute inset-0 flex items-center justify-center gap-4 rounded-xl transition-all duration-300 ${isHovered ? 'bg-base-200/80 z-10' : 'bg-transparent pointer-events-none z-0'}`}
        >
            <BlurBackground backgroundColor="var(--fallback-b1, #f3f4f6)" />
        </div>
    )
}

export default memo(ImageOverlay);