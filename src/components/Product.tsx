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
import { type ProductType } from "../../db/schema";

const Product = (product: ProductType) => {
	return (
		<Card className="my-2 h-full max-w-sm overflow-hidden rounded-md">
			<CardHeader className="relative min-h-[300px] overflow-hidden p-4">
				<Image
					src={`/${product.imageURL}.jpg`}
					alt={`Picture of ${product.name}`}
					className="object-cover"
					sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
					fill
					loading="lazy"
				/>
			</CardHeader>
			<CardContent className="p-4">
				<CardTitle>{product.name}</CardTitle>
				<CardDescription>{product.price}</CardDescription>
			</CardContent>
			<CardFooter>
				<Button>Add to cart</Button>
			</CardFooter>
		</Card>
	);
};

export default Product;
