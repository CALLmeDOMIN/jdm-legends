import React from "react";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import Image from "next/image";

const Product = () => {
	return (
		<Card className="my-2 h-full max-w-sm overflow-hidden rounded-md">
			<CardHeader className="relative min-h-[300px] overflow-hidden p-4">
				<Image
					src={"/main_image.jpg"}
					alt="Picture of JDM car"
					className="object-cover"
					sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
					fill
					loading="lazy"
				/>
			</CardHeader>
			<CardContent className="p-4">
				<CardTitle>Sample Product</CardTitle>
				<CardDescription>$999999</CardDescription>
			</CardContent>
			<CardFooter>
				<Button>Add to cart</Button>
			</CardFooter>
		</Card>
	);
};

export default Product;
