import { useState, useCallback } from "react"
import Navbar from "./Navbar"

const Header = () => {
    const [navOpen, setNavOpen] = useState(false);

    const handleToggleNav = useCallback(() => {
        setNavOpen((prev) => !prev);
    }, []);

    const handleNavSelection = useCallback(() => {
        setNavOpen(false);
    }, []);

    return (
        <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b
         from-zinc-900 to-zinc-900/0">
            <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
                <h1>
                    <a href="/" className="logo">
                    <img src="/images/logo.svg" width={40} height={40} alt="Kris To"/>
                    </a>
                </h1>

                <div className="relative md:justify-self-center">
                    <button
                        type="button"
                        className="menu-btn md:hidden"
                        onClick={handleToggleNav}
                        aria-expanded={navOpen}
                        aria-controls="site-nav"
                        aria-label="Toggle navigation menu"
                    >
                        <span className="material-symbols-rounded">
                            {navOpen ? 'close' : 'menu'}
                        </span>
                    </button>
                    <Navbar navOpen={navOpen} onNavigate={handleNavSelection}/>
                </div>
                <a href="#contact" className="btn btn-secondary max-md:hidden md:justify-self-end">
                    Contact Me
                </a>
            </div>
        </header>
    )
}

export default Header
