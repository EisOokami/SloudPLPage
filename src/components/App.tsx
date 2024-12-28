import { lazy, Suspense } from "react";
import "../i18n/i18n";

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
