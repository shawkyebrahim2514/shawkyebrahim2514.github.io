import Button from '../../../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { memo } from 'react';

function DemoButton({ demoLink }: {demoLink: string}) {
    return (
        <Button
            icon={<FontAwesomeIcon icon={faDesktop} />}
            text={"Demo"}
            size='md'
            className="btn-secondary"
            onClick={() => { window.open(demoLink, "_blank") }}
        />
    )
}

export default memo(DemoButton);