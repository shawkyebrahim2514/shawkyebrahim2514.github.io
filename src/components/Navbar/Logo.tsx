import Text from '../Text'
import { SanityNavbarData } from '../../Types';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

export default function Logo({ logo }: Readonly<Pick<SanityNavbarData, "logo">>) {
    const navigate = useNavigate();

    const changeLinksHandler = useCallback(() => navigate(''), [navigate]);
    const onKeyDownHandler = useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "Enter") {
            changeLinksHandler();
        }
    }, [changeLinksHandler]);

    return (
        <div
            className="cursor-pointer text-primary font-bold text-2xl"
            onClick={changeLinksHandler}
            onKeyDown={onKeyDownHandler}
            tabIndex={0}
            role="button"
            aria-label="Go to home"
        >
            <Text variant={"h2"} style={{
                fontSize: "1.5rem",
                fontWeight: "700",
            }}>
                {logo}
            </Text>
        </div>
    )
}