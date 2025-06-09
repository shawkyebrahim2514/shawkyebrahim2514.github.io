import Button from '../../Button'
import { PortfolioPathes } from '../../../Types';
import { memo } from 'react';
import { useMatch, useNavigate } from 'react-router-dom';

type LinkButtonProps = {
    readonly path: PortfolioPathes,
    readonly pageName: string,
    readonly onClick?: () => void
}

function LinkButton({ path, pageName, onClick }: LinkButtonProps) {
    const navigate = useNavigate();
    const active = useMatch(`/${path}`);

    return (
        <Button
            className={`btn-ghost btn-md ${active ? 'btn-active text-primary' : ''}`}
            size='md'
            onClick={() => {
                navigate(`/${path}`);
                if (onClick) onClick();
            }}
            text={pageName} />
    )
}

export default memo(LinkButton);