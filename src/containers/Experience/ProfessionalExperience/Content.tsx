import { SanityExperiencePage } from "../../../Types";
import ExperienceItemDescription from "../ExperienceItemDescription";

function Content({ professionalExperience }: Readonly<Pick<SanityExperiencePage['professionalExperienceSection'], 'professionalExperience'>>) {
    return (
        <>
            {professionalExperience.map((experience) => {
                return (
                    <div className="flex flex-col justify-center gap-4" key={experience.description}>
                        <ExperienceItemDescription description={experience.description} />
                    </div>
                );
            })}
        </>
    );
}

export default Content;