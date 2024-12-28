import { AiOutlinePicture } from "react-icons/ai";

export default function Header() {
    return (
        <header className="header flex gap-5">
            <div className="grid justify-items-start content-between gap-5 w-1/2 p-10 bg-white dark:bg-dark-mode-black rounded-3xl transition">
                <div className="grid content-start gap-4">
                    <h1 className="text-5xl dark:text-white transition">
                        Super fast and <br /> secure gaming server
                    </h1>
                    <p className="text-gray-500 dark:text-dark-mode-gray transition">
                        Experience unparalleled speed and top-notch security
                        with our state-of-the-art gaming server. Designed for
                        gamers who demand the best, our server ensures smooth
                        gameplay and robust protection against threats.
                    </p>
                </div>
                <button className="me-2 mb-2 px-5 py-2.5 text-sm text-white font-medium bg-gray-800 hover:bg-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-lg dark:focus:ring-gray-700 transition">
                    Open an Account
                </button>
            </div>
            <div className="grid place-items-center w-1/2 bg-gray-400 rounded-3xl">
                <AiOutlinePicture className="text-6xl text-white dark:text-black transition" />
            </div>
        </header>
    );
}
