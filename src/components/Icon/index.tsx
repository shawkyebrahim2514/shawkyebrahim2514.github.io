/** @jsxImportSource @emotion/react */

import Text from '../Text';

type IconProps = {
    readonly src?: string;
    readonly alt?: string;
    readonly text?: string;
    readonly pointer?: boolean;
    readonly onClick?: () => void;
    readonly size?: 'lg' | 'md';
};

const variants = {
    lg: {
        outerPadding: 'p-4',
        imageSize: 'w-20 h-20',
        fontSize: 'text-lg',
    },
    md: {
        outerPadding: 'p-3',
        imageSize: 'w-12 h-12',
        fontSize: 'text-base',
    },
};

export default function Icon({
    src,
    alt,
    text,
    pointer = false,
    onClick,
    size = 'md',
}: IconProps) {
    return (
        <div
            className={`flex flex-col items-center ${variants[size].outerPadding} ${variants[size].fontSize} ${pointer ? 'cursor-pointer' : ''}`}
            onClick={onClick}
            tabIndex={pointer ? 0 : undefined}
            role={pointer ? 'button' : undefined}
        >
            <div className={`flex items-center justify-center rounded-full bg-base-100 border border-base-300 shadow ${variants[size].imageSize} mb-2`}>
                <img
                    className="w-3/4 h-3/4 object-cover drop-shadow"
                    src={src ?? 'images/placeholder.png'}
                    alt={alt}
                />
            </div>
            {text && <Text variant={"body"}>{text}</Text>}
        </div>
    );
}
