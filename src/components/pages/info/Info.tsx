import { useTranslation } from "react-i18next";
import { GoClockFill } from "react-icons/go";
import { IoShieldSharp } from "react-icons/io5";
import { MdAutoFixHigh } from "react-icons/md";
import { FaAngleDoubleUp } from "react-icons/fa";

interface InfoOption {
    title: string;
    descr: string;
}

const initialInfoIcons = [
    GoClockFill,
    MdAutoFixHigh,
    IoShieldSharp,
    FaAngleDoubleUp,
];

export default function Info() {
    const { t } = useTranslation(["info"]);

    const initialInfoOptions = t("options", {
        returnObjects: true,
    }) as InfoOption[];

    return (
        <section className="info grid md:flex justify-between gap-5 p-10 bg-white dark:bg-dark-mode-black rounded-3xl transition">
            <div className="grid content-start gap-2 md:gap-4">
                <h2 className="text-2xl md:text-3xl dark:text-white transition">
                    {t("title")}
                </h2>
                <p className="text-xs lg:text-base text-gray-500 dark:text-dark-mode-gray transition">
                    {t("descr")}
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 md:w-1/2">
                {initialInfoIcons.map((Icon, i) => (
                    <div
                        key={i}
                        className="grid gap-2 py-5 border-t first:border-t-0 md:border-t-0 md:[&:nth-child(3)]:mt-5 md:[&:nth-child(3)]:pt-5 md:[&:nth-child(4)]:mt-5 md:[&:nth-child(4)]:pt-5 md:[&:nth-child(3)]:border-t md:[&:nth-child(4)]:border-t"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-min p-1 md:p-2 text-xl md:text-2xl text-blue-500 bg-blue-100 rounded-lg transition">
                                <Icon />
                            </div>
                            <h3 className="text-lg lg:text-xl dark:text-white font-medium transition">
                                {initialInfoOptions[i].title}
                            </h3>
                        </div>
                        <p className="text-xs lg:text-base text-gray-500 dark:text-dark-mode-gray transition">
                            {initialInfoOptions[i].descr}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
