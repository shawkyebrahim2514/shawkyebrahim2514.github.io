import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function Loader() {
  return (
    <div className="flex items-center justify-center w-full py-8">
      <FontAwesomeIcon
        className="text-primary animate-spin"
        icon={faSpinner}
        size="2x"
        spin
      />
    </div>
  );
}