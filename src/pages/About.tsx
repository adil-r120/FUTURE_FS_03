import AboutSection from "@/components/AboutSection";
import Navbar from "@/components/Navbar";


const About = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-16">
                <AboutSection />
            </main>

        </div>
    );
};

export default About;
