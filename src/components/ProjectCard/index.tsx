import Image from './Image';
import Content from './Content';

export type ProjectCardProps = {
    readonly imgSrc?: string,
    readonly projectLink?: string,
    readonly demoLink?: string,
    readonly title?: string,
    readonly description: string,
    readonly technologies: string[],
};

export default function ProjectCard({
    imgSrc = "images/placeholder.png",
    projectLink,
    demoLink,
    title,
    description,
    technologies,
}: ProjectCardProps) {
    return (
        <div className="card bg-base-200 shadow-xl flex flex-col md:flex-row items-stretch mb-8">
            <Image imgSrc={imgSrc || "images/placeholder.png"} isSmallScreen={false} />
            <div className="flex-1 p-6 flex flex-col justify-between">
                <Content
                    description={description}
                    technologies={technologies}
                    projectLink={projectLink}
                    demoLink={demoLink}
                />
            </div>
        </div>
    );
}