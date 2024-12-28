import { GoClockFill } from "react-icons/go";
import { IoShieldSharp } from "react-icons/io5";
import { MdAutoFixHigh } from "react-icons/md";
import { FaAngleDoubleUp } from "react-icons/fa";

const initialPaymentsOptions = [
    {
        Icon: GoClockFill,
        title: "Low Latency",
        descr: "Our servers are strategically located to ensure minimal ping for a seamless gaming experience.",
    },
    {
        Icon: MdAutoFixHigh,
        title: "Instant Setup",
        descr: "Get your gaming server up and running instantly with our automated setup process.",
    },
    {
        Icon: IoShieldSharp,
        title: "High Security",
        descr: "Our servers are protected with top-notch security measures to keep your data safe.",
    },
    {
        Icon: FaAngleDoubleUp,
        title: "Scalable",
        descr: "Easily scale your server resources to handle increasing player counts and game demands.",
    },
];

export default function Info() {
    return (
        <section className="info flex justify-between p-10 bg-white dark:bg-dark-mode-black rounded-3xl transition">
            <div>
                <div className="dark:text-white transition">
                    <h2 className="text-4xl">
                        Finally, a better way <br /> to gaming servers
                    </h2>
                    <p className="text-gray-500 dark:text-dark-mode-gray transition">
                        Our main pillars to create the best gaming server
                        experience.
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
