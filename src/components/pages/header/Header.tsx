import { useCallback } from "react";
import { useTranslation } from "react-i18next";
// import { AiOutlinePicture } from "react-icons/ai";

export default function Header() {
    const { t } = useTranslation(["header"]);

    const handleSendFooter = useCallback(() => {
        window.scrollTo({
            top: 9999,
            left: 0,
            behavior: "smooth",
        });
    }, []);

    return (
        <header className="header grid md:flex gap-5">
            <div className="grid justify-items-start content-between gap-5 md:w-1/2 h-80 md:h-96 p-5 md:p-8 lg:p-10 bg-white dark:bg-dark-mode-black rounded-3xl transition">
                <div className="grid content-start gap-2 md:gap-4">
                    <h1 className="text-3xl md:text-4xl dark:text-white transition">
                        {t("title")}
                    </h1>
                    <p className="text-xs lg:text-base text-gray-500 dark:text-dark-mode-gray transition">
                        {t("descr")}
                    </p>
                </div>
                <button
                    className="px-4 py-2 md:px-5 md:py-2.5 text-sm text-white font-medium bg-gray-800 hover:bg-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-lg dark:focus:ring-gray-700 transition"
                    onClick={handleSendFooter}
                >
                    {t("btnText")}
                </button>
            </div>
            <div className="grid place-items-center md:w-1/2 h-80 md:h-96 bg-gray-400 rounded-3xl">
                {/* <AiOutlinePicture className="text-6xl text-white dark:text-black transition" /> */}
                <img
                    src="https://node1.sloudhost.ovh/sloudpl/servers.jpg"
                    alt="hosting"
                    className="object-fill w-full h-80 md:h-96 rounded-3xl"
                />
            </div>
        </header>
    );
}
