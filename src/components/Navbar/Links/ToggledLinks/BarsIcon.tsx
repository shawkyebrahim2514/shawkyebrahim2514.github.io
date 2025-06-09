import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { memo, useCallback } from 'react';

type BarsIconProps = {
    readonly setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function BarsIcon({ setIsMenuOpen }: BarsIconProps) {
    const clickHandler = useCallback(() => {
        setIsMenuOpen((oldIsMenuOpen) => !oldIsMenuOpen);
    }, [setIsMenuOpen]);

    return (
        <div
            className="inline-block text-base-content cursor-pointer"
            onClick={clickHandler}
            tabIndex={0}
            role="button"
            aria-label="Open menu"
        >
            <FontAwesomeIcon icon={faBars} size={"xl"} />
        </div>
    );
}

export default memo(BarsIcon);