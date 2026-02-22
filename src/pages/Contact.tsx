import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow pt-16">
                <ContactForm />
            </main>
            <Footer />
        </div>
    );
};

export default Contact;
