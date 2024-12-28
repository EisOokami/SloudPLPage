import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { FaMoon, FaBars, FaTimes } from "react-icons/fa";
import { IoSunny } from "react-icons/io5";
import useClickOutside from "../../../hooks/UseClickOutside";

interface NavbarOption {
    title: string;
    url: string;
}

export default function Navbar() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMenuLangOpen, setIsMenuLangOpen] = useState(false);
    const refContainerMenu = useRef(null);
    const refContainerMenuLang = useRef(null);
    const { t, i18n } = useTranslation(["navbar"]);

    const initialNavbarOptions = t("options", {
        returnObjects: true,
    }) as NavbarOption[];

    useClickOutside(refContainerMenu, () => {
        setIsMenuOpen(false);
    });

    useClickOutside(refContainerMenuLang, () => {
        setIsMenuLangOpen(false);
    });

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");

        if (savedTheme) {
            const mode = savedTheme === "dark" ? "dark" : "light";

            setIsDarkMode(savedTheme === "dark");
            localStorage.setItem("theme", mode);
            document.documentElement.classList.add(mode);
        } else {
            const prefersDark = window.matchMedia(
                "(prefers-color-scheme: dark)",
            ).matches;
            const mode = prefersDark ? "dark" : "light";

            setIsDarkMode(prefersDark);
            localStorage.setItem("theme", mode);
            document.documentElement.classList.add(mode);
        }
    }, []);

    useEffect(() => {
        const savedLanguage = sessionStorage.getItem("language");
        if (savedLanguage) {
            i18n.changeLanguage(savedLanguage);
        }
    }, [i18n]);

    const handleDarkMode = () => {
        setIsDarkMode(!isDarkMode);

        if (!isDarkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuLang = () => {
        setIsMenuLangOpen(!isMenuLangOpen);
    };

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
        sessionStorage.setItem("language", lng);
    };

    return (
        <nav className="navbar sticky top-0 left-0 right-0 flex items-center justify-between px-5 sm:px-10 lg:px-24 py-3 md:py-4 bg-white dark:bg-dark-mode-black border-b dark:border-dark-mode-gray transition z-50">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold dark:text-white transition">
                SloudPL
            </h3>
            <ul className="hidden md:flex justify-center items-center gap-1 lg:gap-4 w-full">
                {initialNavbarOptions.map((option, i) => (
                    <li
                        key={i}
                        className="px-2 py-1 lg:px-3 lg:py-2 text-xs lg:text-base xl:text-lg dark:text-white hover:bg-gray-100 dark:hover:bg-dark-mode-gray-2 rounded-md cursor-pointer transition"
                    >
                        <a href={option.url}>{option.title}</a>
                    </li>
                ))}
            </ul>
            <div className="flex items-center gap-2 md:gap-3">
                <button
                    className="p-1 lg:p-2 text-2xl dark:text-white hover:bg-gray-100 dark:hover:bg-dark-mode-gray-2 rounded-md transition"
                    onClick={handleDarkMode}
                >
                    {isDarkMode ? <FaMoon /> : <IoSunny />}
                </button>
                <div className="relative">
                    <button
                        className="p-1 lg:p-2 text-base dark:text-white hover:bg-gray-100 dark:hover:bg-dark-mode-gray-2 rounded-md transition"
                        onClick={handleMenuLang}
                    >
                        {i18n.language.toUpperCase()}
                    </button>
                    {isMenuLangOpen && (
                        <ul
                            ref={refContainerMenuLang}
                            className="absolute right-0 w-32 bg-white dark:bg-dark-mode-black border rounded-md shadow-lg"
                        >
                            <li
                                className="px-3 py-2 text-base dark:text-white hover:bg-gray-100 dark:hover:bg-dark-mode-gray-2 cursor-pointer transition"
                                onClick={() => {
                                    changeLanguage("pl");
                                    setIsMenuLangOpen(false);
                                }}
                            >
                                PL
                            </li>
                            <li
                                className="px-3 py-2 text-base dark:text-white hover:bg-gray-100 dark:hover:bg-dark-mode-gray-2 cursor-pointer transition"
                                onClick={() => {
                                    changeLanguage("en");
                                    setIsMenuLangOpen(false);
                                }}
                            >
                                EN
                            </li>
                        </ul>
                    )}
                </div>
                <button
                    className="text-2xl md:hidden dark:text-white transition"
                    onClick={handleMenu}
                >
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
            {isMenuOpen && (
                <div className="absolute top-full left-0 md:hidden w-full h-svh bg-black/50">
                    <ul
                        ref={refContainerMenu}
                        className="flex flex-col gap-2 p-4 bg-white dark:bg-dark-mode-black border-t shadow-md transition"
                    >
                        {initialNavbarOptions.map((option, i) => (
                            <li
                                key={i}
                                className="px-3 py-2 text-base dark:text-white hover:bg-gray-100 dark:hover:bg-dark-mode-gray-2 rounded-md cursor-pointer transition"
                            >
                                <a href={option.url}>{option.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}
