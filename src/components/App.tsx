import { lazy, Suspense } from "react";

const LandingPage = lazy(() => import("./pages/LandingPage"));

export default function App() {
    return (
        <>
            <Suspense>
                <LandingPage />
            </Suspense>
        </>
    );
}
