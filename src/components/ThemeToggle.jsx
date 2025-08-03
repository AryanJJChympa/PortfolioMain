import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const [theme, setTheme] = useState("default");

    useEffect(() => {
        const saved = localStorage.getItem("theme");
        if (saved) setTheme(saved);
    }, []);

    useEffect(() => {
        const root = document.documentElement;
        root.classList.remove("theme-light", "theme-daisy");

        if (theme === "light") root.classList.add("theme-light");
        else if (theme === "daisy") root.classList.add("theme-daisy");

        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <div className="dropdown">
            <div tabIndex={0} role="button" className="btn p-2">
                Theme
                <svg
                    width="10px"
                    height="10px"
                    className="inline-block h-2 w-2 fill-current opacity-60"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 2048 2048"
                >
                    <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                </svg>
            </div>

            <ul
                tabIndex={0}
                className="dropdown-content bg-base-300 rounded-box z-10 w-52 p-2 shadow-2xl space-y-1"
            >
                <li>
                    <button
                        onClick={() => setTheme("default")}
                        className={`w-full btn btn-sm btn-ghost justify-start text-accent-purple${theme === "default" ? "bg-accent/30" : ""
                            }`}
                    >
                        Default (Custom)
                    </button>
                </li>
                <li>
                    <button 
                        onClick={() => setTheme("light")}
                        className={`w-full btn btn-sm btn-ghost justify-start text-accent-purple${theme === "light" ? "bg-accent/30 && text-white" : ""
                            }`}
                    >
                        Light
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => setTheme("daisy")}
                        className={`w-full btn btn-sm btn-ghost justify-start text-accent-purple${theme === "daisy" ? "bg-accent/30 && text-white" : ""
                            }`}
                    >
                        Daisy
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default ThemeToggle;
