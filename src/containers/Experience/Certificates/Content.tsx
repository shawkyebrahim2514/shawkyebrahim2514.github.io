import { SanityExperiencePage } from "../../../Types";
import ExperienceItemDescription from "../ExperienceItemDescription";

function Content({ certificates }: Readonly<Pick<SanityExperiencePage['certificatesSection'], 'certificates'>>) {
    return (
        <>
            {certificates.map((certificate) => {
                return (
                    <div className="flex flex-col justify-center gap-4" key={certificate.description}>
                        {certificate.description && <ExperienceItemDescription description={certificate.description} />}
                    </div>
                );
            })}
        </>
    );
}

export default Content;