/** @jsxImportSource @emotion/react */

import { useMediaQuery } from 'react-responsive';
import { memo } from 'react';
import { SanityAboutPage } from '../../../Types';
import HTMLMarkdown from '../../../components/HTMLMarkdown';

function Content({ description }: Readonly<Omit<SanityAboutPage, 'personImage'>>) {
    const isMediumScreen = useMediaQuery({ query: '(max-width: 1124px)' });
    return (
        <div className={`text-lg text-base-content ${isMediumScreen ? 'text-center' : 'text-left'}`}>
            <HTMLMarkdown markdown={description} />
        </div>
    );
}

export default memo(Content);
