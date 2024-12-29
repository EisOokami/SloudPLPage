import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function LoadingFooter() {
    return (
        <footer className="grid gap-3 px-5 sm:px-10 lg:px-24 py-4 sm:py-5 lg:py-12 dark:bg-dark-mode-black">
            <div className="flex justify-center md:justify-between">
                <div className="">
                    <Skeleton width="200px" height="50px" />
                </div>
                <div className="hidden md:block w-[500px] xl:w-[700px]">
                    <Skeleton width="100%" height="50px" />
                </div>
            </div>
            <div className="text-center">
                <Skeleton width="200px" height="40px" />
            </div>
        </footer>
    );
}
