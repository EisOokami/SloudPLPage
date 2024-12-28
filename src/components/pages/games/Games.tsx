import { AiOutlinePicture } from "react-icons/ai";

const initialGamesOptions = [
    {
        title: "Minecraft",
        descr: "Minecraft is an open-world survival video game created by Markus Persson and developed by Mojang Studios. Minecraft allows players to build and destroy objects located in a randomly generated game world. The player can attack creatures they encounter, collect resources, and craft items.",
        imgUrl: "https://image.api.playstation.com/vulcan/ap/rnd/202407/0401/670c294ded3baf4fa11068db2ec6758c63f7daeb266a35a1.png",
        btnText: "Minecraft Page",
        btnUrl: "https://sloud.pl/mc/",
    },
    {
        title: "Rust",
        descr: "The only goal in Rust is survival. Everything wants you to die: the island's wildlife and other inhabitants, the environment, other survivors. Do whatever it takes to survive another night.",
        imgUrl: "https://image.api.playstation.com/vulcan/ap/rnd/202103/1501/enihR6QwSYiWCNl2HdPfV6R6.png",
        btnText: "Join",
        btnUrl: "steam://connect/node.sloud.pl:28017",
    },
    {
        title: "CS2",
        descr: "CS2 builds on the team-based action gameplay that the series pioneered when it launched over 20 years ago. CS:GO features new maps, characters, weapons, and game modes, and offers updated versions of classic CS and CS:GO content.",
        imgUrl: "https://ocdn.eu/sport-images-transforms/1/4X1k9lBaHR0cHM6Ly9vY2RuLmV1L3B1bHNjbXMvTURBXy8yOGFhMGFhZDMzNmUyY2ZhOGFhOTVlMjM0NDE5YjI2Yy5qcGeTlQM1AM0EKM0CV5UCzQSwAMLDkwmmYmUwM2UzBt4AAqEwAaExAQ/counter-strike-2.jpg",
        btnText: "List of our servers",
        btnUrl: "https://gosetti.pl/serwery?HostnameIpPort=SLOUD.PL",
    },
    {
        title: "Hosting Panel",
        descr: "CS2 builds on the team-based action gameplay that the series pioneered when it launched over 20 years ago. CS:GO features new maps, characters, weapons, and game modes, and offers updated versions of classic CS and CS:GO content.",
        imgUrl: "https://www.ukhost4u.com/wp-content/uploads/2023/05/Pros-and-Cons-of-Dedicated-Servers-for-Web-Hosting.webp",
        btnText: "Hosting Panel",
        btnUrl: "https://panel.sloudhost.ovh/",
    },
];

export default function Games() {
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
