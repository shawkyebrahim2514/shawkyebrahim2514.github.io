import ActualText from './ActualText';
import Shadow from './Shadow';
import Stroke from './Stroke';

function TitleHighlightedText({ children }: { readonly children: string }) {
  return (
    <div className="relative text-primary shadow-lg rounded-lg -rotate-3 z-10">
      <Stroke />
      <Shadow />
      <ActualText text={children} />
    </div>
  );
}

export default TitleHighlightedText;