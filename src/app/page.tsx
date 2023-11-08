import Product from "@/components/Product";
import Image from "next/image";

const HomePage = () => {
	return (
		<>
			<main className="p-4">
				<div className="relative -z-10 min-h-[50vh] overflow-hidden rounded-md">
					<Image
						src={"/main_image.jpg"}
						alt="Picture of JDM cars"
						className="object-cover"
						fill
						sizes="80vw"
					/>
				</div>
			</main>
			<section id="featured-products" className="p-4">
				<h1 className="mb-2 mt-5 text-center text-3xl font-bold">
					Featured Products
				</h1>
				<p className="mb-2 text-center text-gray-300">
					Find gadgets that feet you the most
				</p>
				<Product />
				<Product />
				<Product />
			</section>
		</>
	);
};

export default HomePage;
