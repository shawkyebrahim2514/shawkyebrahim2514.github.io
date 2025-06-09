import Logo from './Logo';
import Links from './Links';
import { SanityNavbarData } from '../../Types';
import { getNavbarData } from '../../APIs';
import Loader from '../Loader';
import { useEffect, useState } from 'react';

export default function Navbar() {
    const [navbarData, setNavbarData] = useState<SanityNavbarData | null>(null);

    useEffect(() => {
        getNavbarData().then((data) => {
            setNavbarData(data);
        });
    }, []);

    return (
        <nav className="navbar bg-base-200 rounded-box shadow mb-6">
            <div className="container mx-auto flex justify-between items-center px-4 py-2">
                {navbarData ? <Logo logo={navbarData.logo} /> : <Loader />}
                <Links />
            </div>
        </nav>
    );
}
