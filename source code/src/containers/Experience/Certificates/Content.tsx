import { CSSProperties, useMemo } from "react";
import { SanityExperiencePage } from "../../../Types";
import ExperienceItemDescription from "../ExperienceItemDescription";

function Content({ certificates }: Readonly<Pick<SanityExperiencePage['certificatesSection'], 'certificates'>>) {
    const containerStyle = useMemo((): CSSProperties => ({
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        gap: "1rem",
    }), []);

    return (
        <>
            {certificates.map((certificate) => {
                return (
                    <div style={containerStyle} key={certificate.description}>
                        {certificate.description && <ExperienceItemDescription description={certificate.description} />}
                    </div>
                )
            })}
        </>
    )
}

export default Content;