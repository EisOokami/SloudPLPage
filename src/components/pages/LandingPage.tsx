import { lazy, Suspense } from "react";

const Navbar = lazy(() => import("./navbar/Navbar"));
const Header = lazy(() => import("./header/Header"));
const Info = lazy(() => import("./info/Info"));

export default function LandingPage() {
    return (
        <>
            <Suspense>
                <Navbar />
            </Suspense>
            <main className="grid gap-5 p-5 bg-gray-100 dark:bg-dark-mode-gray-2 transition">
                <Suspense>
                    <Header />
                </Suspense>
                <Suspense>
                    <Info />
                </Suspense>
            </main>
        </>
    );
}
