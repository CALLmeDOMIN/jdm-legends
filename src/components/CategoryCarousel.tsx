"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import CategoryCard from "@/components/CategoryCard"

const CategoryCarousel = ({ categories }: { categories: string[] }) => {
  return (
    <Carousel className="mx-auto w-full max-w-[280px] md:max-w-xl lg:max-w-3xl xl:max-w-5xl 2xl:max-w-7xl">
      <CarouselContent>
        {categories.map((category) => (
          <CarouselItem
            className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
            key={category}
          >
            <CategoryCard category={category} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="m-2 md:m-0" />
      <CarouselNext className="m-2 md:m-0" />
    </Carousel>
  )
}

export default CategoryCarousel
