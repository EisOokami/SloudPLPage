import { BeatLoader } from "react-spinners";

export default function LoadingLandingPage() {
    return (
        <div className="flex justify-center items-center w-screen h-screen">
            <h3 className="text-4xl">Loading...</h3>
            <BeatLoader className="mt-2" color="#0096FF" size={15} />
        </div>
    );
}
