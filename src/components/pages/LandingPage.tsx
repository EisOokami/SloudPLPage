import { lazy, Suspense } from "react";

const Navbar = lazy(() => import("./navbar/Navbar"));

export default function LandingPage() {
    return (
        <>
            <Suspense>
                <Navbar />
            </Suspense>
        </>
    );
}
