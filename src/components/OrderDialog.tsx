import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Coffee, Phone, Truck } from "lucide-react";
import { Link } from "react-router-dom";

const OrderDialog = ({ children }: { children: React.ReactNode }) => {
    return (
        <Dialog>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle>How would you like to order?</DialogTitle>
                    <DialogDescription>
                        Choose your preferred method to get your daily brew.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <Link to="/visit">
                        <Button variant="outline" className="w-full justify-start gap-4 h-14 text-base">
                            <Coffee className="w-5 h-5 text-primary" />
                            <div className="flex flex-col items-start">
                                <span className="font-semibold text-foreground">Pickup at Cafe</span>
                                <span className="text-xs font-normal text-muted-foreground">
                                    Order ahead and skip the line
                                </span>
                            </div>
                        </Button>
                    </Link>

                    <a href="https://www.ubereats.com" target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="w-full justify-start gap-4 h-14 text-base">
                            <Truck className="w-5 h-5 text-primary" />
                            <div className="flex flex-col items-start">
                                <span className="font-semibold text-foreground">Delivery</span>
                                <span className="text-xs font-normal text-muted-foreground">
                                    Via UberEats or DoorDash
                                </span>
                            </div>
                        </Button>
                    </a>

                    <a href="tel:5551234567">
                        <Button variant="outline" className="w-full justify-start gap-4 h-14 text-base">
                            <Phone className="w-5 h-5 text-primary" />
                            <div className="flex flex-col items-start">
                                <span className="font-semibold text-foreground">Call to Order</span>
                                <span className="text-xs font-normal text-muted-foreground">
                                    (555) 123-4567
                                </span>
                            </div>
                        </Button>
                    </a>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default OrderDialog;
