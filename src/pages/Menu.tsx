import MenuSection from "@/components/MenuSection";
import Navbar from "@/components/Navbar";


const Menu = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-16">
                <MenuSection />
            </main>

        </div>
    );
};

export default Menu;
