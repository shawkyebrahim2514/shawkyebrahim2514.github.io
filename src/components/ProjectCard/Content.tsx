import { memo } from 'react'
import ListButtons from '../ListButtons';
import ProjectButton from './Image/ImageOverlay/ProjectButton';
import DemoButton from './Image/ImageOverlay/DemoButton';
import HTMLMarkdown from '../HTMLMarkdown';

type ContentProps = {
    readonly title?: string,
    readonly description: string,
    readonly technologies: string[],
    readonly projectLink?: string,
    readonly demoLink?: string,
}

function Content({ title, description, technologies, projectLink, demoLink }: ContentProps) {
    return (
        <div className="flex flex-col items-start justify-between gap-4">
            <HTMLMarkdown markdown={description} />
            <div className="flex gap-4">
                {projectLink && <ProjectButton projectLink={projectLink} />}
                {demoLink && <DemoButton demoLink={demoLink} />}
            </div>
            <ListButtons elements={technologies} />
        </div>
    )
}

export default memo(Content);