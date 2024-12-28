import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";

const initialNavbarOptions = [
    "Strona Główna",
    "Speedtest",
    "Aplikacje",
    "Status",
    "Hosting",
    "Discord",
    "Sloudclient",
];

export default function Navbar() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkMode]);

    const handleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <nav className="navbar sticky top-0 left-0 right-0 flex items-center px-10 py-5 bg-white dark:bg-dark-mode-black transition">
            <h3 className="text-3xl dark:text-white transition">SloudPL</h3>
            <ul className="flex justify-center items-center gap-3 w-full">
                {initialNavbarOptions.map((option, i) => (
                    <li
                        key={i}
                        className="px-3 py-1 text-lg dark:text-white hover:bg-gray-100 dark:hover:bg-dark-mode-gray-2 rounded-md cursor-pointer transition"
                    >
                        {option}
                    </li>
                ))}
            </ul>
            <div className="flex items-center">
                <button
                    className="text-2xl dark:text-white transition"
                    onClick={handleDarkMode}
                >
                    {isDarkMode ? <FaMoon /> : <IoSunny />}
                </button>
            </div>
        </nav>
    );
}
