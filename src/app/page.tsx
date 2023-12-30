import Product from "@/components/Product"
import Image from "next/image"
import { db } from "../../db/simple-connect"
import { type ProductType } from "../../db/schema"
import ProductCarousel from "@/components/ProductCarousel"

const data: ProductType[] = [
  {
    //rating
    id: 1,
    name: "Supra Keychain",
    price: 100,
    desc: "Supra Keychain",
    imageURL: "supraKeychain.webp",
    quantity: 5,
    type: "keychain",
  },
  {
    id: 2,
    name: "test",
    price: 100,
    desc: "test",
    imageURL: "test",
    quantity: 5,
    type: "sticker",
  },
  {
    id: 3,
    name: "test",
    price: 100,
    desc: "test",
    imageURL: "test",
    quantity: 5,
    type: "sticker",
  },
  {
    id: 4,
    name: "test",
    price: 100,
    desc: "test",
    imageURL: "test",
    quantity: 5,
    type: "sticker",
  },
  {
    id: 5,
    name: "test",
    price: 100,
    desc: "test",
    imageURL: "test",
    quantity: 5,
    type: "sticker",
  },
  {
    id: 6,
    name: "test",
    price: 100,
    desc: "test",
    imageURL: "test",
    quantity: 5,
    type: "sticker",
  },
]

const HomePage = async () => {
  // const data: ProductType[] = await db.select().from(products)

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
    </>
  )
}

export default HomePage
