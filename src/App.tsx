import "./i18n/i18n";
import Footer from "./components/ui/footer/Footer";
import Games from "./components/ui/games/Games";
import Info from "./components/ui/info/Info";
import Navbar from "./components/ui/navbar/Navbar";
import Header from "./components/ui/header/Header";

export default function App() {
    return (
        <>
            <Navbar />
            <main className="grid gap-5 px-5 md:px-8 lg:px-14 xl:px-48 2xl:px-72 py-5 bg-gray-100 dark:bg-dark-mode-gray-2 transition">
                <Header />
                <Info />
                <Games />
            </main>
            <Footer />
        </>
    );
}
