import { db } from "../../db/simple-connect"
import Image from "next/image"
import ProductCarousel from "@/components/ProductCarousel"
import CategoryCarousel from "@/components/CategoryCarousel"
import { type ProductType } from "../../db/schema"
import { type CategoryType } from "@/lib/types"
import { data } from "@/lib/dummyData"

const HomePage = async () => {
  // const data: ProductType[] = await db.select().from(products)

  const categories: CategoryType[] = data
    .map((product) => product.type)
    .filter((value, index, self) => self.indexOf(value) === index)

  return (
    <>
      <main className="p-4">
        <div className="relative -z-10 min-h-[50vh] overflow-hidden rounded-md">
          <Image
            src={"/main_image.jpg"}
            alt="Picture of JDM car"
            className="object-cover"
            fill
            sizes="80vw"
          />
        </div>
      </main>

      <section id="featured-products" className="p-4">
        <div className="md:mx-auto md:max-w-6xl md:pl-2">
          <h1 className="mb-2 mt-5 text-center text-3xl font-bold md:text-left">
            Featured Products
          </h1>
          <p className="mb-2 text-center text-gray-300 md:pl-4 md:text-left">
            Find gadgets that fits you the most
          </p>
        </div>
        <ProductCarousel products={data} />
      </section>

      <section id="featured-categories" className="p-4">
        <h1 className="mx-auto my-5 text-center text-6xl font-bold md:max-w-2xl md:text-right md:text-5xl lg:max-w-4xl lg:text-6xl xl:max-w-6xl xl:text-8xl">
          Categories
        </h1>
        <CategoryCarousel categories={categories} />
      </section>
    </>
  )
}

export default HomePage
