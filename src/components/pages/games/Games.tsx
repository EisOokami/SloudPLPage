import { useTranslation } from "react-i18next";
import { AiOutlinePicture } from "react-icons/ai";

interface GamesOption {
    title: string;
    descr: string;
    imgUrl: string;
    btnText: string;
    btnUrl: string;
}

export default function Games() {
    const { t } = useTranslation(["games"]);

    const initialGamesOptions = t("options", {
        returnObjects: true,
    }) as GamesOption[];

    return (
        <section className="games grid gap-5">
            {initialGamesOptions.map((option, i) => (
                <div key={i} className="grid md:flex gap-5">
                    {(i % 2 !== 0 || window.innerWidth < 768) && (
                        <div className="grid place-items-center md:w-1/2 bg-gray-400 rounded-3xl">
                            {option.imgUrl === "empty" ? (
                                <AiOutlinePicture className="text-6xl text-white dark:text-black transition" />
                            ) : (
                                <img
                                    src={option.imgUrl}
                                    alt={option.title}
                                    className="object-none w-full h-96 rounded-3xl"
                                />
                            )}
                        </div>
                    )}
                    <div className="grid justify-items-start content-between gap-5 md:w-1/2 p-10 bg-white dark:bg-dark-mode-black rounded-3xl transition">
                        <div className="grid content-start gap-2 md:gap-4">
                            <h1 className="text-3xl md:text-4xl dark:text-white transition">
                                {option.title}
                            </h1>
                            <p className="text-xs lg:text-base text-gray-500 dark:text-dark-mode-gray transition">
                                {option.descr}
                            </p>
                        </div>
                        <a
                            href={option.btnUrl}
                            className="px-4 py-2 md:px-5 md:py-2.5 text-sm text-white font-medium bg-gray-800 hover:bg-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-lg dark:focus:ring-gray-700 transition"
                        >
                            {option.btnText}
                        </a>
                    </div>
                    {i % 2 === 0 && window.innerWidth > 768 && (
                        <div className="grid place-items-center md:w-1/2 bg-gray-400 rounded-3xl">
                            {option.imgUrl === "empty" ? (
                                <AiOutlinePicture className="text-6xl text-white dark:text-black transition" />
                            ) : (
                                <img
                                    src={option.imgUrl}
                                    alt={option.title}
                                    className="object-none w-full h-96 rounded-3xl"
                                />
                            )}
                        </div>
                    )}
                </div>
            ))}
        </section>
    );
}
