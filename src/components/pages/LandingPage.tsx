import { lazy, Suspense } from "react";

const Navbar = lazy(() => import("./navbar/Navbar"));
const Header = lazy(() => import("./header/Header"));
const Info = lazy(() => import("./info/Info"));
const Games = lazy(() => import("./games/Games"));
const Footer = lazy(() => import("./footer/Footer"));

export default function LandingPage() {
    return (
        <>
            <Suspense>
                <Navbar />
            </Suspense>
            <main className="grid gap-5 px-5 md:px-8 lg:px-14 xl:px-48 2xl:px-72 py-5 bg-gray-100 dark:bg-dark-mode-gray-2 transition">
                <Suspense>
                    <Header />
                </Suspense>
                <Suspense>
                    <Info />
                </Suspense>
                <Suspense>
                    <Games />
                </Suspense>
            </main>
            <Suspense>
                <Footer />
            </Suspense>
        </>
    );
}
