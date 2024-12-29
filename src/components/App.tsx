import { lazy, Suspense } from "react";
import "../i18n/i18n";

import LoadingLandingPage from "./ui/loadings/loadingLandingPage/LoadingLandingPage";
const LandingPage = lazy(() => import("./pages/LandingPage"));

export default function App() {
    return (
        <>
            <Suspense fallback={<LoadingLandingPage />}>
                <LandingPage />
            </Suspense>
        </>
    );
}
