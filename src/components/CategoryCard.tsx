import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const CategoryCard = ({ category }: { category: string }) => {
  return (
    <Link href={`/`}>
      <Card className="h-full max-w-[280px] overflow-hidden rounded-md">
        <CardHeader className="relative min-h-[300px] p-4">
          <Image
            src={`/Category${
              category[0].toUpperCase() + category.slice(1)
            }.png`}
            alt={`Picture of ${category}`}
            className="object-cover"
            sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
            fill
            loading="lazy"
          />
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle>
            {category[0].toUpperCase() + category.slice(1) + "s"}
          </CardTitle>
        </CardContent>
      </Card>
    </Link>
  )
}

export default CategoryCard
