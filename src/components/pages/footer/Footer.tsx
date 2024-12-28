const initialFooterOptions = [
    {
        title: "Strona Główna",
        url: "",
    },
    {
        title: "Aplikacje",
        url: "",
    },
    {
        title: "Status",
        url: "",
    },
    {
        title: "Hosting",
        url: "",
    },
    {
        title: "Discord",
        url: "",
    },
    {
        title: "SloudClient",
        url: "",
    },
];

export default function Footer() {
    return (
        <footer className="footer grid gap-3 px-5 sm:px-10 lg:px-24 py-4 sm:py-5 lg:py-12 dark:bg-dark-mode-black">
            <div className="text-center sm:text-left grid gap-3 justify-items-center sm:flex sm:justify-between sm:items-center">
                <div className="grid">
                    <p className="text-xs lg:text-base">Contact:</p>
                    <p className="text-xs lg:text-base">
                        E-Mail: main@sloud.pl
                    </p>
                </div>
                <ul className="hidden md:flex sm:grid-cols-3 gap-3 sm:gap-x-2 sm:gap-y-1 lg:gap-x-6 lg:gap-y-2">
                    {initialFooterOptions.map((option, i) => (
                        <li
                            key={i}
                            className="text-xs lg:text-base text-gray-600 dark:text-gray-500 hover:text-black dark:hover:text-white font-medium rounded-md cursor-pointer transition"
                        >
                            <a href={option.url}>{option.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="grid place-items-center w-full">
                Copyright SLOUD.PL &copy; 2024
            </div>
        </footer>
    );
}
