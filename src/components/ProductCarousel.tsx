"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Product from "@/components/Product"
import { type ProductType } from "../../db/schema"

const ProductCarousel = ({ products }: { products: ProductType[] }) => {
  return (
    <Carousel className="mx-auto w-full max-w-[280px] md:max-w-xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl">
      <CarouselContent>
        {products.map((product) => (
          <CarouselItem
            className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            key={product.id}
          >
            <Product {...product} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="m-2 md:m-0" />
      <CarouselNext className="m-2 md:m-0" />
    </Carousel>
  )
}

export default ProductCarousel
