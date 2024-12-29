import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function LoadingNavbar() {
    return (
        <nav className="sticky top-0 left-0 right-0 flex justify-between items-center px-5 sm:px-10 lg:px-24 py-3 md:py-4 bg-white dark:bg-dark-mode-black border-b dark:border-dark-mode-gray transition z-50">
            <div className="">
                <Skeleton width="65px" height="50px" />
            </div>
            <div className="hidden md:block">
                <Skeleton width="500px" height="50px" />
            </div>
            <div>
                <Skeleton width="100px" height="50px" />
            </div>
        </nav>
    );
}
