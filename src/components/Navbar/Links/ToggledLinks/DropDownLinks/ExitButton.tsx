import { useCallback } from 'react'
import Button from '../../../../Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

type ExitButtonProps = {
    readonly setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ExitButton({ setIsMenuOpen }: ExitButtonProps) {
    const buttonClickHandler = useCallback(() => {
        setIsMenuOpen(false);
    }, [setIsMenuOpen]);

    return (
        <Button
            className="btn btn-circle btn-ghost text-error mx-auto"
            icon={<FontAwesomeIcon icon={faCircleXmark} transform="grow-12" />}
            onClick={buttonClickHandler}
        />
    )
}
