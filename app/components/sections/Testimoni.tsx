import { Card, CardContent } from "../ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Customer",
        image: "/avatars/sarah.jpg",
        content: "Amazing service! The quality of products exceeded my expectations. Will definitely shop here again.",
    },
    {
        name: "Michael Chen",
        role: "Verified Buyer",
        image: "/avatars/michael.jpg",
        content: "Great experience from start to finish. The customer service team was very helpful and responsive.",
    },
    {
        name: "Emma Williams",
        role: "Regular Customer",
        image: "/avatars/emma.jpg",
        content: "I've been shopping here for months now. The prices are competitive and the quality is consistently good.",
    },
    {
        name: "David Brown",
        role: "New Customer",
        image: "/avatars/david.jpg",
        content: "Very impressed with the fast delivery and product packaging. Will recommend to friends!",
    },
];

export function Testimoni() {
    return (
        <section className="py-12 px-4 max-w-6xl mx-auto w-full">
            <h2 className="text-3xl font-black text-center mb-8">What Our Customers Say</h2>
            <Carousel opts={{ align: "start" }}>
                <CarouselContent>
                    {testimonials.map((testimonial, index) => (
                        <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/2">
                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-4 mb-4">
                                        <Avatar>
                                            <AvatarImage src={testimonial.image} alt={testimonial.name} />
                                            <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <h3 className="font-semibold">{testimonial.name}</h3>
                                            <p className="text-sm text-gray-500">{testimonial.role}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-600">{testimonial.content}</p>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
            </Carousel>
        </section>
    );
}
