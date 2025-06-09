import { memo } from 'react'
import Button from '../../../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeFork } from '@fortawesome/free-solid-svg-icons';

function ProjectButton({ projectLink }: {projectLink: string}) {
    return (
        <Button
            icon={<FontAwesomeIcon icon={faCodeFork} />}
            text={"Project"}
            size='md'
            className="btn-primary"
            onClick={() => { window.open(projectLink, "_blank") }}
        />
    )
}

export default memo(ProjectButton);