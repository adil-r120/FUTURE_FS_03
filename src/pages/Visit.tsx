import VisitSection from "@/components/VisitSection";
import Navbar from "@/components/Navbar";


const Visit = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-16">
                <VisitSection />
            </main>

        </div>
    );
};

export default Visit;
