import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function LoadingHeader() {
    return (
        <header className="grid md:flex gap-5">
            <div className="md:w-1/2 h-80 md:h-96">
                <div className="w-full h-full">
                    <Skeleton width="100%" height="100%" />
                </div>
            </div>
            <div className="md:w-1/2 h-80 md:h-96">
                <div className="w-full h-full">
                    <Skeleton width="100%" height="100%" />
                </div>
            </div>
        </header>
    );
}
