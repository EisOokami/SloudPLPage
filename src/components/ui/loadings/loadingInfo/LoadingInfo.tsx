import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function LoadingInfo() {
    return (
        <section>
            <div className="w-full h-80 md:h-96">
                <div className="w-full h-full">
                    <Skeleton width="100%" height="100%" />
                </div>
            </div>
        </section>
    );
}
