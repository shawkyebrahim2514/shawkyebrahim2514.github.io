import { SanityExperiencePage } from "../../../Types";
import ExperienceItemDescription from "../ExperienceItemDescription";

function Content({ internships }: Readonly<Pick<SanityExperiencePage['internshipsSection'], 'internships'>>) {
    return (
        <>
            {internships.map((internship) => {
                return (
                    <div className="flex flex-col justify-center gap-4" key={internship.description}>
                        <ExperienceItemDescription description={internship.description} />
                    </div>
                );
            })}
        </>
    );
}

export default Content;