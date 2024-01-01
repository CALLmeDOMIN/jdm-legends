import React from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button"
import Image from "next/image"
import { type ProductType } from "../../db/schema"
import Link from "next/link"

const ProductCard = (product: ProductType) => {
  return (
    <Link href={`/products/${product.id}`}>
      <Card className="h-full max-w-[280px] rounded-md">
        <CardHeader className="relative min-h-[300px] overflow-hidden p-4">
          <Image
            src={`/${product.imageURL}`}
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
        <CardFooter className="pb-3">
          <Button>Add to cart</Button>
        </CardFooter>
      </Card>
    </Link>
  )
}

export default ProductCard
