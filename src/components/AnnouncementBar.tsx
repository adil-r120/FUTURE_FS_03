import { X } from "lucide-react";
import { useState } from "react";

const AnnouncementBar = () => {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="bg-primary text-primary-foreground px-4 py-2 text-sm relative z-[60]">
            <div className="container flex justify-between items-center">
                <div className="flex-1 text-center font-medium">
                    ☕️ Happy Hour! 50% off all pastries after 4 PM.
                </div>
                <button
                    onClick={() => setIsVisible(false)}
                    className="text-primary-foreground/80 hover:text-white transition-colors"
                    aria-label="Close announcement"
                >
                    <X className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};

export default AnnouncementBar;
