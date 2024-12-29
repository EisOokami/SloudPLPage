import { lazy, Suspense } from "react";
import LoadingNavbar from "../ui/loadings/loadingNavbar/LoadingNavbar";
import LoadingHeader from "../ui/loadings/loadingHeader/LoadingHeader";
import LoadingInfo from "../ui/loadings/loadingInfo/LoadingInfo";
import LoadingGames from "../ui/loadings/loadingGames/LoadingGames";
import LoadingFooter from "../ui/loadings/loadingFooter/LoadingFooter";

const Navbar = lazy(() => import("./navbar/Navbar"));
const Header = lazy(() => import("./header/Header"));
const Info = lazy(() => import("./info/Info"));
const Games = lazy(() => import("./games/Games"));
const Footer = lazy(() => import("./footer/Footer"));

export default function LandingPage() {
    return (
        <>
            <Suspense fallback={<LoadingNavbar />}>
                <Navbar />
            </Suspense>
            <main className="grid gap-5 px-5 md:px-8 lg:px-14 xl:px-48 2xl:px-72 py-5 bg-gray-100 dark:bg-dark-mode-gray-2 transition">
                <Suspense fallback={<LoadingHeader />}>
                    <Header />
                </Suspense>
                <Suspense fallback={<LoadingInfo />}>
                    <Info />
                </Suspense>
                <Suspense fallback={<LoadingGames />}>
                    <Games />
                </Suspense>
            </main>
            <Suspense fallback={<LoadingFooter />}>
                <Footer />
            </Suspense>
        </>
    );
}
