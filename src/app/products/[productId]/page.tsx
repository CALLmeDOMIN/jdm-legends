const Page = async ({ params }: { params: { productId: number } }) => {
  const { productId } = params

  return <div>This is this product id: {productId}</div>
}

export default Page
