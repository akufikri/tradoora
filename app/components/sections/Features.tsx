import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

export function Feature() {
    return(
        <section className="bg-blue-800 h-auto p-5 flex items-center justify-center">
            <div className="grid grid-cols-4 gap-4 w-full max-w-7xl">
                <Card className="h-[300px] bg-blue-900 border-0" >
                    <CardHeader>

                    </CardHeader>
                    <CardContent>
                        lorem
                    </CardContent>
                    <CardFooter></CardFooter>
                </Card>
                <Card className="h-[300px] bg-blue-900 border-0" >
                    <CardHeader>

                    </CardHeader>
                    <CardContent>
                        lorem
                    </CardContent>
                    <CardFooter></CardFooter>
                </Card>
                <Card className="h-[300px] bg-blue-900 border-0" >
                    <CardHeader>

                    </CardHeader>
                    <CardContent>
                        lorem
                    </CardContent>
                    <CardFooter></CardFooter>
                </Card>
                <Card className="h-[300px] bg-blue-900 border-0" >
                    <CardHeader>

                    </CardHeader>
                    <CardContent>
                        lorem
                    </CardContent>
                    <CardFooter></CardFooter>
                </Card>
            </div>
        </section>
    )
}