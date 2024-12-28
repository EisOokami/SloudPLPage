import { GoClockFill } from "react-icons/go";
import { IoShieldSharp } from "react-icons/io5";
import { MdAutoFixHigh } from "react-icons/md";
import { FaAngleDoubleUp } from "react-icons/fa";

const initialPaymentsOptions = [
    {
        Icon: GoClockFill,
        title: "Fast",
        descr: "Automatically process transfers in real-time to maximize throughput efficiency.",
    },
    {
        Icon: MdAutoFixHigh,
        title: "Instant",
        descr: "Fully automate the payment lifecycle without the need for custom coding.",
    },
    {
        Icon: IoShieldSharp,
        title: "Secure",
        descr: "Automatically process transfers in real-time to maximize throughput efficiency.",
    },
    {
        Icon: FaAngleDoubleUp,
        title: "Build for Scale",
        descr: "Automatically process transfers in real-time to maximize throughput efficiency.",
    },
];

export default function Info() {
    return (
        <section className="flex justify-between p-10 bg-white dark:bg-dark-mode-black rounded-3xl transition">
            <div>
                <div className="dark:text-white transition">
                    <h2 className="text-4xl">
                        Finally, a better way <br /> to simple payments
                    </h2>
                    <p className="text-gray-500 dark:text-dark-mode-gray transition">
                        Our main pillars to create the best fintech.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-x-10">
                {initialPaymentsOptions.map(({ Icon, title, descr }, i) => (
                    <div
                        key={i}
                        className="grid gap-2 [&:nth-child(3)]:mt-5 [&:nth-child(3)]:pt-5 [&:nth-child(4)]:mt-5 [&:nth-child(4)]:pt-5 [&:nth-child(3)]:border-t [&:nth-child(4)]:border-t"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-min p-2 text-3xl text-blue-500 bg-blue-100 rounded-lg transition">
                                <Icon />
                            </div>
                            <h3 className="text-xl dark:text-white font-medium transition">
                                {title}
                            </h3>
                        </div>
                        <p className="text-gray-500 dark:text-dark-mode-gray transition">
                            {descr}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
