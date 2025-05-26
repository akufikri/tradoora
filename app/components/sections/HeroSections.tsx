import { Play, Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function HeroSections() {
    return (
        <>
            <section
                className="relative bg-[url('https://images.unsplash.com/photo-1739110364550-73d186342344?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] 
                        bg-cover bg-center w-full h-[70vh]"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-transparent"></div>
                <div className="absolute inset-0 flex items-center justify-center px-8 sm:px-16">
                    <div className="text-center">
                        <h1 className="text-white text-2xl sm:text-4xl font-bold max-w-2xl mx-auto">
                            The leading B2B ecommerce platform for global trade
                        </h1>
                        <div className="my-3 relative max-w-xl mx-auto mt-9">
                            <Input 
                                className="bg-white rounded-full placeholder:font-medium h-12 px-5 pr-32" 
                                placeholder="Iphone 11 PRO MAX"
                            />
                            <Button 
                                className="rounded-full bg-blue-500 hover:bg-blue-600 absolute right-2 top-1/2 -translate-y-1/2"
                            >
                                <Search /> Search
                            </Button>
                        </div>
                        <div className="my-3 max-w-xl mx-auto flex gap-4 items-center">
                            <span className="font-medium text-white">Most searched:</span>
                            <div className="grid grid-cols-4 gap-3">
                                <Button variant="outline" size="sm" className="bg-transparent text-white rounded-full font-medium cursor-pointer">Iphone</Button>
                                <Button variant="outline" size="sm" className="bg-transparent text-white rounded-full font-medium cursor-pointer">Samsung</Button>
                                <Button variant="outline" size="sm" className="bg-transparent text-white rounded-full font-medium cursor-pointer">Laptop</Button>
                                <Button variant="outline" size="sm" className="bg-transparent text-white rounded-full font-medium cursor-pointer">iPad</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
