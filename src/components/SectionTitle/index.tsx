import Text from '../Text'
import TitleHighlightedText from './TitleHighlightedText';

type SectionTitleProps = {
    readonly highlightedText?: string;
    readonly text?: string;
    readonly subtitle?: string;
    readonly style?: React.CSSProperties;
}

export default function SectionTitle({ highlightedText, text, subtitle }: SectionTitleProps) {
    return (
        <div className="mb-6">
            {highlightedText && <TitleHighlightedText>{highlightedText}</TitleHighlightedText>}
            {text && <Text variant="h2" className="text-primary text-2xl font-bold mb-2">{text}</Text>}
            {subtitle && <Text variant="body" className="text-base-content">{subtitle}</Text>}
        </div>
    )
}