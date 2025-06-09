import PortfolioLinks from "../../PortfolioLinks";
import BlurBackground from "../../../../BlurBackground";
import ExitButton from "./ExitButton";
import { useCallback } from "react";

type DropDownLinksProps = {
    readonly isMenuOpen: boolean,
    readonly setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

function DropDownLinks({ isMenuOpen, setIsMenuOpen }: DropDownLinksProps) {
    const linkButtonOnClickHandler = useCallback(() => {
        setIsMenuOpen(false);
    }, [setIsMenuOpen]);

    if (!isMenuOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex flex-col bg-base-100 rounded shadow-lg p-4">
            <ExitButton setIsMenuOpen={setIsMenuOpen} />
            <div className="flex flex-col gap-2 mt-4">
                <PortfolioLinks linkButtonOnClickHandler={linkButtonOnClickHandler} />
            </div>
            <BlurBackground backgroundColor="var(--fallback-b1, #f3f4f6)" />
        </div>
    );
}

export default DropDownLinks;